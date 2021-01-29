import React, { useState } from 'react';
import styled from 'styled-components';

type GeneralFormProps = {
    onSubmit: (generalForm: { name: string }) => void;
};

export const nameCheckRgx = (name: string) => {
    // 한글 또는 영문 사용하기(혼용X)
    const nameCheckRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return nameCheckRegex.test(name);
};

function GeneralForm({ onSubmit }: GeneralFormProps) {
    const [generalForm, setGeneralForm] = useState({
        name: '',
    });

    const { name } = generalForm;

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setGeneralForm({
            ...generalForm,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isEveryValid()) {
            return;
        }
        onSubmit(generalForm);
        setGeneralForm({
            name: '',
        }); // 초기화
    };

    const isEveryValid = () => {
        return nameCheckRgx(name);
    };

    return (
        <GeneralFormWrapper onSubmit={handleSubmit}>
            <NameWrapper>
                <SubTitle>이름</SubTitle>
                <GeneralNameInput name="name" value={name} onChange={onChange} required />
            </NameWrapper>
            <GeneralButton type="submit">등록하기</GeneralButton>
        </GeneralFormWrapper>
    );
}

const GeneralFormWrapper = styled.form`
    display: grid;
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center; /* 수평 가운데 정렬 */
    line-height: 52px;
`;

const NameWrapper = styled.div`
    display: flex;
    margin: 192px 0 0 0;
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

const GeneralNameInput = styled.input`
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

const GeneralButton = styled.button`
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

export default GeneralForm;
