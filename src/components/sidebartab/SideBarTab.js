import React, { useState } from "react";
import SidebarTabsList from "./SidebarTabsList";
import colors from "../../utils/color";
import ShapesTab from "../tabs/ShapesTab";

function SideBarTab(props) {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(null);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr" }}>
      <SidebarTabsList
        tabs={tabs}
        active={activeTab}
        activeState={setActiveTab}
      />
      <div style={{ backgroundColor: colors.secondaryColor }}>
        {activeTab == "Shape" && <ShapesTab />}
      </div>
    </div>
  );
}

export default SideBarTab;
