import React, { useState } from "react";
import styled from "styled-components";

const StyledVideo = styled.div`
    border: 1px solid grey; //전체 테두리 두께, 색
    padding: 20px; //테두리로부터 여백
`;

function VideoInput(props) {
    const [file, setFile] = useState({});

    const imageUpload = e => {
        const selectedFile = e.target.files[0];
        const fileType = selectedFile.type;
        const isVideo = fileType.includes('video');

        if (!isVideo) {
            alert("비디오 파일을 선택해주세요.");
            setFile({});
            e.target.value = '';
            return;
        }

        setFile({
            url: URL.createObjectURL(selectedFile),
            video: isVideo,
        });
    };

    return (
        <StyledVideo>
            <input type="file" onChange={imageUpload} />
            {file.video && <video src={file.url} controls width="350px" />}
        </StyledVideo>
    );
}

export default VideoInput;