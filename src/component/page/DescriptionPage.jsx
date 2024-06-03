import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import PageIndicator from '../ui/PageIndicator';

const Wrapper = styled.div`
    height: 100vh;
`;

const TextWrapper = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const ImageWrapper = styled.div`
    padding: 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 70px;
`;

const SmallWrapper = styled.div`
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    margin-top: 50px;
    align-self: center;
`;

const SubTitle = styled.p`
    font-size: 34px;
    line-height: 1.2;
    padding: 12px;
    font-family: "Jalnan";
    color: black;
    text-align: center;
`;

const MainText = styled.p`
    font-size: 24px;
    line-height: 1.2;
    padding: 12px;
    font-family: "Jalnan";
    color: black;
    text-align: center;
`;

const Image = styled.img`
    width: 10vw;
    height: 100%;
    object-fit: cover;
`;

function DescriptionPage(props) {
    const navigate = useNavigate();
    const pages = ['Page 1', 'Page 2', 'Page 3'];
    const currentPage = 0; 

    return (
        <Wrapper>
            <PageIndicator pages={pages} currentPage={currentPage} />
            <TextWrapper>
                <SubTitle>사용법</SubTitle>
                <ImageWrapper>
                    <SmallWrapper>
                        <Image src="video.png" alt="video" />
                        <br/>
                        <MainText>1 사고 영상<br/>입력</MainText>
                    </SmallWrapper>
                    
                    <SmallWrapper>
                        <Image src="information.png" alt="information" />
                        <MainText>2 추가 정보<br/>입력</MainText>
                    </SmallWrapper>

                    <SmallWrapper>
                        <Image src="analyze.png" alt="analyze" />
                        <MainText>3 교통사고<br/>상황 분석</MainText>
                    </SmallWrapper>

                    <SmallWrapper>
                        <Image src="result.png" alt="result" />
                        <MainText>4 과실비율<br/>확인</MainText>
                    </SmallWrapper>
                </ImageWrapper>


                <ButtonWrapper>
                    <Button
                        bgColor="#242a88"
                        textColor="white"
                        fontSize="21px"
                        title="판단 시작하기"
                        onClick={() => {
                            navigate("/video-upload");
                        }}
                    />
                </ButtonWrapper>
            </TextWrapper>
        </Wrapper>
    )
}

export default DescriptionPage;