import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: ${({ padding }) => padding || '8px 16px'}; // padding을 props로 받도록 수정
    border-width: 0px; //테두리 두께
    border-radius: 3px; //테두리 둥근 정도
    font-family: "Jalnan";
    background-color: ${({ bgColor }) => bgColor || 'white'}; // 기본값은 white
    color: ${({ textColor }) => textColor || 'black'}; // 기본값은 black
    font-size: ${({ fontSize }) => fontSize || '16px'}; // 기본값은 16px
    cursor: pointer;

    &:hover {
        color: darkgray; /* 마우스를 올렸을 때 글자 색상 변경 */
    }
`;

function Button(props) {
    const {bgColor, textColor, fontSize, title, onClick, padding} = props;

    return (
        <StyledButton 
            bgColor={bgColor}
            textColor={textColor}
            fontSize={fontSize}
            onClick={onClick}
            padding={padding}
        > 
            {title || "button"} 
        </StyledButton>
    );
}

export default Button;