import { mapViewAtom } from "../../../lib/atom";
import { useAtom } from "jotai";
import Sketch from "@arcgis/core/widgets/Sketch";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";


const SketchWidget=()=>{

    const [mapView] = useAtom(mapViewAtom);
    const graphicsLayer = new GraphicsLayer();

 // Create a new instance of sketch widget and set its required parameters
 const sketch = new Sketch({
  layer: graphicsLayer,
  view: mapView,
  container: "sketch-container",
  // graphic will be selected as soon as it is created
  creationMode: "update",
  snappingOptions: {
    // autocasts as SnappingOptions()
    enabled: true,
    featureEnabled: true,
    selfEnabled: true,
    // enable snapping on the graphicslayer by default
    featureSources: [
      { layer: graphicsLayer, enabled: true, featureEnabled: true },
    ],
  },
  // visibleElements: {  // hide/show sketch elements
  //   createTools: {
  //     "circle": false  // hide the circle tool
  //   },
  //   selectionTools: {
  //     "lasso-selection": false  // hide the lasso-selection tool
  //   }
  // }
});

// Listen to sketch widget's create event.
  sketch.on("create", function (event) {
    // check if the create event's state has changed to complete indicating
    // the graphic create operation is completed.
    if (event.state === "complete") {
      // remove the graphic from the layer. Sketch adds
      // the completed graphic to the layer by default.
      console.log("event ",event);
      // graphicsLayer.remove(event.graphic);

      // use the graphic.geometry to query features that intersect it
      // selectFeatures(event.graphic.geometry);
    }
  });


      return <div id="sketch-container"></div>;


}
export default SketchWidget