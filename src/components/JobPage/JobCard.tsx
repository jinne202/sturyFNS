import React from 'react';
import styled from 'styled-components';

const JobCard = (props: any) => {
    return (
        <div>
            <JobContainer>
                <JobThumbnail>{props.source}</JobThumbnail>
                <JobUserTitle>{props.title}</JobUserTitle>
            </JobContainer>
        </div>
    );
};

const JobContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.mode.borderColor};
    width: 462px;
    margin: 2px 0 0 2px;
`;

const JobUserTitle = styled.h2`
    height: 53px;
`;

const JobThumbnail = styled.div`
    height: 157px;
    background: #eeeeee;
`;

export default JobCard;
