import { useState } from "react";
import { Layout, Menu } from "antd";
import { Footer, Header } from "antd/es/layout/layout";
import MapContainer from "./MapViewer/MapContainer";
import "./App.css";
const blue = "#001528"
function App() {
  const [current, setCurrent] = useState("map");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Layout
      className="layout"
      style={{
        backgroundColor: "#e1efe1",
        height: "100vh",
      }}
    >
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div style={{color: "white"}} >ArcVite 🌍⚡️</div>
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
              key: "info",
              label: `Info`,
            },
          ]}
        />
      </Header>
      <MapContainer />
      <Footer style={{ backgroundColor: blue, color: "white" }}>ArcVite 🌍⚡️</Footer>
    </Layout>
  );
}

export default App;
