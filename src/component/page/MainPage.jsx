import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";

const PageWrapper = styled.div`
    background-color: white;
    height: 100vh; //요소의 높이가 화면의 전체 높이
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 800px;
    margin: 0 auto; /* 중앙 정렬을 위해 자동 여백 */
`;

const ButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;

const MainTitleText = styled.p`
    font-size: 50px;
    line-height: 1.4;
    font-family: "Jalnan";
    color: black;
    text-align: center;
    margin-bottom: 80px;
`;

const Image = styled.img`
    width: 95vw;
    height: 100%;
    object-fit: cover;
`;

function MainPage() {
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <MainTitleText>여러분의 교통사고 과실비율을<br/>AI가 측정해드립니다</MainTitleText>
            <ImageWrapper>
                <ButtonWrapper >
                    <Button
                        bgColor="white"
                        textColor="black"
                        fontSize="19px"
                        title="시작하기"
                        padding="10px 36px" // 여기서 패딩을 지정합니다.
                        onClick={() => {
                            navigate("/description");
                        }}
                    />
                </ButtonWrapper>
                <Image src="car.png" alt="traffic" />
            </ImageWrapper>
        </PageWrapper>
  );
}

export default MainPage;