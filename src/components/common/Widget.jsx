import React, { useState, useRef } from "react";

const Widget = () => {
  return (
    <div class="widgetContainer">
      <div class="widgetHeader">
        <div class="widgetTitle">
          <div class="widgetIcon"></div>
          <div class="widgetText"></div>
        </div>
        <a href="#" class="widgetMinimize">
          <i class="far fa-window-minimize"></i>
        </a>
        <a href="#" class="widgetMaximize">
          <i class="far fa-window-maximize"></i>
        </a>
        <a href="#" class="widgetClose">
          <i class="far fa-window-close"></i>
        </a>
      </div>
      <div class="widgetBody"></div>
    </div>
  );
};

export default Widget;
