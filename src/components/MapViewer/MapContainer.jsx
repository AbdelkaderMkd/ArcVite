import React, { useEffect, useState, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import BasemapToggleWidget from "./MapWidget/BasemapToggleWidget";
import { addSearch } from "./MapWidget/Search";
import { addScaleBar } from "./MapWidget/ScaleBar";
import SketchWidget from "./MapWidget/SketchWidget";
import { Layout, Drawer, Tooltip, FloatButton } from "antd";
import WidgetContainer from "./MapWidget/WidgetContainer";
import { mapViewAtom } from "../../lib/atom";
import { useAtom } from "jotai";
import MeasurementWidget from "./MapWidget/MeasureWidget";
import Spinner from "../common/Spinner";
import "./MapContainer.css";
const { Sider, Content } = Layout;
const graphicsLayer = new GraphicsLayer();

const MapContainer = () => {
  const mapDiv = useRef(null);

  const [isLoading, setIsLoading] = useState(true); // Add this state
  const [collapsed, setCollapsed] = useState(true);
  const [open, setOpen] = useState(false);
  const [viewElement, setViewElement] = useState(null);

  const [mapView, setMapView] = useAtom(mapViewAtom);

  const showDrawer = ({ target }) => {
    console.log("valuje ", target.id);
    setOpen(true);
    setViewElement(target.id);
  };
  const onClose = () => {
    setOpen(false);
    setViewElement(null);
  };
  
  const initMapViewer = () => {
    // Create a Map instance
    const map = new Map({
      basemap: "topo-vector", // This is one of many basemaps available.
      layers: [graphicsLayer],
    });

    // Create a MapView instance (for 2D viewing) and reference the map div
    const view = new MapView({
      container: mapDiv.current,
      map: map,
      zoom: 12,
      center: [3.1, 36.75], // Longitude, latitude
      ui: {
        components: ["zoom", "compass"],
      },
    });
    return view;
  };

  useEffect(() => {
    const view = initMapViewer();
    setMapView(view);
    view
      .when(() => {
        console.log("view loading..");
      })
      .then(() => {
        console.log("view loaded");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error while loading view ", err);
        setIsLoading(false);
      });

    addSearch(view); //update

    // addSketch(view, graphicsLayer);

    // addBasemapGallery(view);
    // addBasemapToggle(view);

    addScaleBar(view);

    // addFullScreen(view); //pb

    // addFeatureLayer(view); // revoir les layers + activé/désactivé

    // const editor = new Editor({
    //   view: view,
    // });

    // view.ui.add(editor, "top-right");
    // view.popupEnabled = false; // Disable the default popup behavior

    // view.on("click", function (event) {
    //   // Listen for the click event
    //   view.hitTest(event).then(function (hitTestResults) {
    //     // Search for features where the user clicked
    //     if (hitTestResults.results) {
    //       view.openPopup({
    //         // open a popup to show some of the results
    //         location: event.mapPoint,
    //         title: "Hit Test Results",
    //         content: hitTestResults.results.length + "Features Found",
    //       });
    //     }
    //   });
    // });
    // view.ui._removeComponents(["attribution"]);
    // const basemaps = new BasemapGallery({
    //   view,
    //   container: "basemaps-container"
    // });

    //clean up
    return () => {
      console.log("psst clean up map");
      if (view && view.ready) {
        console.log("destroy map view");
        // Remove any event listeners, if you've added any
        // e.g., view.on("click", someFunction);

        // Destroy the view to release resources
        view.destroy();
      }
    };
  }, []);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width="45px" onClick={showDrawer}>
        <Tooltip placement="right" title="LayerList">
          <i id="LayerList" style={{ padding: "14px" }} className="esri-icon-layers" />
        </Tooltip>
        <Tooltip placement="right" title="BasemapGallery">
          <i id="BasemapGallery" style={{ padding: "14px" }} className="esri-icon-basemap" />
        </Tooltip>
        <Tooltip placement="right" title="Legend">
          <i id="Legend" style={{ padding: "14px" }} className="esri-icon-legend" />
        </Tooltip>
        <Tooltip placement="right" title="Measure">
          <i id="Measure" style={{ padding: "14px" }} className="esri-icon-measure" />
        </Tooltip>
        <Tooltip placement="right" title="Bookmarks">
          <i id="Bookmarks" style={{ padding: "14px" }} className="esri-icon-bookmark" />
        </Tooltip>
        <Tooltip placement="right" title="Print">
          <i id="Print" style={{ padding: "14px" }} className="esri-icon-printer" />
        </Tooltip>
        <Tooltip placement="right" title="Information">
          <i id="Information" style={{ padding: "14px" }} className="esri-icon-description" />
        </Tooltip>
      </Sider>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          // height: "100vh",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {isLoading && <Spinner />}
          <div ref={mapDiv} style={{ width: "100%", height: "100%" }} />
          <>
            <FloatButton.Group
              trigger="click"
              // type="primary"
              style={{
                right: 24,
              }}
              icon={<i className="esri-icon-globe" />}
            >
              <FloatButton onClick={() => SketchWidget(mapView, graphicsLayer)} icon={<i className="esri-icon-edit" />} />
              <FloatButton onClick={() => BasemapToggleWidget(mapView)} icon={<i className="esri-icon-maps" />} />
            </FloatButton.Group>
            <FloatButton.Group
              trigger="hover"
              onClick={() => MeasurementWidget(mapView, "clear")}
              // type="primary"
              shape="square"
              style={{
                left: 72,
              }}
              icon={<i className="esri-icon-measure" />}
            >
              <FloatButton onClick={() => MeasurementWidget(mapView, "distance")} icon={<i className="esri-icon-measure-line" />} />
              <FloatButton onClick={() => MeasurementWidget(mapView, "area")} icon={<i className="esri-icon-measure-area" />} />
            </FloatButton.Group>
            {/* <FloatButton.Group
              trigger="hover"
              type="primary"
              style={{
                right: 94,
              }}
              icon={<CustomerServiceOutlined />}
            >
              <FloatButton />
              <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group> */}
          </>

          {/* a exploer comment gere la barre d'outils ----------------------------------------------------*/}
          {/* <div id="toolbarDiv" class="esri-component esri-widget">
            <button id="distance" class="esri-widget--button esri-interactive esri-icon-measure-line" title="Distance Measurement Tool"></button>
            <button id="area" class="esri-widget--button esri-interactive esri-icon-measure-area" title="Area Measurement Tool"></button>
            <button id="clear" class="esri-widget--button esri-interactive esri-icon-trash" title="Clear Measurements"></button>
          </div> */}
        </div>
      </Content>
      <Drawer
        // className="drawer"
        title={viewElement}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <WidgetContainer widgetName={viewElement} />
      </Drawer>
    </Layout>
  );
};

export default MapContainer;
