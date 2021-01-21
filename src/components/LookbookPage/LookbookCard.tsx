import React from 'react';
import styled from 'styled-components';

const LookbookCard = (props: any) => {
    return (
        <div>
            <LookbookContainer>
                <LookbookThumbnail>{props.source}</LookbookThumbnail>
                <LookbookUserName>{props.name}</LookbookUserName>
            </LookbookContainer>
        </div>
    );
};

const LookbookContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.mode.borderColor};
    width: 231px;
    margin: 2px 0 0 2px;
`;

const LookbookUserName = styled.h2`
    height: 53px;
`;

const LookbookThumbnail = styled.div`
    height: 313px;
    background: #eeeeee;
`;

export default LookbookCard;
