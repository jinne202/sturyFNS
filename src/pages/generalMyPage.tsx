import React from 'react';
import NavLayout from '../components/NavLayout';
import styled from 'styled-components';
import GeneralForm from '../components/MyPage/GeneralForm';
import ChangeForm from '../components/MyPage/ChangeForm';

export default function generalMyPage() {
    const onSubmit = (generalForm: { name: string }) => {
        console.log(generalForm);
    };

    return (
        <NavLayout>
            <GeneralMyPageWrapper>
                <GeneralMyPageTitle>MY PAGE</GeneralMyPageTitle>
                <GeneralForm onSubmit={onSubmit} />
                <ChangeForm />
            </GeneralMyPageWrapper>
        </NavLayout>
    );
}

const GeneralMyPageWrapper = styled.div`
    width: 100%;
    font-family: 'Noto Sans KR', sans-serif;
`;

const GeneralMyPageTitle = styled.h2`
    text-align: center;
    font-size: 96px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.mode.textColor};
    margin: 148px 0 0 0;
    line-height: 144px;
`;
