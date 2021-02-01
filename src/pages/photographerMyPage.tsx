import React from 'react';
import NavLayout from '../components/NavLayout';
import styled from 'styled-components';
import PhotographerForm from '../components/MyPage/PhotographerForm';
import ChangeForm from '../components/MyPage/ChangeForm';

export default function photographerMyPage() {
    const onSubmit = (photographerForm: { name: string }) => {
        console.log(photographerForm);
    };

    return (
        <NavLayout>
            <PhotographerMyPageWrapper>
                <PhotographerMyPageTitle>MY PAGE</PhotographerMyPageTitle>
                <PhotographerForm onSubmit={onSubmit} />
                <ChangeForm />
            </PhotographerMyPageWrapper>
        </NavLayout>
    );
}

const PhotographerMyPageWrapper = styled.div`
    width: 100%;
    font-family: 'Noto Sans KR', sans-serif;
`;

const PhotographerMyPageTitle = styled.h2`
    text-align: center;
    font-size: 96px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.mode.textColor};
    margin: 148px 0 0 0;
    line-height: 144px;
`;
