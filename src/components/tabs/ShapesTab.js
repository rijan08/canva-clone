import React from "react";
import colors from "../../utils/color";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, alpha, styled } from "@mui/material";
import {
  TbSquareFilled,
  TbTriangleFilled,
  TbCircleFilled,
  TbHexagonFilled,
  TbPentagonFilled,
  TbTriangleInvertedFilled,
  TbRectangleFilled,
} from "react-icons/tb";
import useShapeStore from "../../zustand/Store";
import { Circle, Rect, Shape } from "react-konva";

const trianglePoints = [50, 0, 100, 100, 0, 100];
const triangleInvertedPoints = [0, 0, 100, 0, 50, 100];
const hexagonPoints = [50, 0, 100, 25, 100, 75, 50, 100, 0, 75, 0, 25];
const pentagonPoints = [50, 0, 100, 45, 75, 100, 25, 100, 0, 45];

const shapesList = [
  {
    name: "square",
    icon: <TbSquareFilled size={80} />,
    element: <Rect fill="black" height={100} width={100} draggable />,
  },
  {
    name: "circle",
    icon: <TbCircleFilled size={80} />,
    element: <Circle fill="black" x={50} y={50} radius={50} draggable />,
  },
  {
    name: "rectangle",
    icon: <TbRectangleFilled size={80} />,
    element: <Rect fill="black" height={100} width={150} draggable />,
  },
  {
    name: "triangle",
    icon: <TbTriangleFilled size={80} />,
    element: (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(trianglePoints[0], trianglePoints[1]);
          context.lineTo(trianglePoints[2], trianglePoints[3]);
          context.lineTo(trianglePoints[4], trianglePoints[5]);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        fill="black"
        draggable
      />
    ),
  },
  {
    name: "triangleInverted",
    icon: <TbTriangleInvertedFilled size={80} />,
    element: (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(triangleInvertedPoints[0], triangleInvertedPoints[1]);
          context.lineTo(triangleInvertedPoints[2], triangleInvertedPoints[3]);
          context.lineTo(triangleInvertedPoints[4], triangleInvertedPoints[5]);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        fill="black"
        draggable
      />
    ),
  },
  {
    name: "hexagon",
    icon: <TbHexagonFilled size={80} />,
    element: (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(hexagonPoints[0], hexagonPoints[1]);
          for (let i = 2; i < hexagonPoints.length; i += 2) {
            context.lineTo(hexagonPoints[i], hexagonPoints[i + 1]);
          }
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        fill="black"
        draggable
      />
    ),
  },
  {
    name: "pentagon",
    icon: <TbPentagonFilled size={80} />,
    element: (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(pentagonPoints[0], pentagonPoints[1]);
          for (let i = 2; i < pentagonPoints.length; i += 2) {
            context.lineTo(pentagonPoints[i], pentagonPoints[i + 1]);
          }
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        fill="black"
        draggable
      />
    ),
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(2),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function ShapesTab() {
  const { shapes, addShape } = useShapeStore();
  const addShapeToStore = (shape) => {
    console.log(shape);
    addShape(shape.element);
  };
  return (
    <div style={{ backgroundColor: colors.secondaryColor }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <div
        style={{
          margin: 16,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {shapesList.map((shape) => (
          <div
            style={{ width: "33%", marginBottom: 10, cursor: "pointer" }}
            onClick={() => addShapeToStore(shape)}
          >
            {shape.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShapesTab;
