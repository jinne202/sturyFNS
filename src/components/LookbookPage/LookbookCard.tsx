import React from 'react';
import styled from 'styled-components';

const LookbookCard = (props: any) => {
    return (
        <LookbookCardContainer>
            <img src="http://via.placeholder.com/300.png/09f/fff" alt="lookbookImage" />
            <LookbookUserName>{props.name}</LookbookUserName>
        </LookbookCardContainer>
    );
};

const LookbookCardContainer = styled.div`
    cursor: pointer;
    width: 187px;
    margin: 2px;
    color: ${({ theme }) => theme.mode.textColor};

    img {
        width: 187px;
        height: 374px;
    }
`;

const LookbookUserName = styled.h2`
    height: 20px;
`;

export default LookbookCard;
