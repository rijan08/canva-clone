import React from "react";
import Sidebar from "../sidebar/SideBar";
import Preview from "../preview/Preview";

function Home() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 5fr" }}>
      <Sidebar />
      <Preview />
    </div>
  );
}

export default Home;
