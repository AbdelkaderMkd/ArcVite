import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";

export const addSketchViewModel = (view, gLayer) => {
  const sketchViewModel = new SketchViewModel({
    layer: gLayer,
    view: view,
    polygonSymbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 10, // extrude by 10 meters
          material: {
            color: white,
          },
          edges: {
            type: "solid",
            size: "3px",
            color: [82, 82, 122, 0.8],
          },
        },
      ],
    },
    defaultCreateOptions: { hasZ: false },
  });

  view.ui.add(sketchViewModel, "top-right");
};
