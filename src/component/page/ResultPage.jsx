import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Button from "../ui/Button";
import PageIndicator from '../ui/PageIndicator';
import BarGraph from "../ui/BarGraph";

const PageWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
`;

const LoadingContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    margin-left: 20px;
    margin-top: 30px;
`;

const VideoContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
`;

const DetailsContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 90px;
`;

const ButtonWrapper = styled.div`
    margin-left: 250px;
    margin-top: 15px;
`;

const DetailsText = styled.p`
    font-size: 18px;
    white-space: pre-wrap;
    font-family: "Jalnan";
    color: black;
    margin-bottom: 3px;
    padding: 7px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 80%;
    text-align: center;
    word-break: keep-all;
`;

const AccidentText = styled.p`
    font-size: 18px;
    line-height: 1.5;
    white-space: pre-wrap;
    font-family: "Jalnan";
    color: black;
    margin-bottom: 10px;
    padding: 7px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 80%;
    text-align: left;
    word-break: keep-all;
`;

const PortalLink = styled.a`
    color: #333333;
    margin-bottom: 20px;
    font-family: "Jalnan";
    &:hover {
        color: #000000;
        text-decoration: underline;
    }
`;

const ContentText = styled.p`
    font-size: 43px;
    color: black;
    font-family: "Jalnan";
    align-items: center;
    margin-bottom: 10px; // 이 값을 추가하여 간격을 줄입니다.
`;

function ResultPage() {
    const navigate = useNavigate();
    const pages = ['Page 1', 'Page 2', 'Page 3'];
    const currentPage = 3;
    const [accidentDetails, setAccidentDetails] = useState(null);
    const [videoPath, setVideoPath] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const path = "https://accident.knia.or.kr/video/car32-1.mp4";
        setVideoPath(path);

        axios.get(`${process.env.REACT_APP_API_URL}/api/result-view`)
            .then(response => {
                setAccidentDetails(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching accident data:", error);
            });
    }, []);

    return (
        <PageWrapper>
            {isLoading ? (
                <LoadingContainer>
                    <img src="ZKZg.gif" alt="Loading..."/>
                </LoadingContainer>
            ) : (
                <ContentWrapper>
                    <PageIndicator pages={pages} currentPage={currentPage} />
                    <VideoContainer>
                        <video width="85%" height="auto" controls>
                            <source src={videoPath} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </VideoContainer>
                    
                    <DetailsContainer>
                        {accidentDetails && (
                            <>
                                <ContentText>과실비율 판단 결과</ContentText>
                                <DetailsText>자동차 A: {accidentDetails.vehicleADirection}</DetailsText>
                                <DetailsText>자동차 B: {accidentDetails.vehicleBDirection}</DetailsText>
                                <DetailsText>A {accidentDetails.faultPercentageA} : {accidentDetails.faultPercentageB} B</DetailsText>
                                <BarGraph leftRatio={accidentDetails.faultPercentageA} rightRatio={accidentDetails.faultPercentageB} />
                                <AccidentText>사고 해설: {accidentDetails.accidentDescription}</AccidentText>
                                <PortalLink href={accidentDetails.portalLink} target="_blank">포털 바로가기</PortalLink>
                            </>
                        )}

                        <ButtonWrapper>
                            <Button
                            bgColor="#242a88"
                                textColor="white"
                                fontSize="21px"
                                title="홈으로 돌아가기"
                                onClick={() => navigate("/")}
                            />
                        </ButtonWrapper>
                        
                    </DetailsContainer>
                </ContentWrapper>
            )}
        </PageWrapper>
    );
}

export default ResultPage;