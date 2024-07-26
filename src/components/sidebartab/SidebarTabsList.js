import React, { useState } from "react";
import colors from "../../utils/color";

function SidebarTabsList(props) {
  const { tabs, active, activeState, theme } = props;
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "black",
        padding: 2,
      }}
    >
      {tabs?.map((tab) => (
        <div
          style={{
            backgroundColor:
              tab.name === active ? colors.secondaryColor : "black",
            borderRadius: tab.name !== active ? 0 : 4,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 2px",
            height: 72,
            width: 72,
            cursor: "pointer",
            ":hover": {
              color: "#009ef7",
            },
          }}
          onClick={() => {
            activeState(tab.name);
          }}
        >
          <div style={{ fontSize: 24 }}>{tab.icon}</div>
          <span
            style={{
              fontSize: 10,
              lineHeight: 1.6,
              fontWeight: 600,
              color: "gray",
            }}
          >
            {tab.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SidebarTabsList;
