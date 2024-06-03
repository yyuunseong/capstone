import React, { useState } from "react";
import styled from "styled-components";

const StyledVideo = styled.div`
    padding: 10px; //테두리로부터 여백
    color: black;
    width: 500px; // 박스의 너비 조절 
    height: 350px; // 박스의 높이 조절
`;

const StyledInput = styled.input`
    display: none; // 기본 파일 선택 버튼 숨기기
`;

const StyledLabel = styled.label`
    background-color: #242a88;
    font-family: "Jalnan";
    font-size: 17px;
    color: white;
    border-radius: 8px;
    padding: 12px; //버튼 테두리로부터 여백
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover, &:focus { //마우스를 올렸을때
        background-color: black; //배경색을 검정색으로
        transform: scale(1.03); //3% 확대
    }

    &:active { //클릭했을때
        transform: scale(0.97); //3% 축소
    }
`;

function VideoInput({ onFileSelect }) {
    const [file, setFile] = useState({});

    const imageUpload = e => {
        const selectedFile = e.target.files[0];
        const fileType = selectedFile.type;
        const isVideo = fileType.includes('video');

        if (!isVideo) { //비디오가 아닌 파일이 입력되면
            alert("비디오 파일을 선택해주세요.");
            setFile({});
            e.target.value = '';
            return;
        }

        setFile({
            url: URL.createObjectURL(selectedFile),
            video: isVideo,
        });

        onFileSelect(selectedFile); // 부모 컴포넌트로 선택된 파일 전달
    };

    return (
        <StyledVideo>
            <StyledLabel htmlFor="file-upload">영상 선택하기</StyledLabel>
            <br/>
            <StyledInput id="file-upload" type="file" onChange={imageUpload} />
            {file.video && <video src={file.url} controls width="500px" />}
        </StyledVideo>
    );
}

export default VideoInput;