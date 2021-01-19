import React from 'react'
import styled from 'styled-components';

const lookBookImg = require('../../../static/mainPageImgLookbook.png');
const snapImg = require('../../../static/mainPageImgSnap.png');

const MainPage = () => {
    return (
        <MainImgWrapper>
            <LookBookMainImg>
                <img src={lookBookImg} alt="룩북메인이미지"/>
            </LookBookMainImg>
            <SnapMainImg>
                <img src={snapImg} alt="스냅메인이미지"/>
            </SnapMainImg>
        </MainImgWrapper>
    )
}

const MainImgWrapper = styled.div`
    display : flex;
    justify-content : flex-end;
    margin : 0 100px;
    padding : 60px 0;
`

const LookBookMainImg = styled.div`
`

const SnapMainImg = styled.div`
`

export default MainPage;