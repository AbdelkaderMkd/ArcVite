import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";

export const addBasemapToggl = (view) => {
  const basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "arcgis-imagery",
  });

  view.ui.add(basemapToggle, "bottom-right");
};
