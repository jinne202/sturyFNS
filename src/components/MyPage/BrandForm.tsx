import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

type PhotographerFormProps = {
    onSubmit: (brandForm: { name: string; brandName: string; brandEmail: string; homePageUrl: string }) => void;
};
// @ : Name
export const nameCheckRgx = (name: string) => {
    // 한글 또는 영문 사용하기(혼용X)
    const nameCheckRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
    return nameCheckRegex.test(name);
};
// @ : BrandName
// export const brandNameCheckRgx = (brandName: string) => {
//     const brandNameCheckRgx = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; // "|"를 사용
//     return brandNameCheckRgx.test(brandName);
// };
// @ : BrandEmail
export const brandEmailCheckRgx = (brandEmail: string) => {
    const brandEmailCheckRgx = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    return brandEmailCheckRgx.test(brandEmail);
};
// @ : HomePageUrl
export const homePageUrlCheckRgx = (homePageUrl: string) => {
    const homePageUrlCheckRgx = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g;
    return homePageUrlCheckRgx.test(homePageUrl);
};

function BrandForm({ onSubmit }: PhotographerFormProps) {
    const [brandForm, setBrandForm] = useState({
        name: '',
        brandName: '',
        brandEmail: '',
        homePageUrl: '',
    });

    const { name, brandName, brandEmail, homePageUrl } = brandForm;

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setBrandForm({
            ...brandForm,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isEveryValid()) {
            console.log('입력 에러');
            return;
        }
        onSubmit(brandForm);
        setBrandForm({
            name: '',
            brandName: '',
            brandEmail: '',
            homePageUrl: '',
        }); // 초기화
        console.log('입력 완료');
    };

    const isEveryValid = () => {
        return nameCheckRgx(name) && brandEmailCheckRgx(brandEmail) && homePageUrlCheckRgx(homePageUrl);
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

    // console.log(brandForm);

    return (
        <BrandFormWrapper onSubmit={handleSubmit}>
            <NameWrapper>
                <SubTitle>이름</SubTitle>
                <BrandInput name="name" value={name} onChange={onChange} required />
            </NameWrapper>
            <CompanyNameWrapper>
                <SubTitleTwo>회사명</SubTitleTwo>
                <BrandInput name="brandName" value={brandName} onChange={onChange} required />
            </CompanyNameWrapper>
            <CompanyEamilWrapper>
                <SubTitleThree>회사EMAIL</SubTitleThree>
                <BrandInput name="brandEmail" value={brandEmail} onChange={onChange} required />
                <IdentificationButton type="submit">인증</IdentificationButton>
            </CompanyEamilWrapper>
            <HomePageURLWrapper>
                <SubTitleThree>홈페이지URL</SubTitleThree>
                <BrandInput
                    name="homePageUrl"
                    value={homePageUrl}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    required
                />
            </HomePageURLWrapper>
            <BrandButton type="submit">등록하기</BrandButton>
        </BrandFormWrapper>
    );
}

const BrandFormWrapper = styled.form`
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

const CompanyNameWrapper = styled.div`
    display: flex;
    margin: 84px 0 0 0;
    width: 853px;
    height: 52px;
`;

const CompanyEamilWrapper = styled.div`
    display: flex;
    margin: 84px 0 0 0;
    width: 1040px;
    height: 52px;
`;

const HomePageURLWrapper = styled.div`
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

const SubTitleThree = styled.p`
    width: 213px;
    margin: 0 76px 0 0;
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => theme.mode.textColor};
    line-height: 52px;
`;

const BrandInput = styled.input`
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

const IdentificationButton = styled.button`
    cursor: pointer;
    width: 134px;
    height: 64px;
    font-family: Noto Sans KR;
    font-weight: bold;
    font-size: 36px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.mode.containerColor};
    color: ${({ theme }) => theme.mode.buttonTextColor};
    border: 4px solid ${({ theme }) => theme.mode.borderColor};
    margin: -12px 0 0 53px;
    padding: 0 0 10px 0;

    &:focus {
        outline: none;
    }
`;

const BrandButton = styled.button`
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

export default BrandForm;
