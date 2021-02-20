import React from 'react'
import styled from 'styled-components';

const lookBookImg = require('../../../static/mainPageImgLookbook.png');
const snapImg = require('../../../static/mainPageImgSnap.png');

const MainPage = () => {
    return (
        <MainImgWrapper>
            <ImgWrapper>
                <LookBookMainImg>
                    <img src={lookBookImg} alt="룩북메인이미지"/>
                </LookBookMainImg>
                <SnapMainImg>
                    <img src={snapImg} alt="스냅메인이미지"/>
                </SnapMainImg>
            </ImgWrapper>
        </MainImgWrapper>
    )
}

const MainImgWrapper = styled.div`
    margin : 0 100px;
    padding : 60px 0;
    display : flex;
    justify-content : flex-end;
`

const ImgWrapper = styled.div`
    width : 80%;
    display : flex;
    justify-content : flex-end;
`

const LookBookMainImg = styled.div`
    width : 50%;

    & > img {
        width : 100%;
    }
`

const SnapMainImg = styled.div`
    width : 50%;

    & > img {
        width : 100%;
    }
`

export default MainPage;