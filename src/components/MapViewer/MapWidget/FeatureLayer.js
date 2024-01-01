import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export const addFeatureLayer = (view) => {
  const featureLayerWidget = [
    new FeatureLayer({
      url: "http://services.arcgis.com/P8Cok4qAP1sTVE59/arcgis/rest/services/ALG_ADMLEVEL2/FeatureServer",
      title: "Mdrrrrrr",
      popupEnabled: true,
      outFields: ["*"],
      opacity: 0.8,
      popupTemplate: {
        title: "{FIRST_NAME}",
      },
    }),
  ];

  view.map.addMany(featureLayerWidget);

  //Trailheads feature layer (points)
  const trailheadsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
  });

  view.map.add(trailheadsLayer);
};
