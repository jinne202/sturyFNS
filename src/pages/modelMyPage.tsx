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
