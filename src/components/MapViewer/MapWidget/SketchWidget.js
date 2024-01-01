import Sketch from "@arcgis/core/widgets/Sketch";

let sketch;

const SketchWidget = (view, graphicsLayer) => {
  // Create a new instance of sketch widget and set its required parameters
  if (!sketch) {
    sketch = new Sketch({
      layer: graphicsLayer,
      view: view,
      updateEnabled : false,
      id: "sketch",
      // graphic will be selected as soon as it is created
      creationMode: "update",
      snappingOptions: {
        // autocasts as SnappingOptions()
        enabled: true,
        featureEnabled: true,
        selfEnabled: true,
        // enable snapping on the graphicslayer by default
        featureSources: [{ layer: graphicsLayer, enabled: true, featureEnabled: true }],
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
  }

  // Listen to sketch widget's create event.
  sketch.on("create", function (event) {
    // check if the create event's state has changed to complete indicating
    // the graphic create operation is completed.
    if (event.state === "complete") {
      // remove the graphic from the layer. Sketch adds
      // the completed graphic to the layer by default.
      console.log("event ", event);
      // graphicsLayer.remove(event.graphic);

      // use the graphic.geometry to query features that intersect it
      // selectFeatures(event.graphic.geometry);
    }
  });

  const component = view.ui._components.find((elt) => elt.id == "sketch");

  if (component) {
    console.log("remove sketch widget",component);

    sketch.updateEnabled = false;
    sketch.creationMode = "none";
    view.ui.remove("sketch");
    // component.destroy()
  } else {
    console.log("create/add sketch widget",component);
    console.log("sketch before",sketch);

    sketch.updateEnabled = true;
    sketch.creationMode = "update";
    console.log("sketch after",sketch);

    view.ui.add(sketch, "top-right");
  }
};

export default SketchWidget;
