import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeField, initializeForm } from '../../reducers/auth';

// type RegisterFormProps = {
//     onSubmit: (registerForm: { email: string; nickname: string; password: string }) => void;
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

const MemberType = [{ type: '일반 회원' }, { type: '작가 회원' }, { type: '모델 회원' }, { type: '브랜드 회원' }];

// function RegisterForm({ onSubmit }: RegisterFormProps) {
function RegisterForm() {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }: any) => ({
        form: auth.register,
    }));

    const [registerForm, setRegisterForm] = useState({
        type: '일반 회원',
        email: '',
        nickname: '',
        password: '',
    });

    const { email, nickname, password } = registerForm;
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const isEveryValid = () => {
        return emailCheckRgx(email) && passwordCheckRgx(password) && password === passwordCheck;
    };

    const onChange = (e: any) => {
        const { name, value } = e.target;

        setRegisterForm({
            ...registerForm,
            [name]: value,
        });
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value,
            })
        );
    };

    const onChangePasswordCheck = useCallback(
        (e: any) => {
            setPasswordError(e.target.value !== password);
            setPasswordCheck(e.target.value);
        },
        [password]
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // VC없이 확인
        // if (!isEveryValid()) {
        //     return;
        // }
        console.log('submit : ', registerForm);
        // onSubmit(registerForm);
        setRegisterForm({
            type: '일반 회원',
            email: '',
            nickname: '',
            password: '',
        });
        setPasswordCheck('');
        // 초기화
    };

    const [selectedType, setSelectedType] = useState<string>('일반 회원');

    // const onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSelectedType(e.target.value);
    // };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    return (
        <LoginFormWrapper onSubmit={handleSubmit}>
            <RadioButtonWrapper>
                {MemberType.map((member) => (
                    <RadioButtonBox key={member.type}>
                        <RadioButton
                            id={member.type}
                            type="radio"
                            name="type"
                            value={member.type}
                            onChange={onChange}
                            checked={member.type === registerForm.type}
                        />
                        <Label htmlFor={member.type}>{member.type}</Label>
                    </RadioButtonBox>
                ))}
            </RadioButtonWrapper>
            <InputWrapper>
                <EmailWrapper>
                    <SubTitle>Email</SubTitle>
                    <LoginInput name="email" value={email} onChange={onChange} required />
                </EmailWrapper>
                <NicknameWrapper>
                    <SubTitle>Nickname</SubTitle>
                    <LoginInput name="nickname" value={nickname} onChange={onChange} required />
                </NicknameWrapper>
                <PasswordWrapper>
                    <SubTitle>Password</SubTitle>
                    <LoginInput type="password" name="password" value={password} onChange={onChange} required />
                </PasswordWrapper>
                <PasswordCheckWrapper>
                    <SubTitle>Password Check</SubTitle>
                    <LoginInput
                        type="password"
                        name="password-check"
                        value={passwordCheck}
                        onChange={onChangePasswordCheck}
                        required
                    />
                    <SubLink>{passwordError ? '비밀번호가 일치하지 않습니다' : ''}</SubLink>
                </PasswordCheckWrapper>
                <LoginButton type="submit">회원가입하기</LoginButton>
            </InputWrapper>
        </LoginFormWrapper>
    );
}

const LoginFormWrapper = styled.form`
    width: 100%;
    margin: 54px 0 0 0;
`;

const InputWrapper = styled.div`
    width: 50%;
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

const NicknameWrapper = styled.div`
    margin: 110px 0 0 0;
`;

const PasswordCheckWrapper = styled.div`
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

const SubLink = styled.p`
    color: ${({ theme }) => theme.mode.textColor};
    font-size: 18px;
    font-weight: 700;
    margin: 10px 0 0 0;
`;

const RadioButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 0 125px 0;
`;

const RadioButtonBox = styled.div`
    width: 24%;
`;

const Label = styled.label`
    display: block;
    width: 100%;
    height: 80px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.mode.mainBg};
    color: ${({ theme }) => theme.mode.textColor};
    border: 4px solid ${({ theme }) => theme.mode.borderColor};
    text-align: center;
    padding: 25px 0;
    font-weight: 600;
    cursor: pointer;
`;

const RadioButton = styled.input`
    display: none;

    &:checked + ${Label} {
        background-color: ${({ theme }) => theme.mode.containerColor};
        color: ${({ theme }) => theme.mode.buttonTextColor};
    }
`;

export default RegisterForm;
