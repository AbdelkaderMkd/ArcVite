import LayerList from "@arcgis/core/widgets/LayerList";
import { mapViewAtom } from "../../../lib/atom";
import { useAtom } from "jotai";

const LayerListWidget=()=>{

    const [mapView] = useAtom(mapViewAtom);

      const layerList = new LayerList({
        view: mapView,
        selectionEnabled: true,
        container: "layers-container"
      });

      return <div id="layers-container"></div>;


}
export default LayerListWidget