import React from 'react';
import styled from 'styled-components';

const SnapCard = (props: any) => {
    return (
        <div>
            <SnapCardContainer>
                <SnapThumbnail>{props.source}</SnapThumbnail>
                <SnapTitle>{props.title}</SnapTitle>
            </SnapCardContainer>
        </div>
    );
};

const SnapCardContainer = styled.div`
    width: 311px;
    border: 1px solid ${({ theme }) => theme.mode.borderColor};
`;

const SnapTitle = styled.h2`
    height: 53px;
`;

const SnapThumbnail = styled.div`
    height: 250px;
    background: #eeeeee;
`;

export default SnapCard;
