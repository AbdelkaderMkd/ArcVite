import ScaleBar from "@arcgis/core/widgets/ScaleBar";

export const addScaleBar = (view) => {
  const scaleBarWidget = new ScaleBar({
    view: view,
  });
  view.ui.add(scaleBarWidget, {
    position: "bottom-left",
  });
};
