import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Basemap from "@arcgis/core/Basemap";

import { mapViewAtom } from "../../../lib/atom";
import { useAtom } from "jotai";

export const addBasemapGallery = (view) => {
  const customBasemap = new Basemap({
    portalItem: {
      id: "46a87c20f09e4fc48fa3c38081e0cae6",
    },
  });

  const basemapGallery = new BasemapGallery({
    view: view,
    // source: {
    //   query: {
    //     title: '"World Basemaps for Developers" AND owner:esri',
    //   },
    // },
    source: [
      Basemap.fromId("topo-vector"),
      Basemap.fromId("hybrid"),
      customBasemap,
    ], // autocasts to LocalBasemapsSource
  });

  view.ui.add(basemapGallery, "top-right"); // Add to the view
};

const BasemapGalleryWidget = () => {
  const [mapView] = useAtom(mapViewAtom);

  console.log("mapView basemap-container ", mapView);
  const customBasemap = new Basemap({
    portalItem: {
      id: "46a87c20f09e4fc48fa3c38081e0cae6",
    },
    // container: "basemap-container",
  });

  const basemapGallery = new BasemapGallery({
    view: mapView,
    // source: {
    //   query: {
    //     title: '"World Basemaps for Developers" AND owner:esri',
    //   },
    // },
    container: "basemap-container",
    source: [
      Basemap.fromId("topo-vector"),
      Basemap.fromId("hybrid"),
      customBasemap,
    ], // autocasts to LocalBasemapsSource
  });

  return <div id="basemap-container"></div>;

  // view.ui.add(basemapGallery, "top-right"); // Add to the view
};

export default BasemapGalleryWidget;
