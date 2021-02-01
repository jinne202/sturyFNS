import React from 'react';
import styled from 'styled-components';

const MyPageCard = (props : any) => {
    return (
        <MyPageCardContainer>
            {props.img}
            <Title>{props.title}</Title>
        </MyPageCardContainer>
    )
}

const MyPageCardContainer = styled.div`
    background-color : #eee;
    height : 400px;
`

const Title = styled.div`

`

export default MyPageCard;