import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
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
  margin-bottom: 50px;
  margin-right: 800px;
  border-bottom: 3px solid white;
`;

const MainText = styled.p`
  font-size: 20px;
  line-height: 1.2;
  padding: 12px;
  font-family: "Jalnan";
  font-style: italic;
  color: white;
  text-align: center;
  display: inline;
`;

const SmallText = styled.p`
  font-size: 15px;
  line-height: 1.2;
  font-family: "Jalnan";
  color: white;
  text-align: center;
  display: inline;
  margin-left: 30px;
`;

const TextWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 100px;
`;

const ButtonWrapper = styled.div`
    margin-left: 450px;
`;

function DescriptionPage(props) {
    const navigate = useNavigate();
    const pages = ['Page 1', 'Page 2', 'Page 3'];
    const currentPage = 0; 

    return (
        <Wrapper>
            <MainTitleText>교통사고 과실비율 판단 AI 시스템</MainTitleText>
            <TextWrapper>
                    <MainText>사용법</MainText>
                    <MainText>
                        1 사고 영상 입력
                        <SmallText>
                            교통사고 상황이 담긴 블랙박스 영상을 입력해주세요.
                        </SmallText>
                    </MainText>
                    <MainText>
                        2 교통사고 분석
                        <SmallText>
                            시스템이 AI를 이용하여 교통사고 상황을 분석합니다.
                        </SmallText>
                    </MainText>
                    <MainText>
                        3 과실비율 확인하기
                        <SmallText>
                            분석한 사고 상황을 토대로 운전자의 과실비율을 알려줍니다.
                        </SmallText>
                    </MainText>
                </TextWrapper>
                <ButtonWrapper>
                    <Button
                        bgColor="transparent"
                        textColor="white"
                        fontSize="22px"
                        title="판단 시작하기!"
                        onClick={() => {
                            navigate("/video-upload");
                        }}
                    />
                </ButtonWrapper>

                <PageIndicator pages={pages} currentPage={currentPage} />
        </Wrapper>
    )
}

export default DescriptionPage;