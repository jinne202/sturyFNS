import React, { useCallback } from 'react';
import NavLayout from '../components/NavLayout';
import LoginForm from '../components/RegisterPage/LoginForm';
import SNSLogin from '../components/RegisterPage/SNSLogin';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/userReducer';

export default function Login(){

    const dispatch = useDispatch();
    
    const onSubmit = useCallback((loginForm: { email: string; password: string }) => {
        console.log(loginForm);
        dispatch(loginRequestAction({
            loginForm,
        }));
    }, []);

    return (
        <NavLayout>
            <LoginWrapper>
                <LoginTitle>Login</LoginTitle>
                <LoginForm onSubmit={onSubmit}/>
                <SNSLogin/>
            </LoginWrapper>
        </NavLayout>
    )
}

const LoginTitle = styled.h2`
    font-size : 180px;
    font-weight : 600;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.mode.textColor};
    margin : 53px 0 0 0;
    line-height : 149.5%;
`

const LoginWrapper = styled.div`
    margin : 0 100px 100px;
    font-family: 'Noto Sans KR', sans-serif;
`