// import { Provider } from "react-redux";
// import { store } from "../redux";
import type { AppProps /*, AppContext */ } from 'next/app';
import GlobalStyles from '../styles/global-styles';
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
                <GlobalStyles/>
                <Component {...pageProps} />
        </>
    );
}

export default MyApp;