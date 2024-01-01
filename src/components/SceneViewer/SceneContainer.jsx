import { useEffect, useState, useRef } from "react";
import { Content } from "antd/es/layout/layout";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import Spinner from "../common/Spinner";
import { Button } from "antd";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { addSketchViewModel } from "./SceneWidget/SketchViewModel";

const SceneContainer = () => {
  const sceneDiv = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const initSceneViewer = () => {
    // the layer where the graphics are sketched
    const graphicsLayer = new GraphicsLayer({
      elevationInfo: { mode: "on-the-ground" },
      title: "Sketch GraphicsLayer",
    });

    const webScene = new WebScene({
      // Define the web scene reference
      portalItem: {
        id: "579f97b2f3b94d4a8e48a5f140a6639b",
        portal: "https://www.arcgis.com", // Default: The ArcGIS Online Portal
      },
    });

    const view = new SceneView({
      // Load the web scene
      map: webScene,
      container: sceneDiv.current,
      //   camera: {
      //     position: [
      //       3.05, // lon
      //       36.76, // lat
      //       20000, // elevation in meters
      //     ],
      //   },
      //   heading: 95, // direction the camera is looking
      //   tilt: 65 // tilt of the camera relative to the ground
    });

    return { view, graphicsLayer };
  };

  useEffect(() => {
    const { view, graphicsLayer } = initSceneViewer();
    view
      .when(() => {
        console.log("view loading..");
      })
      .then(() => {
        console.log("view loaded");
        setIsLoading(false);
      })
      .catch(() => {
        console.log("error while loading view ");
        setIsLoading(false);
      });

    // addSketchViewModel(view, graphicsLayer);

    view.ui._removeComponents(["attribution"]);
    // view.ui.add(<Button>logo</Button>, "top-right");

    return () => {
      console.log("psst clean up scence");
      if (view && view.ready) {
        console.log("destroy scence view");
        // Remove any event listeners, if you've added any
        // e.g., view.on("click", someFunction);

        // Destroy the view to release resources
        view.destroy();
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
        {isLoading && <Spinner />}
        <div ref={sceneDiv} style={{ width: "100%", height: "100%" }} />
      </div>
    </Content>
  );
};

export default SceneContainer;
