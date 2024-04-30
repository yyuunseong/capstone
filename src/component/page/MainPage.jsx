import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function MainPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
                <Button
                    title="과실비율 판단하기!"
                    onClick={() => {
                        navigate("/video-upload");
                    }}
                />
        </Wrapper>
    );
}

export default MainPage;