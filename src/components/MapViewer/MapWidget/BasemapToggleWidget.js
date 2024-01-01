import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";

const BasemapToggleWidget = (view) => {

  const basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "arcgis-imagery",
    id: "basemapToggle",
  });

  const component = view.ui._components.find(
    (elt) => elt.id == "basemapToggle"
  );

  if (component) {
    view.ui.remove("basemapToggle");
  } else {
    view.ui.add(basemapToggle, "bottom-left");
  }

};

export default BasemapToggleWidget;
