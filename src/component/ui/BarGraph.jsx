import React from "react";
import styled from "styled-components";

const BarGraphWrapper = styled.div`
  width: 82%;
  height: 25px;
  background-color: #f4f4f4;
  position: relative;
  margin-top: 30px;
  border-radius: 5px;
`;

const Label = styled.div`
  position: absolute;
  top: -25px;
  left: ${props => props.left};
  right: ${props => props.right};
  color: black;
  font-weight: bold;
`;

const Bar = styled.div`
  height: 100%;
  background-color: ${props => props.color};
  position: absolute;
  top: 0;
  left: ${props => props.left};
  width: ${props => props.width};
`;

function BarGraph({ leftRatio, rightRatio }) {
  const leftWidth = `${leftRatio}%`;
  const rightWidth = `${rightRatio}%`;
  const rightStart = `${leftRatio}%`;
  
    return (
      <BarGraphWrapper>
        <Label left="0%">{`A ${leftRatio}`}</Label>
        <Bar width={leftWidth} color="#242a88" left="0%" />
        <Label right="0%">{`${rightRatio} B`}</Label>
        <Bar width={rightWidth} color="lightGrey" left={rightStart} />
      </BarGraphWrapper>
    );
  }

export default BarGraph;