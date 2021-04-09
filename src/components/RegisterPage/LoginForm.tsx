import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeField, initializeForm } from '../../reducers/auth';

// type LoginFormProps = {
//     onSubmit: (loginForm: { email: string; password: string }) => void;
// };

export const emailCheckRgx = (email: string) => {
    const emailCheckRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return emailCheckRegex.test(email);
};

// 8~16자 영문 대 소문자, 숫자, 특수문자, 영어랑 숫자 필수
export const passwordCheckRgx = (password: string) => {
    const passwordCheckRegex = /^(?=.*[a-z])(?=.*[0-9])[0-9A-Za-z$&+,:;=?@#|'<>.^*()%!-]{8,16}$/;
    return passwordCheckRegex.test(password);
};

// function LoginForm({ onSubmit }: LoginFormProps) {
function LoginForm() {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }: any) => ({
        form: auth.login,
    }));

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });

    const { email, password } = loginForm;

    const isEveryValid = () => {
        return emailCheckRgx(email) && passwordCheckRgx(password);
    };

    const onChange = (e: any) => {
        const { value, name } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        });
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value,
            })
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // VC없이 확인
        // if (!isEveryValid()) {
        //     return;
        // }
        console.log('submit : ', loginForm);
        // onSubmit(loginForm);
        setLoginForm({
            email: '',
            password: '',
        }); // 초기화
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return (
        <LoginFormWrapper onSubmit={handleSubmit}>
            <EmailWrapper>
                <SubTitle>Email</SubTitle>
                <LoginInput name="email" value={email} onChange={onChange} required />
            </EmailWrapper>
            <PasswordWrapper>
                <SubTitle>Password</SubTitle>
                <LoginInput type="password" name="password" value={password} onChange={onChange} required />
            </PasswordWrapper>
            <LoginButton type="submit">로그인하기</LoginButton>
        </LoginFormWrapper>
    );
}

const LoginFormWrapper = styled.form`
    width: 50%;
    margin: 54px 0 0 0;
`;

const EmailWrapper = styled.div``;

const SubTitle = styled.p`
    margin: 0 0 10px 0;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.mode.textColor};
`;

const LoginInput = styled.input`
    font-size: 36px;
    line-height: 200%;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 4px solid ${({ theme }) => theme.mode.borderColor};
    background-color: ${({ theme }) => theme.mode.mainBg};

    &:focus {
        outline: none;
    }
`;

const PasswordWrapper = styled.div`
    margin: 110px 0 0 0;
`;

const LoginButton = styled.button`
    cursor: pointer;
    width: 100%;
    height: 84px;
    margin: 60px 0 0 0;
    font-size: 24px;
    font-weight: 600;
    background-color: ${({ theme }) => theme.mode.containerColor};
    color: ${({ theme }) => theme.mode.buttonTextColor};
    border: 0;
    padding: 0;

    &:focus {
        outline: none;
    }
`;

export default LoginForm;
