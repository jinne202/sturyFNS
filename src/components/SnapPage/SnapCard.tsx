import React from 'react';
import styled from 'styled-components';

const SnapCard = (props: any) => {
    return (
        <SnapCardContainer>
            <img src="http://placehold.it/240x240" alt="snapImage" />
        </SnapCardContainer>
    );
};

const SnapCardContainer = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.mode.textColor};
    user-select: scale-down;
    margin-bottom: 0%;
    & > img {
        width: 100%;
        height: 100%;
    }
`;

export default SnapCard;
