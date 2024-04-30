import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import VideoInput from "../ui/VideoInput";
import Button from "../ui/Button";

const ContentText = styled.p`
    font-size: 20px;
    line-height: 15px; //위아래 줄 간격
    white-space: pre-wrap; //요소 내 공백 처리 방식 (공백과 줄바꿈 유지, 필요한 경우 줄바꿈 발생)
    padding: 30px; //텍스트와 주변 요소와의 여백
`;

const Wrapper = styled.div`
    padding: 50px;
    height: 500px;
    display: flex;
    flex-direction: column; //row는 왼->오, column은 위->아래 -reverse 도 가능
    align-items: center; //stretch는 가득채움, flex-start는 cross-axis의 시작, center는 cross-axis의 중앙, flex-end는 cross-axis의 끝, baseline
    justify-content: flex-start; //flex-start는 main-axis의 시작, center는 main-axis의 중앙, flex-end는 main-axis의 끝, space-between는 시작부터 끝까지 일정한 간격, space-around
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

function VideoUploadPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <FirstButtonWrapper>
                <Button
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/");            
                    }}
                />
            </FirstButtonWrapper>
            
            <ContentText>사고 영상을 입력해주세요.</ContentText>
            <VideoInput />

            <SecondButtonWrapper>
                <Button
                    title="다음"
                    onClick={() => {
                        navigate("/add-info");
                    }}
                /> 
            </SecondButtonWrapper>
        </Wrapper> 
    )
}

export default VideoUploadPage;