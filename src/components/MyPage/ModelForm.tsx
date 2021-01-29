import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

type ModelFormProps = {
    onSubmit: (modelForm: {
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
    }) => void;
};
// @ : Name .
export const nameCheckRgx = (name: string) => {
    // 한글 또는 영문 사용하기(혼용X)
    const nameCheckRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return nameCheckRegex.test(name);
};
// @ : Gender
export const genderCheckRgx = (gender: string) => {
    const genderCheckRgx = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return genderCheckRgx.test(gender);
};
// @ : Height
export const heightCheckRgx = (height: string) => {
    const heightCheckRgx = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return heightCheckRgx.test(height);
};
// @ : Weight
export const weightCheckRgx = (weight: string) => {
    const weightCheckRgx = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return weightCheckRgx.test(weight);
};
// @ : Bust
export const bustCheckRgx = (bust: string) => {
    const bustCheckRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return bustCheckRegex.test(bust);
};
// @ : Waist
export const waistCheckRgx = (waist: string) => {
    const waistCheckRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return waistCheckRegex.test(waist);
};
// @ : Hip
export const hipCheckRgx = (hip: string) => {
    const hipCheckRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return hipCheckRegex.test(hip);
};
// @ : Shoes
export const shoesCheckRgx = (shoes: string) => {
    const shoesCheckRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return shoesCheckRegex.test(shoes);
};
// @ : SnsAddress
export const snsAddressCheckRgx = (snsAddress: string) => {
    const snsAddressCheckRgx = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return snsAddressCheckRgx.test(snsAddress);
};
// @ : Awards
export const awardsCheckRgx = (awards: string) => {
    const awardsCheckRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return awardsCheckRegex.test(awards);
};

function ModelForm({ onSubmit }: ModelFormProps) {
    const [modelForm, setModelForm] = useState({
        name: '',
        gender: '',
        height: '',
        weight: '',
        bust: '',
        waist: '',
        hip: '',
        shoes: '',
        snsAddress: '',
        awards: '',
    });

    const { name, gender, height, weight, bust, waist, hip, shoes, snsAddress, awards } = modelForm;

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setModelForm({
            ...modelForm,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isEveryValid()) {
            return;
        }
        onSubmit(modelForm);
        setModelForm({
            name: '',
            gender: '',
            height: '',
            weight: '',
            bust: '',
            waist: '',
            hip: '',
            shoes: '',
            snsAddress: '',
            awards: '',
        }); // 초기화
    };

    const isEveryValid = () => {
        return (
            nameCheckRgx(name) &&
            genderCheckRgx(gender) &&
            heightCheckRgx(height) &&
            weightCheckRgx(weight) &&
            bustCheckRgx(bust) &&
            waistCheckRgx(waist) &&
            hipCheckRgx(hip) &&
            shoesCheckRgx(shoes) &&
            snsAddressCheckRgx(snsAddress) &&
            awardsCheckRgx(awards)
        );
    };

    return (
        <ModelFormWrapper onSubmit={handleSubmit}>
            <NameWrapper>
                <SubTitle>이름</SubTitle>
                <ModelInput name="name" value={name} onChange={onChange} required />
            </NameWrapper>
            <RestWrapper>
                <SubTitle>성별</SubTitle>
                <ModelInput name="gender" value={gender} onChange={onChange} required />
            </RestWrapper>
            <RestWrapper>
                <SubTitle>HEIGHT</SubTitle>
                <ModelInput name="height" value={height} onChange={onChange} required />
            </RestWrapper>
            <RestWrapper>
                <SubTitle>WEIGHT</SubTitle>
                <ModelInput name="weight" value={weight} onChange={onChange} required />
            </RestWrapper>
            <RestWrapper>
                <SubTitle>BUST</SubTitle>
                <ModelInput name="bust" value={bust} onChange={onChange} required />
            </RestWrapper>
            <RestWrapper>
                <SubTitle>WAIST</SubTitle>
                <ModelInput name="waist" value={waist} onChange={onChange} required />
            </RestWrapper>
            <RestWrapper>
                <SubTitle>HIP</SubTitle>
                <ModelInput name="hip" value={hip} onChange={onChange} required />
            </RestWrapper>
            <RestWrapper>
                <SubTitle>SHOES</SubTitle>
                <ModelInput name="shoes" value={shoes} onChange={onChange} required />
            </RestWrapper>
            <RestWrapper>
                <SubTitleTwo>SNS주소</SubTitleTwo>
                <ModelInput name="snsAddress" value={snsAddress} onChange={onChange} required />
            </RestWrapper>
            <RestWrapper>
                <SubTitleTwo>수상내역</SubTitleTwo>
                <ModelInput name="awards" value={awards} onChange={onChange} required />
            </RestWrapper>
            <ModelButton type="submit">등록하기</ModelButton>
        </ModelFormWrapper>
    );
}

const ModelFormWrapper = styled.form`
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

const RestWrapper = styled.div`
    display: flex;
    margin: 80px 0 0 0;
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

const ModelInput = styled.input`
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

const ModelButton = styled.button`
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

export default ModelForm;
