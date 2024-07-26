import React, { useEffect, useRef, useState } from "react";
import colors from "../../utils/color";
import { Layer, Rect, Stage, Transformer } from "react-konva";
import useShapeStore from "../../zustand/Store";

function Preview() {
  const parentRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);

  const { shapes } = useShapeStore();

  useEffect(() => {
    const updateDimensions = () => {
      if (parentRef.current) {
        const { width, height } = parentRef.current.getBoundingClientRect();
        setParentWidth(width);
        setParentHeight(height);
      }
    };

    // Initial dimensions
    updateDimensions();

    // Event listener for window resize
    window.addEventListener("resize", updateDimensions);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  return (
    <div
      style={{
        backgroundColor: colors.background,
        margin: 16,
        borderRadius: 10,
      }}
      ref={parentRef}
    >
      <Stage height={parentHeight} width={parentWidth}>
        <Layer>
          {shapes.map((item) => (
            <div>{item}</div>
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default Preview;
