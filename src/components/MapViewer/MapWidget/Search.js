import Search from "@arcgis/core/widgets/Search";

export const addSearch = (view) => {
  const searchWidget = new Search({
    view: view,
    //add my layers as source
  });

  // Add the search widget to the top right corner of the view
  view.ui.add(searchWidget, {
    position: "top-right",
  });
};
