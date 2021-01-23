import React from 'react';
import styled from 'styled-components';

const SNSLogin = () => {
    return (
        <SNSLoginWrapper>
            <SNSLoginTitle>SNS로 로그인하기</SNSLoginTitle>
            <SNSButton>네이버</SNSButton>
            <MiddleSNSButton>카카오</MiddleSNSButton>
            <SNSButton>구글</SNSButton>
        </SNSLoginWrapper>
    )
}

const SNSLoginWrapper = styled.div`
    margin : 120px 0 0 0;
`

const SNSLoginTitle = styled.p`
    margin : 0 0 54px 0;
    font-size : 18px;
    font-weight : 700;
    color: ${({ theme }) => theme.mode.textColor};
`

const SNSButton = styled.button`
    cursor : pointer;
    height : 80px;
    width : 30%;
    padding : 0;
    background-color : ${({ theme }) => theme.mode.mainBg};
    border : 2px solid ${({ theme }) => theme.mode.borderColor};
    color : ${({ theme }) => theme.mode.textColor};
    font-size : 18px;
    font-weight : 600;

    &:focus {
        outline : none;
    }
`

const MiddleSNSButton = styled(SNSButton)`
    margin : 0 5%;
`

export default SNSLogin;