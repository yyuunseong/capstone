import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import CheckBox from "../ui/CheckBox";

const Wrapper = styled.div`
    padding: 50px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

const FirstButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 50%; 
`;

const SecondButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end; 
    width: 50%; 
    padding: 30px;
`;

function PostViewPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <FirstButtonWrapper>
                <Button
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/video-upload");
                    }}
                />
            </FirstButtonWrapper>
                
            <CommentLabel>추가정보 입력</CommentLabel>
            <CheckBox />

            <SecondButtonWrapper>
                <Button
                    title="결과 확인하기"
                    onClick={() => {
                        navigate("/result-view");
                    }}
                />
            </SecondButtonWrapper>
        </Wrapper>
    );
}

export default PostViewPage;