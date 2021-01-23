import React, { ReactNode, FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import DarkMode from './DarkMode';

const logo = require('../../static/logo.png');

type PropTypes = {
    children: ReactNode;
};

const NavLayout: FC<PropTypes> = ({ children }) => {
    return (
        <NavWrapper>
            <Nav>
                <Link href="/">
                    <LeftNav>
                        <img src={logo} alt="로고" />
                        <h1>FNS</h1>
                    </LeftNav>
                </Link>
                <DarkMode />
                <RightNav>
                    <Link href="/login">
                        <LoginButton>LOGIN</LoginButton>
                    </Link>
                    <Link href="/register">
                    <RegisterButton>REGISTER</RegisterButton>
                    </Link>
                </RightNav>
            </Nav>
            <Contents>{children}</Contents>
        </NavWrapper>
    );
};

const NavWrapper = styled.div`
    width: 100%;
    font-family: 'Noto Sans KR', sans-serif;
`;

const Nav = styled.div`
    display: flex;
    margin: 0 100px;
    border-bottom: 8px solid ${({ theme }) => theme.mode.borderColor};
`;

const LeftNav = styled.div`
    display: flex;
    padding: 36px 0 25px 0;
    width: 114px;
    & > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 36px;
        font-weight: 800;
        padding: 2px 0 0 0;
        color: ${({ theme }) => theme.mode.textColor};
    }
    & > img {
        width: 40px;
        height: 39px;
    }
`;

const RightNav = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 82.5%;
    padding: 45px 0 25px 0;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.mode.textColor};
`;

const LoginButton = styled.div`
    cursor : pointer;
`;

const RegisterButton = styled.div`
    margin: 0 0 0 34px;
    cursor : pointer;
`;

const Contents = styled.div``;

export default NavLayout;