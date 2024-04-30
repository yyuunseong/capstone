import React, { useState } from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input`
  margin-right: 10px; //체크박스와 글자 사이의 간격
  cursor: auto;
`;

const Label = styled.label`
  color: black; //글자 색상
  font-size: 35px; //글자 크기
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
        우회전
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        좌회전
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
        차선 변경 없이 직진
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox5"
          checked={checkboxes.checkbox5}
          onChange={handleCheckboxChange}
        />
        차선 변경하며 직진
      </Label>
    </div>
  );
}

export default CheckBox;
