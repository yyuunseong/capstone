import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import VideoInput from "../ui/VideoInput";
import Button from "../ui/Button";
import PageIndicator from '../ui/PageIndicator';

const Wrapper = styled.div`
    padding: 50px;
    height: 100vh; /* 화면의 높이를 화면 전체 높이로 설정합니다. */

    display: flex;
    flex-direction: column; //row는 왼->오, column은 위->아래 -reverse 도 가능
    align-items: center; //stretch는 가득채움, flex-start는 cross-axis의 시작, center는 cross-axis의 중앙, flex-end는 cross-axis의 끝, baseline
    justify-content: flex-start; //flex-start는 main-axis의 시작, center는 main-axis의 중앙, flex-end는 main-axis의 끝, space-between는 시작부터 끝까지 일정한 간격, space-around
    
    background-color: black;
`;

const MainTitleText = styled.p`
  font-size: 35px;
  font-family: "Jalnan";
  color: white;
  margin-bottom: 50px;
  margin-right: 800px;
  border-bottom: 3px solid white;
`;

const ContentText = styled.p`
    font-size: 20px;
    color: white;
    font-family: "Jalnan";
`;

const ButtonWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
`;

function VideoUploadPage(props) {
    const navigate = useNavigate();
    const pages = ['Page 1', 'Page 2', 'Page 3'];
    const currentPage = 1; 

    return (
        <Wrapper>
            <MainTitleText>교통사고 과실비율 판단 AI 시스템</MainTitleText>
            
            <ContentText>⬇ 사고 영상을 입력해주세요 ⬇</ContentText>
            <VideoInput />

            <ButtonWrapper>
                <Button
                    bgColor="transparent"
                    textColor="white"
                    fontSize="22px"
                    title="이전"
                    onClick={() => {
                        navigate("/description");            
                    }}
                />
                <Button
                    bgColor="transparent"
                    textColor="white"
                    fontSize="22px"
                    title="다음"
                    onClick={() => {
                        navigate("/add-info");
                    }}
                /> 
            </ButtonWrapper>
            
            <PageIndicator pages={pages} currentPage={currentPage} />
        </Wrapper> 
    )
}

export default VideoUploadPage;