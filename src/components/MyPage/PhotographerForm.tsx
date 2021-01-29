import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

type PhotographerFormProps = {
    onSubmit: (photographerForm: { name: string; location: string; snsAddress: string; intro: string }) => void;
};
// @ : Name
export const nameCheckRgx = (name: string) => {
    // 한글 또는 영문 사용하기(혼용X)
    const nameCheckRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return nameCheckRegex.test(name);
};
// @ : Location
export const locationCheckRgx = (location: string) => {
    const locationCheckRgx = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return locationCheckRgx.test(location);
};
// @ : SnsAddress
export const snsAddressCheckRgx = (snsAddress: string) => {
    const snsAddressCheckRgx = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return snsAddressCheckRgx.test(snsAddress);
};
// @ : Intro
export const introCheckRgx = (intro: string) => {
    // 한글 또는 영문 사용하기(혼용X)
    const introCheckRgx = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return introCheckRgx.test(intro);
};

function PhotographerForm({ onSubmit }: PhotographerFormProps) {
    const [photographerForm, setPhotographerForm] = useState({
        name: '',
        location: '',
        snsAddress: '',
        intro: '',
    });

    const { name, location, snsAddress, intro } = photographerForm;

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setPhotographerForm({
            ...photographerForm,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isEveryValid()) {
            return;
        }
        onSubmit(photographerForm);
        setPhotographerForm({
            name: '',
            location: '',
            snsAddress: '',
            intro: '',
        }); // 초기화
    };

    const isEveryValid = () => {
        return nameCheckRgx(name) && locationCheckRgx(location) && snsAddressCheckRgx(intro) && nameCheckRgx(intro);
    };

    return (
        <PhotographerFormWrapper onSubmit={handleSubmit}>
            <NameWrapper>
                <SubTitle>이름</SubTitle>
                <PhotographerInput name="name" value={name} onChange={onChange} required />
            </NameWrapper>
            <LocationWrapper>
                <SubTitle>지역</SubTitle>
                <PhotographerInput name="name" value={location} onChange={onChange} required />
            </LocationWrapper>
            <SNSAddressWrapper>
                <SubTitleTwo>SNS주소</SubTitleTwo>
                <PhotographerInput name="name" value={snsAddress} onChange={onChange} required />
            </SNSAddressWrapper>
            <IntroWrapper>
                <SubTitleTwo>한줄소개</SubTitleTwo>
                <PhotographerInput name="name" value={intro} onChange={onChange} required />
            </IntroWrapper>
            <PhotographerButton type="submit">등록하기</PhotographerButton>
        </PhotographerFormWrapper>
    );
}

const PhotographerFormWrapper = styled.form`
    display: grid;
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center; /* 수평 가운데 정렬 */
    line-height: 52px;
`;

const NameWrapper = styled.div`
    display: flex;
    margin: 205px 0 0 0;
    width: 853px;
    height: 52px;
`;

const LocationWrapper = styled.div`
    display: flex;
    margin: 84px 0 0 0;
    width: 853px;
    height: 52px;
`;

const SNSAddressWrapper = styled.div`
    display: flex;
    margin: 84px 0 0 0;
    width: 853px;
    height: 52px;
`;

const IntroWrapper = styled.div`
    display: flex;
    margin: 84px 0 0 0;
    width: 853px;
    height: 52px;
`;

const SubTitle = styled.p`
    width: 67px;
    margin: 0 222px 0 0;
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => theme.mode.textColor};
    line-height: 52px;
`;

const SubTitleTwo = styled.p`
    width: 149px;
    margin: 0 140px 0 0;
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => theme.mode.textColor};
    line-height: 52px;
`;

const PhotographerInput = styled.input`
    width: 564px;
    font-size: 36px;
    line-height: 200%;

    border: none;
    border-bottom: 4px solid ${({ theme }) => theme.mode.borderColor};
    background-color: ${({ theme }) => theme.mode.mainBg};

    &:focus {
        outline: none;
    }
`;

const PhotographerButton = styled.button`
    cursor: pointer;
    width: 496px;
    height: 84px;
    font-family: Noto Sans KR;
    font-weight: bold;
    font-size: 36px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.mode.containerColor};
    color: ${({ theme }) => theme.mode.buttonTextColor};
    border: 4px solid ${({ theme }) => theme.mode.borderColor};
    margin: 646px auto 0;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
`;

export default PhotographerForm;
