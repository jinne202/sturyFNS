import React from 'react';
import styled from 'styled-components';

const JobCard = () => {
    return (
        <JobCardContainer>
            <img src="http://via.placeholder.com/300.png/09f/fff" alt="JobImage" />
            {/* <JobTitle>{props.title}</JobTitle> */}
        </JobCardContainer>
    );
};

const JobCardContainer = styled.div`
    cursor: pointer;
    margin: 0px 0px 17px 15px;
    color: ${({ theme }) => theme.mode.textColor};
    img {
        width: 444px;
        height: 200px;
    }
`;

export default JobCard;
