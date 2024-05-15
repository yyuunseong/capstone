import React, { useState } from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input`
  appearance: none; //기본적으로 브라우저가 제공하는 체크박스의 기본 디자인을 없애는 역할
  width: 17px;
  height: 17px;
  border-radius: 10%;
  border: 2px solid white;
  outline: none;
  transition: 0.1s; //체크박스의 변화가 부드럽게 일어나도록 함
  margin-right: 10px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;

  &:checked {
    background-color: white;
    border-color: white;
  }

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
  font-size: 19px; //글자 크기
  font-family: "Jalnan";
  color: white;
  line-height: 1.7;
`;

function CheckBox() {
    // 각 체크박스의 상태를 관리하기 위한 상태 변수
    const [checkboxes, setCheckboxes] = useState({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false
    });

    // 체크박스 상태를 업데이트하는 함수
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  return (
    <div>
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
        />
        본인 과속
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        상대 과속
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
        />
        정지
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox4"
          checked={checkboxes.checkbox4}
          onChange={handleCheckboxChange}
        />
        더 뭐쓰지
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox5"
          checked={checkboxes.checkbox5}
          onChange={handleCheckboxChange}
        />
        뭐 쓸까요
      </Label>
    </div>
  );
}

export default CheckBox;
