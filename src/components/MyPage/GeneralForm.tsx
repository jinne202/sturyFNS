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
        <GeneralFormWrapper onSubmit={handleSubmit}>
            <NameWrapper>
                <SubTitle>이름</SubTitle>
                <GeneralNameInput name="name" value={name} onChange={onChange} onKeyPress={onKeyPress} required />
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
    width: 600px;
    height: 52px;
`;

const SubTitle = styled.p`
    width: 67px;
    margin: 0 50px 0 0;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.mode.textColor};
    line-height: 52px;
`;

const GeneralNameInput = styled.input`
    width: 400px;
    font-size: 18px;
    line-height: 52px;

    border: none;
    border-bottom: 4px solid ${({ theme }) => theme.mode.borderColor};
    background-color: ${({ theme }) => theme.mode.mainBg};

    &:focus {
        outline: none;
    }
`;

const GeneralButton = styled.button`
    cursor: pointer;
    width: 350px;
    height: 60px;
    font-family: Noto Sans KR;
    font-weight: bold;
    font-size: 20px;
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
