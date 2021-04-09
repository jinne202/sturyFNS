import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const JobCard = () => {
    return (
        <JobCardContainer>
            <Link href={`/viewjobcard/${124124}`}>
                <a>
                    <img src="http://placehold.it/240x240" alt="jobImage" />
                </a>
            </Link>
        </JobCardContainer>
    );
};

const JobCardContainer = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.mode.textColor};
    user-select: scale-down;
    margin-bottom: -50%;
    & > a > img {
        width: 100%;
        height: 50%;
    }
`;

export default JobCard;
