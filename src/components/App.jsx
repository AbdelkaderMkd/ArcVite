import { useState } from "react";
import { Layout, Menu } from "antd";
import { Footer, Header } from "antd/es/layout/layout";
import MapContainer from "./MapViewer/MapContainer";
import SceneContainer from "./SceneViewer/SceneContainer";
import esriConfig from "@arcgis/core/config";
import "./App.css";
import StatisticContainer from "./Statistic/StatisticContainer";
const blue = "#001528";
const gray = "#242424";
const apiKey = import.meta.env.VITE_ARCGIS_API_KEY;
esriConfig.apiKey = apiKey;

function App() {
  const [current, setCurrent] = useState("map");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const containerHandler = () => {
    switch (current) {
      case "map":
        return <MapContainer />;

      case "scene":
        return <SceneContainer />;

      case "statistic":
        return <StatisticContainer />;

      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <Layout
      className="layout"
      style={{
        // backgroundColor: gray,
        height: "100vh",
      }}
    >
      <Header style={{ display: "flex", alignItems: "center", height: "50px", padding: "0 20px", overflow: "hidden" }}>
        <div style={{ color: "white", padding: "0 5px"  }}>ArcVite 🌍⚡️</div>
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={onClick}
          selectedKeys={[current]}
          items={[
            {
              key: "map",
              label: `Map`,
            },
            {
              key: "scene",
              label: `Scene`,
            },
            {
              key: "statistic",
              label: `Statistic`,
            },
          ]}
        />
      </Header>
      {containerHandler()}
      <Footer style={{ backgroundColor: blue, color: "white", padding: "10px" }}>ArcVite 🌍⚡️</Footer>
    </Layout>
  );
}

export default App;
