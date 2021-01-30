import React from 'react';
import styled from 'styled-components';

const arrowIcon = <svg width="20" height="20" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.7751 17.7501H0.25V14.2501H25.7751L14.7626 3.23757L17.2374 0.762695L32.4749 16.0001L17.2374 31.2376L14.7626 28.7627L25.7751 17.7501Z"/>
</svg>

const ApplyTable = (props : any) => {
    return (
        <ApplyListContainer>
            <ApplyTitle>{props.title}</ApplyTitle>
            <ApplyBrand>{props.brand}<Icon>{arrowIcon}</Icon></ApplyBrand>
        </ApplyListContainer>
    )
}

const Icon = styled.div`
    position : absolute;
    right : -40px;
    top : 18px;
    transition: 0.5s ease all;
    -moz-transition: 0.5s ease all;
    -webkit-transition: 0.5s ease all;
    opacity : 0;

    & > svg > path {
        fill : ${({ theme }) => theme.mode.borderColor};
    }
`

const ApplyTitle = styled.p`
    padding : 18px 0 0 0;
    margin : 0 0 0 70px;
    width : 65%;
    color : ${({ theme }) => theme.mode.textColor};
`

const ApplyBrand = styled.p`
    padding : 18px 0 0 0;
    color : ${({ theme }) => theme.mode.textColor};
    position : relative;
`

const ApplyListContainer = styled.div`
    border-bottom : 4px solid ${({ theme }) => theme.mode.borderColor};
    font-size : 18px;
    font-weight : 700;
    display : flex;
    height : 60px;
    cursor : pointer;

    &:hover {
        & > ${ApplyBrand} > ${Icon} {
            opacity : 100%;
        }
    }
`

export default ApplyTable;