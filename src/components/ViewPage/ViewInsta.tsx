import React from 'react';
import styled from 'styled-components';
import InstaPostTable from './InstaPostTable';

const dummyUserImg = require('../../../static/userImage.png');

export interface ViewInstaProps {}

const ViewInsta: React.SFC<ViewInstaProps> = (props: any) => {
    return (
        <UserMyPageWrapper>
            <MyCard>
                <RightWrapper>
                    <UserImg>
                        <img src={dummyUserImg} alt="더미 유저 이미지" />
                    </UserImg>
                    <UserName>Yyoung 인스타 아이디</UserName>
                </RightWrapper>
            </MyCard>
            <MyInfo>
                <InstaPostTable />
            </MyInfo>
            <ButtonWrapper>
                <Button type="submit">모델에게 문의하기</Button>
            </ButtonWrapper>
        </UserMyPageWrapper>
    );
};

const UserMyPageWrapper = styled.div`
    margin: 0 100px;
`;

const MyCard = styled.div`
    margin: 95px 0 0 0;
    display: flex;
`;

const RightWrapper = styled.div`
    width: 90%;
`;

const UserImg = styled.div`
    width: 160px;
    height: 160px;
    border: 4px solid ${({ theme }) => theme.mode.borderColor};
    border-radius: 50%;
    float: left;
    margin: 0 144px 40px 0;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const UserName = styled.p`
    font-size: 14px;
    font-family: 'Noto Sans KR';
    font-weight: bold;
    line-height: 155px;
    text-align: left;
    color: ${({ theme }) => theme.mode.textColor};
`;

const MyInfo = styled.div`
    margin: 38px 0 100px 0;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
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
`;

export default ViewInsta;
