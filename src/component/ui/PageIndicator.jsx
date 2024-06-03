import React from "react";
import styled from "styled-components";

const PageIndicatorWrapper = styled.div`
    position: absolute;
    left: 55px; /* 왼쪽 여백 조절 */
    top: 200px; /* 아래 여백 조절 */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const PageItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

const PageItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const Dot = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${(props) => (props.active ? "white" : "darkgray")};
`;

const Line = styled.div`
    width: 4px;
    height: 200px; /* 선의 길이 조절 */
    background-color: ${(props) => (props.active ? "white" : "darkgray")};
    margin-right: 8px;
`;

const Text = styled.div`
    font-family: "Jalnan";
    margin-right: 10px; /* 텍스트와 점 사이의 간격 조절 */
    color: ${(props) => (props.active ? "white" : "darkgray")}; /* 텍스트 색상 지정 */
    font-size: 18px;
    white-space: pre-wrap
`;

const PageIndicator = ({ currentPage }) => {
    const pages = [
        { id: 1, text: "영상 입력" },
        { id: 2, text: "추가정보 입력" },
        { id: 3, text: "결과 확인" },
        // 나머지 페이지들도 동일한 방식으로 추가할 수 있습니다.
    ];
    return (
        <PageIndicatorWrapper>
            {pages.map(({id, text}, index) => (
                <PageItem key={id}>
                    <PageItemWrapper>
                        <Text active={currentPage >= index + 1}>{text}</Text>
                        <Dot active={currentPage >= index + 1} />
                    </PageItemWrapper>
                    
                    {index !== pages.length - 1 && <Line active={currentPage >= index+2} />}
                </PageItem>
            ))}
        </PageIndicatorWrapper>
    );
};

export default PageIndicator;
