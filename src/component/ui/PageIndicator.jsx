import React from "react";
import styled from "styled-components";

const PageIndicatorWrapper = styled.div`
    position: absolute;
    left: 90px; /* 왼쪽 여백 조절 */
    bottom: 180px; /* 아래 여백 조절 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const PageItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const PageItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Dot = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${(props) => (props.active ? "white" : "gray")};
`;

const Line = styled.div`
    width: 5px;
    height: 150px; /* 선의 길이 조절 */
    background-color: ${(props) => (props.active ? "white" : "gray")};
    margin-left: 7.5px;
`;

const Text = styled.div`
    font-family: "Jalnan";
    margin-left: 10px; /* 텍스트와 점 사이의 간격 조절 */
    color: ${(props) => (props.active ? "white" : "gray")}; /* 텍스트 색상 지정 */
`;

const PageIndicator = ({ currentPage }) => {
    const pages = [
        { id: 1, text: "영상 입력" },
        { id: 2, text: "추가정보 입력" },
        { id: 3, text: "결과" },
        // 나머지 페이지들도 동일한 방식으로 추가할 수 있습니다.
    ];
    return (
        <PageIndicatorWrapper>
            {pages.map(({id, text}, index) => (
                <PageItem key={id}>
                    <PageItemWrapper>
                      <Dot active={currentPage >= index + 1} />
                      <Text active={currentPage >= index + 1}>{text}</Text> {/* 페이지 번호나 텍스트를 여기에 넣어주세요 */}
                    </PageItemWrapper>
                    
                    {index !== pages.length - 1 && <Line active={currentPage >= index+2} />}
                </PageItem>
            ))}
        </PageIndicatorWrapper>
    );
};

export default PageIndicator;
