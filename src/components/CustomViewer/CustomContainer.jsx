import React,{ useEffect, useState, useRef } from "react";
import { Content } from "antd/es/layout/layout";
import Spinner from "../common/Spinner";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
// import { addBasemapToggle } from "../MapViewer/MapWidget/BasemapToggle";
import { addSearch } from "../MapViewer/MapWidget/Search";
import { addScaleBar } from "../MapViewer/MapWidget/ScaleBar";
// import { addSketch } from "../MapViewer/MapWidget/Sketch";
import { addBasemapGallery } from "../MapViewer/MapWidget/BasemapGalleryWidget";
import { addFullScreen } from "../MapViewer/MapWidget/Fullscreen";
import { addFeatureLayer } from "../MapViewer/MapWidget/FeatureLayer";
import { Button, Layout } from "antd";
import { Drawer } from "antd";
import { Tooltip } from "antd";
const { Sider } = Layout;
import "@esri/calcite-components/dist/components/calcite-alert";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-rating";
import "@esri/calcite-components/dist/components/calcite-loader";
import "@esri/calcite-components/dist/components/calcite-panel";
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import './CustomContainer.css'

const CustomContainer = () => {
  const mapDiv = useRef(null);
  const [isLoading, setIsLoading] = useState(true); // Add this state
  const [collapsed, setCollapsed] = useState(true);
  const [open, setOpen] = useState(false);
  let activeWidget;

  const handleActionBarClick = ({ target }) => {
    console.log("target ",target);
    if (target.tagName !== "CALCITE-ACTION") {
      return;
    }

    if (activeWidget) {
      document.querySelector(`[data-action-id=${activeWidget}]`).active = false;
      document.querySelector(`[data-panel-id=${activeWidget}]`).hidden = true;
    }

    const nextWidget = target.dataset.actionId;
    if (nextWidget !== activeWidget) {
      document.querySelector(`[data-action-id=${nextWidget}]`).active = true;
      document.querySelector(`[data-panel-id=${nextWidget}]`).hidden = false;
      activeWidget = nextWidget;
    } else {
      activeWidget = null;
    }
  };
  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const initMapViewer = () => {
    const graphicsLayer = new GraphicsLayer();

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
      padding:{
        left:  49
      }
    });
    return { view, graphicsLayer };
  };

  useEffect(() => {
    const { view, graphicsLayer } = initMapViewer();
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
    const basemaps = new BasemapGallery({
      view,
      container: "basemaps-container"
    });


    // document.querySelector("calcite-action-bar").addEventListener("click", handleActionBarClick);

    let actionBarExpanded = false;

    document.addEventListener("calciteActionBarToggle", event => {
      actionBarExpanded = !actionBarExpanded;
      view.padding = {
        left: actionBarExpanded ? 150 : 49
      };
    });

    // document.querySelector("calcite-shell").hidden = false;
    // document.querySelector("calcite-loader").hidden = true;


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
    
  <calcite-shell content-behind>

      {/* <Sider width="45px">
        <Tooltip placement="right" title="BasemapGallery">
          <i
            style={{ padding: "14px" }}
            onClick={showDrawer}
            className="esri-icon-basemap"
          />
        </Tooltip>
        <Tooltip placement="right" title="BasemapGallery">
          <i
            style={{ padding: "14px" }}
            onClick={showDrawer}
            className="esri-icon-legend"
          />
        </Tooltip>
        <Tooltip placement="right" title="BasemapGallery">
          <i
            style={{ padding: "14px" }}
            onClick={showDrawer}
            className="esri-icon-layers"
          />
        </Tooltip>
        <Tooltip placement="right" title="BasemapGallery">
          <i
            style={{ padding: "14px" }}
            onClick={showDrawer}
            className="esri-icon-measure"
          />
        </Tooltip>
      </Sider> */}

      {/* <Sider width='49px'> */}
      {/* <calcite-loader></calcite-loader> */}
      {/* <Content         style={{
          display: "flex",
          flexDirection: "column",
          // height: "100vh",
        }}> */}


      <calcite-shell-panel slot="panel-start" display-mode="float" style={{ height: "inherit", width: "inherit"}}>
        <calcite-action-bar slot="action-bar" onClick={handleActionBarClick}  >
          <calcite-action data-action-id="layers" icon="layers" text="Layers"></calcite-action>
          <calcite-action data-action-id="basemaps" icon="basemap" text="Basemaps"></calcite-action>
          <calcite-action data-action-id="legend" icon="legend" text="Legend"></calcite-action>
          <calcite-action data-action-id="bookmarks" icon="bookmark" text="Bookmarks"></calcite-action>
          <calcite-action data-action-id="print" icon="print" text="Print"></calcite-action>
          <calcite-action data-action-id="information" icon="information" text="Information"></calcite-action>
        </calcite-action-bar>

        {/* <!-- Map-specific panels (each one provides a div for a ArcGIS Maps SDK for JavaScript widget) --> */}
        <calcite-panel heading="Layers" height-scale="l" data-panel-id="layers" hidden>
          <div id="layers-container"></div>
        </calcite-panel>
        <calcite-panel heading="Basemaps" height-scale="l" data-panel-id="basemaps" hidden>
          <div id="basemaps-container"></div>
        </calcite-panel>
        <calcite-panel heading="Legend" height-scale="l" data-panel-id="legend" hidden>
          <div id="legend-container"></div>
        </calcite-panel>
        <calcite-panel heading="Bookmarks" height-scale="l" data-panel-id="bookmarks" hidden>
          <div id="bookmarks-container"></div>
        </calcite-panel>
        <calcite-panel heading="Print" height-scale="l" data-panel-id="print" hidden>
          <div id="print-container"></div>
        </calcite-panel>

        {/* <!-- Info panel (populates with info from the web map) --> */}
        <calcite-panel heading="Details" data-panel-id="information" hidden>
          <div id="info-content">
            <img id="item-thumbnail" alt="webmap thumbnail" />
            <div id="item-description">
              {/* <!-- Dynamically populated --> */}
            </div>
            <calcite-label layout="inline">
              <b>Rating:</b>
              <calcite-rating id="item-rating" read-only>
                {/* <!-- Dynamically populated --> */}
              </calcite-rating>
            </calcite-label>
          </div>
        </calcite-panel>
      </calcite-shell-panel>
      {/* <div style={{ position: "relative", width: "100%", height: "100%" }}> */}
          {/* {isLoading && <Spinner />} */}
          <div ref={mapDiv} className="map-view" style={{  width: "100%", height: "100%", outline: "none" }}/>
          <>
            <FloatButton.Group
              trigger="click"
              // type="primary"
              style={{
                right: 24,
              }}
              icon={<i className="esri-icon-globe" />}
            >
              <FloatButton />
              <FloatButton icon={<CommentOutlined />} />
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
          {/* </div> */}
      {/* </Content> */}
      {/* </Sider> */}
      {/* <Content
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
              <FloatButton />
              <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group>
            <FloatButton.Group
              trigger="hover"
              type="primary"
              style={{
                right: 94,
              }}
              icon={<CustomerServiceOutlined />}
            >
              <FloatButton />
              <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group>
          </>
        </div>
      </Content> */}
      {/* <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <i className="esri-icon-basemap" style={{ padding: "10px" }} />
        <Button
          onClick={() => {
            onClose(), addBasemapGallery(view);
          }}
        >
          BasemapGallery
        </Button>
        <calcite-alert
          icon="rangefinder"
          kind="brand"
          open
          label="A report alert"
        >
          <div slot="title">Trail Camera Report </div>
          <div slot="message">We thought you might want to take a look</div>
          <calcite-link slot="link">Take action</calcite-link>
        </calcite-alert>
      </Drawer> */}
    </calcite-shell>

  );
};

export default CustomContainer;
