import React from "react";
import ReactDOM from "react-dom/client";
import MapboxApp from "./MapboxApp";
import "maplibre-gl/dist/maplibre-gl.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapboxApp />
  </React.StrictMode>
);
