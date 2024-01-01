import BasemapGalleryWidget from "./BasemapGalleryWidget";
import BookmarksWidget from "./BookmarksWidget";
import LayerListWidget from "./LayerListWidget";
import LegendWidget from "./LegendWidget";
import SketchWidget from "./MTWidget";
import PrintWidget from "./PrintWidget";

const WidgetContainer = ({ widgetName }) => {

  const contentHandler = () => {
    switch (widgetName) {
      case "BasemapGallery":
        return <BasemapGalleryWidget />;
      case "LayerList":
        return <LayerListWidget />;
      case "Legend":
        return <LegendWidget />;
      case "Bookmarks":
        return <BookmarksWidget />;
      case "Print":
        return <PrintWidget />;

      default:
        return <div style={{ color: "black" }}>Not Found</div>;
    }
  };

  return contentHandler();
};

export default WidgetContainer;
