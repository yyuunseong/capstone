import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import MainPage from './component/page/MainPage';
import DescriptionPage from './component/page/DescriptionPage';
import VideoUploadPage from './component/page/VideoUploadPage';
import InformationPage from './component/page/InformationPage';
import ResultPage from './component/page/ResultPage';
import './App.css';
import styled from "styled-components";

const SubTitle = styled.div`
    font-size: 25px;
    line-height: 1.3;
    padding: 20px;
    font-family: "Jalnan";
    color: black;
    border-bottom: 11px solid #242a88;
    display: flex;
    align-items: flex-end; /* 세로 정렬 */
`;

const Image = styled.img`
    width: 5.5vw;
    object-fit: cover;
    margin-right: 10px;
`;

const AppWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const SideBar = styled.div`
    width: 270px;
    background-color: #242a88;
`;

const Content = styled.div`
    flex: 1;
`;

const AppContent = () => {
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    return (
        <AppWrapper>
            {!isMainPage && <SideBar />}
            <Content>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="description" element={<DescriptionPage />} />
                    <Route path="video-upload" element={<VideoUploadPage />} />
                    <Route path="add-info" element={<InformationPage />} />
                    <Route path="result-view" element={<ResultPage />} />
                </Routes>
            </Content>
        </AppWrapper>
    );
};

function App(props) {
  return (
    <BrowserRouter>
      <SubTitle>
        <Image src="AI_icon.png" alt="ai" />
        교통사고 과실비율<br/>AI 판단 시스템
      </SubTitle>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
