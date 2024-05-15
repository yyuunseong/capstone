import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";

const BigWrapper = styled.div`
  background-color: black;
`;

const PageWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  padding: 0px;
  display: flex;
  height: 100vh;
  background-color: black;
`;

const MainTitleText = styled.p`
  font-size: 45px;
  font-family: "Jalnan";
  color: white;
  text-align: center;
  margin-bottom: 80px;
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

const LeftHalf = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const RightHalf = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function MainPage() {
  const navigate = useNavigate();
  const nextPageRef = useRef(null);
  const lastScrollTop = useRef(0);

  const handleScroll = () => {
    const currentScrollTop = nextPageRef.current.getBoundingClientRect().top;

    if (currentScrollTop < lastScrollTop.current) {
      navigate("/next-page");
    }
    
    lastScrollTop.current = currentScrollTop;
  };

  return (
    <BigWrapper onScroll={handleScroll}>
        <PageWrapper>
            <Wrapper>
                <LeftHalf>
                    <MainTitleText>교통사고 과실비율 판단 AI 시스템</MainTitleText>
                </LeftHalf>
                
                <RightHalf>
                    <Image src="traffic.jpg" alt="traffic" />
                </RightHalf>
            </Wrapper>
        </PageWrapper>
        <div ref={nextPageRef}>
            <PageWrapper>
                
                <ButtonWrapper>
                    <Button
                        bgColor="transparent"
                        textColor="white"
                        fontSize="22px"
                        title="과실비율 판단하기!"
                        onClick={() => {
                            navigate("/description");
                        }}
                    />
                </ButtonWrapper>
            </PageWrapper>
        </div>
    </BigWrapper>
  );
}

export default MainPage;
