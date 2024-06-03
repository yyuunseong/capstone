import React from 'react';
import styled from "styled-components";

const StyledVideoPlayer = styled.video`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || 'auto'};
    border-radius: 4px;
    outline: none;
`;

function VideoPlayer(props) {
    const { width, height, videoPath, controls } = props;

    return (
        <StyledVideoPlayer 
            width={width} 
            height={height} 
            src={videoPath} 
            controls={controls}
        />
    );
}

export default VideoPlayer;