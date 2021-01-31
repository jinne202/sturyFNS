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
    // NOTE: 다음 우편번호 api?
    const locationCheckRgx = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
    return locationCheckRgx.test(location);
};
// @ : SnsAddress
export const snsAddressCheckRgx = (snsAddress: string) => {
    // url 입력
    const snsAddressCheckRgx = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g;
    return snsAddressCheckRgx.test(snsAddress);
};
// @ : Intro, 글자수 제한

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
            console.log('입력 에러');
            return;
        }
        onSubmit(photographerForm);
        setPhotographerForm({
            name: '',
            location: '',
            snsAddress: '',
            intro: '',
        }); // 초기화
        console.log('입력 완료');
    };

    const isEveryValid = () => {
        if (nameCheckRgx(name) === false) {
            console.log(1);
        } else if (locationCheckRgx(location) === false) {
            console.log(2);
        } else if (snsAddressCheckRgx(intro) === false) {
            console.log(3);
        }
        return nameCheckRgx(name) && locationCheckRgx(location) && snsAddressCheckRgx(snsAddress);
    };
    // @ : intro MaxLength
    const handleChangeInput = (e: any) => {
        const maxLength = 300;
        const { name, value } = e.target;
        const intro = value.slice(0, maxLength);

        setPhotographerForm({
            ...photographerForm,
            [name]: intro,
        });
    };

    const onClick = (e: any) => {
        // 클릭 시 실행
        handleSubmit(e);
    };

    const onKeyPress = (e: any) => {
        if (e.key == 'Enter') {
            onClick(e);
        }
    };

    return (
        <PhotographerFormWrapper onSubmit={handleSubmit}>
            <NameWrapper>
                <SubTitle>이름</SubTitle>
                <PhotographerInput name="name" value={name} onChange={onChange} required />
            </NameWrapper>
            <LocationWrapper>
                <SubTitle>지역</SubTitle>
                <PhotographerInput name="location" value={location} onChange={onChange} required />
            </LocationWrapper>
            <SNSAddressWrapper>
                <SubTitleTwo>SNS주소</SubTitleTwo>
                <PhotographerInput name="snsAddress" value={snsAddress} onChange={onChange} required />
            </SNSAddressWrapper>
            <IntroWrapper>
                <SubTitleTwo>한줄소개</SubTitleTwo>
                <PhotographerIntroInput
                    name="intro"
                    value={intro}
                    onChange={handleChangeInput}
                    onKeyPress={onKeyPress}
                    required
                />
            </IntroWrapper>
            <PhotographerButton type="submit" onClick={onClick}>
                등록하기
            </PhotographerButton>
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

const PhotographerIntroInput = styled.input`
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
