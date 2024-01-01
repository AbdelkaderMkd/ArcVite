import Measurement from "@arcgis/core/widgets/Measurement";

let measurement;

const MeasurementWidget = (view, activeTool) => {
  const component = view.ui._components.find((elt) => elt.id == "measurement");

  if (activeTool == "clear") {
    console.log("clear component measurement");
    measurement?.clear();
    view.ui.remove("measurement");
    // component?.destroy();
  } else {
    if (component) {
      console.log("change activeTool to", activeTool);
      console.log("component widget", component);
      if (component.widget.label == activeTool) {
        measurement.clear();

        view.ui.remove("measurement");
        // component?.destroy()
      } else {
        measurement.clear();
        measurement = new Measurement({
          view: view,
          activeTool: activeTool,
          label: activeTool,
          id: "measurement",
        });
        view.ui.remove("measurement");
        view.ui.add(measurement, "top-right");
      }
    } else {
      console.log("create measurement ", activeTool);
      measurement = new Measurement({
        view: view,
        activeTool: activeTool,
        label: activeTool,
        id: "measurement",
      });
      view.ui.add(measurement, "top-right");
    }

  }
};

export default MeasurementWidget;
