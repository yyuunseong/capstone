import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
import MainPage from './component/page/MainPage';
import VideoUploadPage from './component/page/VideoUploadPage';
import InformationPage from './component/page/InformationPage';
import ResultPage from './component/page/ResultPage';

const MainTitleText = styled.p`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>교통사고 과실비율 판단 AI 시스템</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="video-upload" element={<VideoUploadPage />} />
        <Route path="add-info" element={<InformationPage />} />
        <Route path="result-view" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;