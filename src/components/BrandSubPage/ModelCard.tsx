import React from 'react';
import styled from 'styled-components';

const ModelCard = (props : any) => {
    return (
        <ModelCardContainer>
            <ModelImage></ModelImage>
            <ModelName>{props.modelName}</ModelName>
            <ModelSpec>
                <ul>
                    <li><span>Height</span>{props.height}</li>
                    <li><span>Weight</span>{props.weight}</li>
                    <li><span>Bust</span>{props.bust}</li>
                    <li><span>Waist</span>{props.waist}</li>
                    <li><span>Hip</span>{props.hip}</li>
                    <li><span>Shoes</span>{props.shoes}</li>
                </ul>
            </ModelSpec>
            <ProfileBtn>프로필 보기</ProfileBtn>
        </ModelCardContainer>
    )
}

const ModelCardContainer = styled.div`
    width : 22%;
    height : 800px;
    border : 4px solid ${({ theme }) => theme.mode.borderColor};
`

const ModelImage = styled.div`
    width : 160px;
    height : 160px;
    border-radius : 80px;
    border : 4px solid ${({ theme }) => theme.mode.borderColor};
    margin : 55px auto 0;
`

const ModelName = styled.p`
    font-size : 36px;
    font-weight : 800;
    line-height : -3%;
    text-align : center;
    margin : 50px 0 0 0;
`

const ModelSpec = styled.div`
    font-size : 18px;
    margin : 50px 0 0 0;

    & > ul {
        margin : 0 0 0 90px;
    }

    & > ul > li {
        line-height : 35px;
        margin : 0 0 11px 0;
    }

    & > ul > li > span {
        font-weight : 700;
        width : 140px;
        display : inline-block;
    }
`

const ProfileBtn = styled.button`
    cursor : pointer;
    width : 250px;
    height : 55px;
    background-color : ${({ theme }) => theme.mode.containerColor};
    color : ${({ theme }) => theme.mode.buttonTextColor};
    border-radius : 70px;
    font-size : 20px;
    font-weight : 700;
    border : 0;
    margin : 50px 60px 0;

    &:focus {
        outline : none;
    }
`

export default ModelCard;