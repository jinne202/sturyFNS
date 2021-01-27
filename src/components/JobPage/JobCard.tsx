import React from 'react';
import styled from 'styled-components';

const JobCard = (props: any) => {
    return (
        <JobCardContainer>
            <img src="http://via.placeholder.com/300.png/09f/fff" alt="JobImage" />
            <JobTitle>{props.title}</JobTitle>
        </JobCardContainer>
    );
};

const JobCardContainer = styled.div`
    cursor: pointer;
    width: 378px;
    margin: 2px;
    color: ${({ theme }) => theme.mode.textColor};

    img {
        width: 378px;
        height: 161px;
    }
`;

const JobTitle = styled.h2`
    height: 20px;
`;

export default JobCard;
