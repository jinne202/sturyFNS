import React from 'react';
import styled from 'styled-components';

const JobCard = (props: any) => {
    return (
        <JobCardContainer>
            <img src="http://placehold.it/240x240" alt="jobImage" />
        </JobCardContainer>
    );
};

const JobCardContainer = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.mode.textColor};
    user-select: scale-down;
    margin-bottom: -50%;
    & > img {
        width: 100%;
        height: 50%;
    }
`;

export default JobCard;
