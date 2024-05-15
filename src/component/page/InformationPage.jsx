import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import CheckBox from "../ui/CheckBox";
import PageIndicator from '../ui/PageIndicator';

const Wrapper = styled.div`
    padding: 50px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background-color: black;
`;

const MainTitleText = styled.p`
  font-size: 35px;
  font-family: "Jalnan";
  color: white;
  text-align: center;
  margin-bottom: 50px;
  margin-right: 800px;
  border-bottom: 3px solid white;
`;

const CommentLabel = styled.p`
    font-size: 22px;
    font-family: "Jalnan";
    color: white;
`;

const ButtonWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const pages = ['Page 1', 'Page 2', 'Page 3'];
    const currentPage = 2; 

    return (
        <Wrapper>
            <MainTitleText>교통사고 과실비율 판단 AI 시스템</MainTitleText>
                
            <CommentLabel>추가정보 입력 (중복 가능)</CommentLabel>
            <CheckBox />

            <ButtonWrapper>
                <Button
                    bgColor="transparent"
                    textColor="white"
                    fontSize="22px"
                    title="이전"
                    onClick={() => {
                        navigate("/video-upload");
                    }}
                />
                <Button
                    bgColor="transparent"
                    textColor="white"
                    fontSize="22px"
                    title="결과 확인하기"
                    onClick={() => {
                        navigate("/result-view");
                    }}
                />
            </ButtonWrapper>
            <PageIndicator pages={pages} currentPage={currentPage} />
        </Wrapper>
    );
}

export default PostViewPage;