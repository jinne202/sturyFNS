import React, { useState } from 'react';
import styled from 'styled-components';

type ModelFormProps = {
    onSubmit: (modelForm: {
        nickname: string;
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
// @ : nickname .
export const nicknameCheckRgx = (name: string) => {
    // 한글 또는 영문 사용하기(혼용X)
    const nicknameCheckRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
    return nicknameCheckRegex.test(name);
};
// @ : Gender

// @ : Height
export const heightCheckRgx = (height: string) => {
    const heightCheckRgx = /^[0-9]{3}$/;
    return heightCheckRgx.test(height);
};
// @ : Weight
export const weightCheckRgx = (weight: string) => {
    const weightCheckRgx = /^[0-9]{3}$/;
    return weightCheckRgx.test(weight);
};
// @ : Bust
export const bustCheckRgx = (bust: string) => {
    const bustCheckRegex = /^[0-9]{3}$/;
    return bustCheckRegex.test(bust);
};
// @ : Waist
export const waistCheckRgx = (waist: string) => {
    const waistCheckRegex = /^[0-9]{3}$/;
    return waistCheckRegex.test(waist);
};
// @ : Hip
export const hipCheckRgx = (hip: string) => {
    const hipCheckRegex = /^[0-9]{3}$/;
    return hipCheckRegex.test(hip);
};
// @ : Shoes
export const shoesCheckRgx = (shoes: string) => {
    const shoesCheckRegex = /^[0-9]{3}$/;
    return shoesCheckRegex.test(shoes);
};
// @ : SnsAddress
export const snsAddressCheckRgx = (snsAddress: string) => {
    // url 입력
    const snsAddressCheckRgx = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g;
    return snsAddressCheckRgx.test(snsAddress);
};
// @ : Awards

function ModelForm({ onSubmit }: ModelFormProps) {
    const [modelForm, setModelForm] = useState({
        nickname: '',
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

    const { nickname, height, weight, bust, waist, hip, shoes, snsAddress, awards } = modelForm;

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
            console.log('입력 에러');
            return;
        }
        onSubmit(modelForm);
        setModelForm({
            nickname: '',
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
        console.log('입력 완료');
    };

    const isEveryValid = () => {
        if (nicknameCheckRgx(nickname) === false) {
            console.log(1);
        } else if (heightCheckRgx(height) === false) {
            console.log(2);
        } else if (weightCheckRgx(weight) === false) {
            console.log(3);
        } else if (bustCheckRgx(bust) === false) {
            console.log(4);
        } else if (waistCheckRgx(waist) === false) {
            console.log(5);
        } else if (hipCheckRgx(hip) === false) {
            console.log(6);
        } else if (shoesCheckRgx(shoes) === false) {
            console.log(7);
        } else if (snsAddressCheckRgx(snsAddress) === false) {
            console.log(8);
        } else {
            console.log(9);
        }
        return (
            nicknameCheckRgx(nickname) &&
            heightCheckRgx(height) &&
            weightCheckRgx(weight) &&
            bustCheckRgx(bust) &&
            waistCheckRgx(waist) &&
            hipCheckRgx(hip) &&
            shoesCheckRgx(shoes) &&
            snsAddressCheckRgx(snsAddress)
        );
    };

    // @ : dropdonw menu
    const options = ['남성', '여성'];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: any) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
        setModelForm({
            ...modelForm,
            gender: value,
        });
    };

    console.log(modelForm);

    return (
        <ModelFormWrapper onSubmit={handleSubmit}>
            <NicknameWrapper>
                <SubTitle>닉네임</SubTitle>
                <ModelInput name="nickname" value={nickname} onChange={onChange} required />
            </NicknameWrapper>
            <RestWrapper>
                <SubTitle>성별</SubTitle>
                <DropDownContainer>
                    <DropDownHeader onClick={toggling}>
                        {selectedOption || '선택'}
                        <img src="/static/Polygon1.png" />
                    </DropDownHeader>
                    {isOpen && (
                        <DropDownListContainer>
                            <DropDownList>
                                {options.map((option) => (
                                    <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                        {option}
                                    </ListItem>
                                ))}
                            </DropDownList>
                        </DropDownListContainer>
                    )}
                </DropDownContainer>
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
                <ModelInputAwards name="awards" value={awards} onChange={onChange} maxLength={300} required />
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

const NicknameWrapper = styled.div`
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
    width: 68px;
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

const ModelInputAwards = styled.textarea`
    width: 564px;
    height: 260px;
    font-size: 36px;
    line-height: 200%;
    border: none;
    border: 4px solid ${({ theme }) => theme.mode.borderColor};
    background-color: ${({ theme }) => theme.mode.mainBg};
    margin-top: 2px;

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

const DropDownContainer = styled('div')`
    margin-bottom: -20px;
`;

const DropDownHeader = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 564px;
    margin: -0.25em 0 0 0;
    padding: 0.25em 0.25em 0.25em 0.25em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    font-weight: 700;
    font-size: 32px;
    color: #000;
    background: #ffffff;
    img {
        margin: 0.4em 0.25em 0 0;
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
    }
`;

const DropDownListContainer = styled('div')``;

const DropDownList = styled('ul')`
    position: absolute;
    width: 564px;
    padding: 0;
    margin: 0;
    padding-left: 1em;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #000;
    font-size: 1.3rem;
    font-weight: 700;
    &:first-child {
        padding-top: 0.8em;
    }
`;

const ListItem = styled('li')`
    list-style: none;
    margin-bottom: 0.8em;
`;

export default ModelForm;
