import React from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';

import {lightModeRequest, darkModeRequest} from '../reducers/layoutReducer';

const DarkMode = () => {

    const dispatch = useDispatch();

    const handleLightTheme = () => {
        dispatch(lightModeRequest())
    }

    const handleDarkTheme = () => {
        dispatch(darkModeRequest())
    }

    return (
        <MiddleColorMode>
            <LightButton onClick={handleLightTheme}>
                LIGHT
            </LightButton>
            <DarkButton onClick={handleDarkTheme}>
                DARK
            </DarkButton>
        </MiddleColorMode>
    )
}

const MiddleColorMode = styled.div`
    display : flex;
    text-align : center;
    line-height : 22px;
    font-size : 14px;
    padding : 42px 0 25px 0;
    margin : 0 0 0 39px;
    font-weight : 700;
    font-family: 'Noto Sans KR', sans-serif;
`

const LightButton = styled.div`
    width : 69px;
    height : 27px;
    background-color : black;
    border-width : 2px;
    border-color : ${({ theme }) => theme.mode.borderColor};
    border-style : solid;
    color : white;
    cursor : pointer;
`

const DarkButton = styled.div`
    width : 69px;
    height : 27px;
    background-color : white;
    border-width : 2px;
    border-style : solid;
    border-color : ${({ theme }) => theme.mode.borderColor};
    cursor : pointer;
`

export default DarkMode;