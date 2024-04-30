import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px; //상하, 좌우 여백 공간
    font-size: 16px; 
    border-width: 2px; //테두리 두께
    border-radius: 3px; //테두리 둥근 정도
    cursor: auto;
`;

function Button(props) {
    const {title, onClick} = props;

    return <StyledButton onClick={onClick}> {title || "button"} </StyledButton>;
}

export default Button;