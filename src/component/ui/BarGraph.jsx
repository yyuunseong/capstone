import React from "react";
import styled from "styled-components";

const BarGraphWrapper = styled.div`
  width: 350px;
  height: 12px;
  background-color: white;
  position: relative;
  margin-top: 10px;
`;

const Bar = styled.div`
  height: 100%;
  background-color: ${props => props.left ? "rgb(070,163,210)" : "white"};
  position: absolute;
  top: 0;
  left: 0;
`;

function BarGraph({ leftRatio, rightRatio }) {
    const totalWidth = 350;
    const leftWidth = `${(leftRatio / 100) * totalWidth}px`;
    const rightWidth = `${(rightRatio / 100) * totalWidth}px`;
  
    return (
      <BarGraphWrapper>
        <Bar style={{ width: leftWidth }} left />
        <Bar style={{ width: rightWidth, left: leftWidth }} />
      </BarGraphWrapper>
    );
  }

export default BarGraph;