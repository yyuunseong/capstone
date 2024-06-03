import React, { useState } from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input`
  appearance: none; //기본적으로 브라우저가 제공하는 체크박스의 기본 디자인을 없애는 역할
  width: 17px;
  height: 17px;
  border-radius: 10%;
  border: 2px solid black;
  outline: none;
  transition: 0.1s; //체크박스의 변화가 부드럽게 일어나도록 함
  margin-right: 10px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;

  &:checked::after {
    content: "";
    position: absolute;
    top: 0px; /* 체크 표시의 위치를 조절함 */
    left: 2px; /* 체크 표시의 위치를 조절함 */
    width: 5px; /* 체크 표시의 너비를 조절함 */
    height: 8px; /* 체크 표시의 높이를 조절함 */
    border-bottom: 3px solid black; /* 체크 표시의 선 모양을 설정함 */
    border-right: 3px solid black; /* 체크 표시의 선 모양을 설정함 */
    transform: rotate(45deg); /* 체크 표시를 45도 회전시킴 */
  }
`;

const Label = styled.label`
  font-size: 20px; //글자 크기
  font-family: "Jalnan";
  color: black;
  line-height: 1.7;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 70px;
`

const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

function CheckBox({ checkboxes, onChange }) {
  return (
    <Wrapper>
      <LabelWrapper>
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={onChange}
        />
        A 현저한 과실
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={onChange}
        />
        A 중대한 과실
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={onChange}
        />
        B 현저한 과실
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox4"
          checked={checkboxes.checkbox4}
          onChange={onChange}
        />
        B 중대한 과실
      </Label>
      </LabelWrapper>
      
      <LabelWrapper>
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox5"
          checked={checkboxes.checkbox5}
          onChange={onChange}
        />
        A 과속
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox6"
          checked={checkboxes.checkbox6}
          onChange={onChange}
        />
        A 서행
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox7"
          checked={checkboxes.checkbox7}
          onChange={onChange}
        />
        B 과속
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox8"
          checked={checkboxes.checkbox8}
          onChange={onChange}
        />
        B 서행
      </Label>
      </LabelWrapper>

      <LabelWrapper>
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox9"
          checked={checkboxes.checkbox9}
          onChange={onChange}
        />
        A 일방통행 위반
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox10"
          checked={checkboxes.checkbox10}
          onChange={onChange}
        />
        B 일방통행 위반
      </Label>
      </LabelWrapper>
    </Wrapper>
  );
}

export default CheckBox;
