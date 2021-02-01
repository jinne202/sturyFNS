import React from 'react';
import NavLayout from '../components/NavLayout';
import styled from 'styled-components';
import ChangeForm from '../components/MyPage/ChangeForm';
import ModelForm from '../components/MyPage/ModelForm';

export default function modelMyPage() {
    const onSubmit = (modelForm: {
        name: string;
        gender: string;
        height: string;
        weight: string;
        bust: string;
        waist: string;
        hip: string;
        shoes: string;
        snsAddress: string;
        awards: string;
    }) => {
        console.log(modelForm);
    };

    return (
        <NavLayout>
            <ModelMyPageWrapper>
                <ModelMyPageTitle>MY PAGE</ModelMyPageTitle>
                <ModelForm onSubmit={onSubmit} />
                <ChangeForm />
            </ModelMyPageWrapper>
        </NavLayout>
    );
}

const ModelMyPageWrapper = styled.div`
    width: 100%;
    font-family: 'Noto Sans KR', sans-serif;
`;

const ModelMyPageTitle = styled.h2`
    text-align: center;
    font-size: 96px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.mode.textColor};
    margin: 148px 0 0 0;
    line-height: 144px;
`;

const GeneralButton = styled.button`
    cursor: pointer;
    width: 496px;
    height: 84px;
    font-weight: bold;
    font-size: 36px;
    line-height: 52px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.mode.containerColor};
    color: ${({ theme }) => theme.mode.buttonTextColor};
    border: 4px solid ${({ theme }) => theme.mode.borderColor};
    padding: 0;
    margin: 646px auto 0;

    &:focus {
        outline: none;
    }
`;
