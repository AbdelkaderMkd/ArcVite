import { useEffect, useState, useRef } from "react";
import { AutoComplete, Button, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Search from "@arcgis/core/widgets/Search";
const apiKey = import.meta.env.VITE_ARCGIS_API_KEY;

const MapContainer = () => {
  const mapDiv = useRef(null);
  esriConfig.apiKey = apiKey;

  useEffect(() => {
    // Create a Map instance
    const map = new Map({
      basemap: "topo-vector", // This is one of many basemaps available.
    });

    // Create a MapView instance (for 2D viewing) and reference the map div
    const view = new MapView({
      container: mapDiv.current,
      map: map,
      zoom: 4,
      center: [15, 65], // Longitude, latitude
    });
    view
      .when(() => {
        console.log("view loading..");
      })
      .then(() => {
        console.log("view loaded");
      })
      .catch(() => {
        console.log("error while loading view ");
      });
    const basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "arcgis-imagery",
    });

    view.ui.add(basemapToggle, "bottom-right");
    const basemapGallery = new BasemapGallery({
      view: view,
      source: {
        query: {
          title: '"World Basemaps for Developers" AND owner:esri',
        },
      },
    });
    view.ui.add(basemapGallery, "top-right"); // Add to the view

    var searchWidget = new Search({
      view: view,
    });

    // Add the search widget to the top right corner of the view
    view.ui.add(searchWidget, {
      position: "top-left",
    });
  }, []);

  return (
    <Content
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {/* <Button
        // onClick={() => setShowModal(true)}
        style={
          {
            //   fontSize: "16px",
            //   width: 128,
            //   height: 128,
          }
        }
      >
        Ajouter
      </Button>
      <AutoComplete
        // options={options}
        style={{
          width: 200,
        }}
        // onSelect={onSelect}
        // onSearch={(text) => setOptions(getPanelValue(text))}
        // onChange={searchHandler}
        placeholder="Recherche"
      /> */}
      <div ref={mapDiv} style={{ width: "100%", height: "100%" }} />
      {/* <FormPlant fetchData={fetchData} showModal={showModal} modalHandler={modalHandler} setItemData={setItemData} itemData={itemData} />
      <Datatable fetchData={fetchData} tableData={tableData} modalHandler={modalHandler} setItemData={setItemData} /> */}
    </Content>
  );
};

export default MapContainer;
