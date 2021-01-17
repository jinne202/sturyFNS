import React, { ReactNode, FC } from "react";
import styled from 'styled-components';

const logo = require('../../static/logo.png');

type PropTypes = {
    children: ReactNode;
};

const NavLayout: FC<PropTypes> = ({ children }) => {
    return (
        <NavWrapper>
            <Nav>
                <LeftNav>
                    <img src={logo} alt="로고"/>
                    <h1>FNS</h1>
                </LeftNav>
                <MiddleColorMode>
                    <LightButton>
                        LIGHT
                    </LightButton>
                    <DarkButton>
                        DARK
                    </DarkButton>
                </MiddleColorMode>
                <RightNav>
                    <LoginButton>LOGIN</LoginButton>
                    <RegisterButton>REGISTER</RegisterButton>
                </RightNav>
            </Nav>
            <Contents>
                {children}
            </Contents>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
    width : 100%;
    font-family: 'Noto Sans KR', sans-serif;
`

const Nav = styled.div`
    display : flex;
    margin : 0 100px;
    border-bottom : 8px solid black;
`

const LeftNav = styled.div`
    display : flex;
    padding : 36px 0 25px 0;
    width : 114px;

    & > h1 {
        font-family: 'Poppins', sans-serif;
        font-size : 36px;
        font-weight : 800;
        padding : 2px 0 0 0;
    }

    & > img {
        width : 40px;
        height : 39px;
    }
`

const MiddleColorMode = styled.div`
    display : flex;
    text-align : center;
    line-height : 22px;
    font-size : 14px;
    padding : 42px 0 25px 0;
    margin : 0 0 0 39px;
    font-weight : 700;
`

const LightButton = styled.div`
    width : 69px;
    height : 27px;
    background-color : black;
    border : 2px solid black;
    color : white;
`

const DarkButton = styled.div`
    width : 69px;
    height : 27px;
    background-color : white;
    border : 2px solid black;
`

const RightNav = styled.div`
    display : flex;
    justify-content : flex-end;
    width : 82.5%;
    padding : 45px 0 25px 0;
    font-size : 18px;
    font-family: 'Poppins', sans-serif;
`

const LoginButton = styled.div`

`

const RegisterButton = styled.div`
    margin : 0 0 0 34px;
`

const Contents = styled.div``

export default NavLayout