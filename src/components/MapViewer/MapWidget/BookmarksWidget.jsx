import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import { mapViewAtom } from "../../../lib/atom";
import { useAtom } from "jotai";

const BookmarksWidget=()=>{

    const [mapView] = useAtom(mapViewAtom);

    const bookmarks = new Bookmarks({
        view: mapView,
        container: "bookmarks-container"
      });

      return <div id="bookmarks-container"></div>;


}
export default BookmarksWidget