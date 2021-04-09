import React from 'react';
import NavLayout from '../../components/NavLayout';
import styled from 'styled-components';
import LikeBookmark from '../../components/ViewPage/LikeBookmark';

const ViewJob = ({ snap }: any) => {
    console.log(snap);

    return (
        <NavLayout>
            <FloatingButtonWrapper>
                <LikeBookmark />
            </FloatingButtonWrapper>
            <ContentsWrapper>
                <TitleWrapper>타이틀</TitleWrapper>
                <ThumbWrapper>
                    <ThumbImgWrapper>
                        <img src="http://placehold.it/240x240" alt="thumbnailImage" />
                    </ThumbImgWrapper>
                    <InfoWrapper>
                        <img src="http://placehold.it/240x240" alt="logoImage" />
                        <h2>브랜드명</h2>
                        <p>브랜드 한줄 소개</p>
                        <button>지원하기</button>
                    </InfoWrapper>
                </ThumbWrapper>

                <Paragraph>
                    Shoot! Take a Panorama 바람 끝에 찾아온 작은 기억 귓가에 퍼지는 깊은 울림 Ring my bell 아름다운 내
                    맘을 한가득 담아서 조금씩 은은히 줄거야 너와 나 손끝이 닿을 때 Eyes on me 에디터 최대한 구현
                </Paragraph>
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
            <WrapperBorder />
            <AdditionalInfo>
                <div>
                    <h2>마감일</h2>
                    <span>2021/01/02 ~ 2021/01/10</span>
                </div>
                <div>
                    <h3>근무지역</h3>
                    <span>경기 용인</span>
                </div>
            </AdditionalInfo>
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
    margin : 0 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.mode.textColor};
    padding: 140px 0 100px 0;
    font-family: Noto Sans KR;
    font-style: normal;
`;

const TitleWrapper = styled.div`
    margin: 0 0 40px 0;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    /* 글씨 크기 * 1/2  */
    font-size: 32px;
    line-height: 93px;
`;

const TagButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 140px 0 188px 0;
    height: 136px;
    margin-left: 200px;

    & > button {
        width: 100px;
        height: 34px;
        border : 0;
        background-color: ${({ theme }) => theme.mode.containerColor};
        color: ${({ theme }) => theme.mode.buttonTextColor};
        border-radius: 50px;
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: normal;
        /* 글씨 크기 20  */
        font-size: 12px;
        line-height: 29px;
        margin-right : 20px;
    }
`;

const ThumbWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ThumbImgWrapper = styled.div`
    width : 53%;
    height : 500px;

    & > img { 
        width : 100%;
        height : 100%;
        object-fit:cover;
    }
`

const InfoWrapper = styled.div`
    width: 45%;
    height: 500px;
    border: 4px solid ${({ theme }) => theme.mode.borderColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > img {
        width: 200px;
        height: 200px;
        border-radius: 200px;
        margin : 20px 0 40px 0;
    }

    & > h2 {
        font-weight: bold;
        font-size: 30px;
        line-height: 52px;
        margin : 0 0 10px 0;
    }

    & > p {
        font-weight: normal;
        font-size: 18px;
        margin : 0 0 30px 0;
    }

    & > button {
        cursor: pointer;
        width: 200px;
        height : 50px;
        font-family: Noto Sans KR;
        font-weight: bold;
        font-size: 18px;
        border-radius: 50px;
        background-color: ${({ theme }) => theme.mode.containerColor};
        color: ${({ theme }) => theme.mode.buttonTextColor};
        border: 4px solid ${({ theme }) => theme.mode.borderColor};

        &:focus {
            outline: none;
        }
    }
`

const WrapperBorder = styled.div`
    margin: 0 100px;
    border: 4px solid ${({ theme }) => theme.mode.borderColor};
`;

const Paragraph = styled.div`
    text-aligh : left;
    margin : 70px 0 0 0;
`

const AdditionalInfo = styled.div`
    width: 100%;
    padding: 87px 0 197px 280px;
    /* 글씨 크기 * 1/2  */
    font-size: 18px;

    & > div {
        display: flex;
        align-items: center;
        font-family: Noto Sans KR;
        font-style: normal;
        line-height: 52px;
        color: ${({ theme }) => theme.mode.textColor};

        & > h2 {
            margin-right: 134px;
            font-weight: bold;
            color: ${({ theme }) => theme.mode.textColor};
        }
        & > h3 {
            margin-right: 117px;
            font-weight: bold;
            color: ${({ theme }) => theme.mode.textColor};
        }
        & > span {
            font-weight: normal;
        }
    }
`;

export default ViewJob;
