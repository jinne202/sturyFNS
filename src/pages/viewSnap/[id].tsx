import React from 'react';
import NavLayout from '../../components/NavLayout';
import styled from 'styled-components';
import LikeBookmark from '../../components/ViewPage/LikeBookmark';

const ViewSnap = ({ snap }: any) => {
    console.log(snap);

    return (
        <NavLayout>
            <FloatingButtonWrapper>
                <LikeBookmark />
            </FloatingButtonWrapper>
            <ContentsWrapper>
                <TitleWrapper>타이틀</TitleWrapper>
                <div>
                    <img src="http://placehold.it/240x240" alt="snapImage" />
                </div>
                <div>
                    <img src="http://placehold.it/240x240" alt="snapImage" />
                </div>
                <span>
                    Shoot! Take a Panorama 바람 끝에 찾아온 작은 기억 귓가에 퍼지는 깊은 울림 Ring my bell 아름다운 내
                    맘을 한가득 담아서 조금씩 은은히 줄거야 너와 나 손끝이 닿을 때 Eyes on me 에디터 최대한 구현
                </span>
            </ContentsWrapper>
            <TagButtonWrapper>
                <button>#태그입력</button>
                <button>#태그입력</button>
                <button>#태그입력</button>
                <button>#태그입력</button>
                <button>#태그입력</button>
                <button>#태그입력</button>
                <button>#태그입력</button>
            </TagButtonWrapper>
            <ButtonWrapperCenter>
                <button>작가에게 문의하기</button>
            </ButtonWrapperCenter>
            <ButtonWrapper>
                <button>이전</button>
                <button style={{ borderLeft: '1px solid #C4C4C4' }}>다음</button>
            </ButtonWrapper>
        </NavLayout>
    );
};

const FloatingButtonWrapper = styled.div`
    position: fixed;
    overflow: hidden;
    right: 15px;
    bottom: 15px;
    width: 45px;
    height: 138px;
    border-radius: 100px;
    border: 4px solid ${({ theme }) => theme.mode.borderColor};
    transition: 0.4s all;
    background: transparent;
    top: 63%;
    left: 108%;
    margin-top: -100px; /* Negative half of height. */
    margin-left: -250px; /* Negative half of width. */
`;

const ContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 140px 0 100px 0;
    color: ${({ theme }) => theme.mode.textColor};

    & > div {
        & > img {
            width: 1280px;
            height: 700px;
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
    /* 글씨 크기 * 1/2  */
    font-size: 32px;
    line-height: 93px;
`;

const TagButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 140px 0 188px 0;
    width: 100%;
    height: 136px;
    margin-left: 200px;

    & > button {
        width: 100px;
        height: 34px;
        background-color: ${({ theme }) => theme.mode.containerColor};
        color: ${({ theme }) => theme.mode.buttonTextColor};
        border-radius: 50px;
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: normal;
        /* 글씨 크기 20  */
        font-size: 12px;
        line-height: 29px;
        margin-left: 20px;
    }
`;

const ButtonWrapperCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
        cursor: pointer;
        width: calc(100% / 4);
        text-align: center;
        height: 84px;
        font-size: 24px;
        font-weight: 600;
        background-color: ${({ theme }) => theme.mode.containerColor};
        color: ${({ theme }) => theme.mode.buttonTextColor};
        border: 0;
        padding: 0;

        &:focus {
            outline: none;
        }
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 140px 0 100px 0;

    & > button {
        cursor: pointer;
        width: 540px;
        height: 136px;
        border-top: 4px solid black;
        border-bottom: 4px solid black;
        border-left: 0px;
        border-right: 0px;
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: bold;
        /* 글씨 크기 * 1/2  */
        font-size: 18px;
        line-height: 52px;
    }
`;

export default ViewSnap;
