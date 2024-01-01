import Print from "@arcgis/core/widgets/Print";
import { mapViewAtom } from "../../../lib/atom";
import { useAtom } from "jotai";

const PrintWidget=()=>{

    const [mapView] = useAtom(mapViewAtom);

      const print = new Print({
        view: mapView,
        selectionEnabled: true,
        container: "print-container"
      });

      return <div id="print-container"></div>;


}
export default PrintWidget