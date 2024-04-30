import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";

const ContentText = styled.p`
    font-size: 20px;
    line-height: 15px;
    white-space: pre-wrap;
    padding: 20px;
`;

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function ResultPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <ContentText>당신의 과실 비율은...</ContentText>
            <Button
                title="홈 화면으로"
                onClick={() => {
                    navigate("/");            
                }}
            />
        </Wrapper>
    )
}

export default ResultPage;