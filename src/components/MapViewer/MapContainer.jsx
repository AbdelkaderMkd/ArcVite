import { useEffect, useState, useRef } from "react";
import { AutoComplete, Button, Layout, Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Search from "@arcgis/core/widgets/Search";
import Editor from "@arcgis/core/widgets/Editor";
import { addBasemapGallery } from "./MapWidget/BaseMapGallery";
import Spinner from "../common/Spinner";
// const apiKey = import.meta.env.VITE_ARCGIS_API_KEY;

const MapContainer = () => {
  const mapDiv = useRef(null);
  const [isLoading, setIsLoading] = useState(true); // Add this state

  // esriConfig.apiKey = apiKey;

  useEffect(() => {
    // Create a Map instance
    const map = new Map({
      basemap: "topo-vector", // This is one of many basemaps available.
    });

    // Create a MapView instance (for 2D viewing) and reference the map div
    const view = new MapView({
      container: mapDiv.current,
      map: map,
      zoom: 8,
      center: [3.2, 36.6], // Longitude, latitude
      ui: {
        components: ["zoom", "compass","navigation-toggle"]
    }
    });
    view
      .when(() => {
        console.log("view loading..");
      })
      .then(() => {
        console.log("view loaded");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error while loading view ",err);
        setIsLoading(false);
      });
    const basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "arcgis-imagery",
    });

    view.ui.add(basemapToggle, "bottom-right");

    var searchWidget = new Search({
      view: view,
    });

    // Add the search widget to the top right corner of the view
    view.ui.add(searchWidget, {
      position: "top-right",
    });

    addBasemapGallery(view);

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
      if (mapDiv.current) {
        // Do something with the data
        console.log("something with the data");

      }
    };

  }, []);

  return (
    <Content
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {isLoading && (<Spinner/>)}
        <div ref={mapDiv} style={{ width: "100%", height: "100%" }} />
      </div>
    </Content>
  );
};

export default MapContainer;
