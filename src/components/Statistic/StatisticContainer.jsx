
import { useEffect, useState, useRef } from "react";
import { Content } from "antd/es/layout/layout";



const StatisticContainer = () => {

  return (
    <Content
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div style={{ width: "100%", height: "100%" }} >
        <div>
            Statistic
        </div>
      </div>
    </Content>
  );
};

export default StatisticContainer;
