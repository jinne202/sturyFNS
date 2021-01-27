import React from 'react';
import styled from 'styled-components';

const LookbookCard = (props: any) => {
    return (
        <LookbookCardContainer>
            <img src="http://placehold.it/240x240" alt="lookbookImage" />
            <LookbookUserName>{props.name}</LookbookUserName>
        </LookbookCardContainer>
    );
};

const LookbookCardContainer = styled.div`
    cursor: pointer;
    margin: 0px 0px 78px 14px;
    color: ${({ theme }) => theme.mode.textColor};
    img {
        width: 200px;
        height: 374px;
    }
`;
const LookbookUserName = styled.h2`
    height: 20px;
`;

export default LookbookCard;
