import Fullscreen from "@arcgis/core/widgets/Fullscreen";

export const addFullScreen = (view) => {
  const fullscreenWidget = new Fullscreen({
    view: view,
  });
  view.ui.add(fullscreenWidget, {
    position: "top-left",
  });
};
