import React from 'react';
import styled from 'styled-components';

const SnapCard = () => {
    return (
        <SnapCardContainer>
            <img src="http://via.placeholder.com/300.png/09f/fff" alt="snapImage" />
            {/* <SnapTitle>{props.title}</SnapTitle> */}
        </SnapCardContainer>
    );
};

const SnapCardContainer = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.mode.textColor};
    img {
        width: 100%;
        height: 100%;
    }
`;

export default SnapCard;
