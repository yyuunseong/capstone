import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from "../ui/Button";
import VideoInput from "../ui/VideoInput";
import PageIndicator from '../ui/PageIndicator';

const PageWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
`;

const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    width: 100%;
    margin-left: 37.5px;
    margin-right: 37.5px;
`;

const ButtonWrapper = styled.div`
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
`;

const ContentText = styled.p`
    font-size: 34px;
    color: black;
    font-family: "Jalnan";
    align-items: center;
    margin-bottom: 10px; // 이 값을 추가하여 간격을 줄입니다.
`;

const SubTitle = styled.p`
    font-size: 19px;
    font-family: "Jalnan";
    color: black;
    text-align: center;
    margin-top: 10px; // 이 값을 추가하여 간격을 줄입니다.
    margin-bottom: 20px;
`;

function VideoUploadPage() {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const pages = ['Page 1', 'Page 2', 'Page 3'];
    const currentPage = 1;

    const onFileSelect = selectedFile => {
        setFile(selectedFile);
    };

    const onFileUpload = () => {
        if (!file) {
            alert('파일을 선택해주세요.');
            return;
        }
        
        const formData = new FormData();
        formData.append("file", file);
    
        axios.post(`${process.env.REACT_APP_API_URL}/api/video-upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            const uploadedVideoPath = response.data.videoPath;
            localStorage.setItem('uploadedVideoPath', uploadedVideoPath);
            alert('영상 업로드 성공');
            navigate('/add-info');
        })
        .catch(error => alert('Error uploading file: ' + error.message));
    };

    return (    
        <PageWrapper>
            <div style={{display: 'flex', width: '100%'}}>
                <PageIndicator pages={pages} currentPage={currentPage} />
                <UploadContainer>
                    <ContentText>교통사고 블랙박스 영상을 입력해주세요</ContentText>
                    <SubTitle>사고상황 전후 각 5초의 영상이 포함되어야 합니다.<br/>분석 후 영상은 데이터베이스에 저장되지 않고 바로 삭제됩니다.</SubTitle>
                    <VideoInput onFileSelect={onFileSelect} />
                    <ButtonWrapper>
                        <Button
                            bgColor="transparent"
                            textColor="black"
                            fontSize="21px"
                            title="이전"
                            onClick={() => {
                                navigate("/description");
                            }}
                        />

                        <Button
                        bgColor="#242a88"
                            textColor="white"
                            fontSize="21px"
                            title="업로드"
                            onClick={onFileUpload}
                        />
                    </ButtonWrapper>
                </UploadContainer>
            </div>
        </PageWrapper>
    );
}

export default VideoUploadPage;