import React from 'react';
import NavLayout from '../../components/NavLayout';
import ViewInsta from '../../components/ViewPage/ViewInsta';
import styled from 'styled-components';
import LikeShare from '../../components/ViewPage/LikeShare';

const ViewLookbook = ({ lookbook }: any) => {
    console.log(lookbook);

    return (
        <NavLayout>
            <LikeShare />
            <ContentsWrapper>
                <TitleWrapper>타이틀</TitleWrapper>
                <div>
                    <img src="http://placehold.it/240x240" alt="lookbookImage" />
                </div>
                <div>
                    <img src="http://placehold.it/240x240" alt="lookbookImage" />
                </div>
                <span>
                    Shoot! Take a Panorama 바람 끝에 찾아온 작은 기억 귓가에 퍼지는 깊은 울림 Ring my bell 아름다운 내
                    맘을 한가득 담아서 조금씩 은은히 줄거야 너와 나 손끝이 닿을 때 Eyes on me 에디터 최대한 구현
                </span>
            </ContentsWrapper>
            <WrapperBorder />
            <ViewInsta />
            <ButtonWrapper>
                <button>이전</button>
                <button style={{ borderLeft: '1px solid #C4C4C4' }}>다음</button>
            </ButtonWrapper>
        </NavLayout>
    );
};

const ContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 140px 0 100px 0;
    & > div {
        & > img {
            height: 700px;
            width: 700px;
        }
    }
    & > span {
        height: 72px;
        width: 700px;
        margin-top: 78px;
    }
`;

const TitleWrapper = styled.div`
    margin: 0 0 91px 0;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 93px;
`;

const WrapperBorder = styled.div`
    margin: 0 100px;
    width: 90%;
    border: 4px solid ${({ theme }) => theme.mode.borderColor};
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 140px 0 100px 0;

    & > button {
        width: 540px;
        height: 136px;
        border-top: 4px solid black;
        border-bottom: 4px solid black;
        border-left: 0px;
        border-right: 0px;
    }
`;

export default ViewLookbook;
