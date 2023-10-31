
import { useEffect, useState, useRef } from "react";
import { Content } from "antd/es/layout/layout";
import Widget from "../common/Widget";
import "./Statistic.css"


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
        <div style={{ color: "black", padding:"20px"}}>
            Statistic
        </div>
        {Widget()}

      </div>
    </Content>
  );
};

export default StatisticContainer;
