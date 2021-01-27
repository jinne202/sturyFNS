import React from 'react';
import styled from 'styled-components';

const SnapCard = (props: any) => {
    return (
        <SnapCardContainer>
            <img src="http://via.placeholder.com/300.png/09f/fff" alt="snapImage" />
            <SnapTitle>{props.title}</SnapTitle>
        </SnapCardContainer>
    );
};

const SnapCardContainer = styled.div`
    cursor: pointer;

    color: ${({ theme }) => theme.mode.textColor};

    img {
        width: 252px;
    }
`;

const SnapTitle = styled.h2`
    height: 20px;
`;

export default SnapCard;
