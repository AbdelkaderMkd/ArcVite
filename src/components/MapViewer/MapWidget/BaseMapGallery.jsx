import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";

export const addBasemapGallery = (view) => {
  const basemapGallery = new BasemapGallery({
    view: view,
    source: {
      query: {
        title: '"World Basemaps for Developers" AND owner:esri',
      },
    },
  });
  view.ui.add(basemapGallery, "top-right"); // Add to the view
};
