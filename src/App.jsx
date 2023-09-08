import { useState } from "react";
import { Layout, Menu } from "antd";
import { Footer, Header } from "antd/es/layout/layout";
import MapContainer from "./components/MapContainer";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(0);

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
      <Layout.Sider style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          // mode="vertical"
          onClick={onClick}
          defaultSelectedKeys={0}
          selectedKeys={[current]}
          items={[
            {
              key: 0,
              label: `Map`,
            },
            {
              key: 1,
              label: `Info`,
            },
          ]}
        />
      </Layout.Sider>
      <MapContainer />
      <Footer style={{ backgroundColor: "palegoldenrod" }}>Arcgis Viewer</Footer>
    </Layout>
  );
}

export default App;
