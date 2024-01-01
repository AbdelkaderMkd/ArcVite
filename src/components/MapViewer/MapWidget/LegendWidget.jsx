import Legend from "@arcgis/core/widgets/Legend";
import { mapViewAtom } from "../../../lib/atom";
import { useAtom } from "jotai";

const LegendWidget=()=>{

    const [mapView] = useAtom(mapViewAtom);

      const legend = new Legend({
        view: mapView,
        container: "legend-container"
      });

      return <div id="legend-container"></div>;


}
export default LegendWidget