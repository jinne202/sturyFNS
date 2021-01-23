import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

type RegisterFormProps = {
    onSubmit: (registerForm: { email: string; nickname : string; password: string;}) => void;
};

export const emailCheckRgx = (email : string) => {
    const emailCheckRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return emailCheckRegex.test(email);
}

// 8~16자 영문 대 소문자, 숫자, 특수문자, 영어랑 숫자 필수
export const passwordCheckRgx = (password : string) => {
    const passwordCheckRegex = /^(?=.*[a-z])(?=.*[0-9])[0-9A-Za-z$&+,:;=?@#|'<>.^*()%!-]{8,16}$/;
    return passwordCheckRegex.test(password);
}

function RegisterForm({ onSubmit }: RegisterFormProps) {
    const [registerForm, setRegisterForm] = useState({
        email: '',
        nickname : '',
        password: ''
    });
  
    const { email, nickname, password } = registerForm;
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
  
    const onChange = (e : any) => {
      const { name, value } = e.target;
      setRegisterForm({
        ...registerForm,
        [name]: value
      });
    };

    const onChangePasswordCheck = useCallback((e : any) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }, [password]);
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isEveryValid()) {
          return;
      }
      onSubmit(registerForm);
      setRegisterForm({
        email: '',
        nickname : '',
        password: ''
      }); // 초기화
    };

    const isEveryValid = () => {
        return emailCheckRgx(email) && passwordCheckRgx(password)  && (password === passwordCheck)
    }
  
    return (
      <LoginFormWrapper onSubmit={handleSubmit}>
          <EmailWrapper>
              <SubTitle>Email</SubTitle>
              <LoginInput name="email" value={email} onChange={onChange} required/>
          </EmailWrapper>
          <NicknameWrapper>
              <SubTitle>Nickname</SubTitle>
              <LoginInput name="nickname" value={nickname} onChange={onChange} required/>
          </NicknameWrapper>
          <PasswordWrapper>
            <SubTitle>Password</SubTitle>
            <LoginInput type="password" name="password" value={password} onChange={onChange} required/>
          </PasswordWrapper>
          <PasswordCheckWrapper>
            <SubTitle>Password Check</SubTitle>
            <LoginInput type="password" name="password-check" value={passwordCheck} onChange={onChangePasswordCheck} required/>
            <SubLink>{passwordError ? "비밀번호가 일치하지 않습니다" : ""}</SubLink>
          </PasswordCheckWrapper>
        <LoginButton type="submit">회원가입하기</LoginButton>
      </LoginFormWrapper>
    );
  }

const LoginFormWrapper = styled.form`
    width : 50%;
    margin : 54px 0 0 0;
`

const EmailWrapper = styled.div`

`

const SubTitle = styled.p`
    margin : 0 0 10px 0;
    font-size : 18px;
    font-weight : 700;
    color: ${({ theme }) => theme.mode.textColor};
`

const LoginInput = styled.input`
    font-size : 36px;
    line-height : 200%;
    display:block;
    width : 100%;
    border:none;
    border-bottom : 4px solid ${({ theme }) => theme.mode.borderColor};
    background-color : ${({ theme }) => theme.mode.mainBg};

    &:focus {
        outline : none;
    }
`

const PasswordWrapper = styled.div`
    margin : 110px 0 0 0;
`

const NicknameWrapper = styled.div`
    margin : 110px 0 0 0;
`

const PasswordCheckWrapper = styled.div`
    margin : 110px 0 0 0;
`

const LoginButton = styled.button`
    cursor : pointer;
    width : 100%;
    height : 84px;
    margin : 60px 0 0 0;
    font-size : 24px;
    font-weight : 600;
    background-color : ${({ theme }) => theme.mode.containerColor};
    color : ${({ theme }) => theme.mode.buttonTextColor};
    border : 0;
    padding : 0;

    &:focus {
        outline : none;
    }
`

const SubLink = styled.p`
    color :${({ theme }) => theme.mode.textColor};
    font-size : 18px;
    font-weight : 700;
    margin : 10px 0 0 0;
`

export default RegisterForm;