import React from "react";
import Feed from "./Feed";
import PublicHeader from "./PublicHeader";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import "./css/Public.css";

function Public() {
  return (
    <div className="public">
      <PublicHeader />
      <div className="public__contents">
        <div className="public__content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default Public;