import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import PageIndicator from '../ui/PageIndicator';
import BarGraph from "../ui/BarGraph";

const Wrapper = styled.div`
    padding: 50px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    background-color: black;
`;

const SmallWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 70%;
    margin-left: 100px;
`;

const VideoContainer = styled.div`
  flex: 1;
  margin-right: 50px;
  margin-top: 70px;
`;

const DescriptionContainer = styled.div`
  flex: 1;
  color: white;
  margin-top: 70px;
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

const ContentText = styled.p`
    font-size: 20px;
    line-height: 1.5;
    white-space: pre-wrap;
    font-family: "Jalnan";
    color: white;
    display: inline;
`;

const ResultText = styled.p`
    font-size: 35px;
    line-height: 1.5;
    white-space: pre-wrap;
    font-family: "Jalnan";
    color: white;
    display: inline;
`;

const ButtonWrapper = styled.div`
    margin-left: 800px;
`;

function ResultPage(props) {
    const navigate = useNavigate();
    const pages = ['Page 1', 'Page 2', 'Page 3'];
    const currentPage = 3; 

    return (
        <Wrapper>
            <MainTitleText>교통사고 과실비율 판단 AI 시스템</MainTitleText>
            <SmallWrapper>
                <VideoContainer>
                    <video width="460" height="320" controls>
                        <source src="./public/test_video.MOV" type="video/mp4/MOV" />
                        Your browser does not support the video tag.
                    </video>
                </VideoContainer>

                <DescriptionContainer>
                    <ContentText>교통사고 분석 결과, 당신의 과실 비율은</ContentText>
                    <br/><br/>
                    <ResultText>40%</ResultText>
                    <ContentText>  입니다 !</ContentText>
                    <BarGraph leftRatio={40} rightRatio={60} />
                </DescriptionContainer>
            </SmallWrapper>

            <ButtonWrapper>
                <Button
                    bgColor="transparent"
                    textColor="white"
                    fontSize="22px"
                    title="홈 화면으로"
                    onClick={() => {
                        navigate("/");            
                    }}
                />
            </ButtonWrapper>
            <PageIndicator pages={pages} currentPage={currentPage} />
        </Wrapper>
    )
}

export default ResultPage;