import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import CheckBox from "../ui/CheckBox";
import PageIndicator from '../ui/PageIndicator';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
`;

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: 37.5px;
    margin-right: 37.5px;
`;

const ButtonWrapper = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
`;

const CommentLabel = styled.p`
    font-size: 34px;
    font-family: "Jalnan";
    color: black;
    margin-top: 80px;
    margin-bottom: 10px; // 이 값을 추가하여 간격을 줄입니다.
`;

const SubTitle = styled.p`
    font-size: 19px;
    font-family: "Jalnan";
    color: black;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 10px; // 이 값을 추가하여 간격을 줄입니다.
`;

function InformationPage(props) {
    const navigate = useNavigate();
    const pages = ['Page 1', 'Page 2', 'Page 3'];
    const currentPage = 2; 

    const [checkboxes, setCheckboxes] = useState({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false
    });

    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setCheckboxes(prevState => ({
        ...prevState,
        [name]: checked
      }));
    };

    const handleSubmit = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/api/add-info`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkboxes)
          });

          if (response.ok) {
            navigate('/result-view');
          } else {
            console.error('Error submitting checkbox data:', await response.text());
          }
        } catch (error) {
          console.error('Error in data processing:', error);
        }
    };

    return (
        <Wrapper>
            <PageIndicator pages={pages} currentPage={currentPage} />
            <CheckboxContainer>
                <CommentLabel>추가정보 입력 (중복 가능)</CommentLabel>
                <SubTitle>블랙박스 영상에 담기지 않았지만,<br/>과실비율을 판단하는데 필요한 추가정보를 체크해주세요</SubTitle>
                <CheckBox checkboxes={checkboxes} onChange={handleCheckboxChange} />

                <ButtonWrapper>
                    <Button
                        bgColor="transparent"
                        textColor="black"
                        fontSize="21px"
                        title="이전"
                        onClick={() => {
                            navigate("/video-upload");
                        }}
                    />
                    <Button
                        bgColor="#242a88"
                        textColor="white"
                        fontSize="21px"
                        title="결과 확인하기"
                        onClick={handleSubmit}
                    />
                </ButtonWrapper>
            </CheckboxContainer>
        </Wrapper>
    );
}

export default InformationPage;