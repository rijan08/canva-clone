import React from "react";
import InterestsIcon from "@mui/icons-material/Interests";
import TitleIcon from "@mui/icons-material/Title";
import ImageIcon from "@mui/icons-material/Image";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SidebarTabsList from "../sidebartab/SidebarTabsList";
import SideBarTab from "../sidebartab/SideBarTab";

const tabs = [
  {
    name: "Shape",
    icon: <InterestsIcon sx={{ color: "gray" }} />,
  },
  {
    name: "Text",
    icon: <TitleIcon sx={{ color: "gray" }} />,
  },
  {
    name: "Image",
    icon: <ImageIcon sx={{ color: "gray" }} />,
  },
  {
    name: "Upload",
    icon: <CloudUploadIcon sx={{ color: "gray" }} />,
  },
];

function Sidebar() {
  return (
    <div>
      <SideBarTab tabs={tabs} />
    </div>
  );
}

export default Sidebar;
