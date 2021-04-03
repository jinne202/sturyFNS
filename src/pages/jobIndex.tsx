import React from 'react';
import NavLayout from '../components/NavLayout';
import LeftMenu from '../components/LeftMenu';
import styled from 'styled-components';
import JobCard from '../components/JobPage/JobCard';

const jobs = [
    { id: 1, title: 'title1', source: 'blue' },
    { id: 2, title: 'title2', source: 'red' },
    { id: 3, title: 'title3', source: 'green' },
    { id: 4, title: 'title4', source: 'white' },
    { id: 5, title: 'title5', source: 'black' },
    { id: 6, title: 'title6', source: 'gray' },
    { id: 7, title: 'title7', source: 'black' },
    { id: 8, title: 'title8', source: 'gray' },
    { id: 9, title: 'title9', source: 'black' },
    { id: 10, title: 'title10', source: 'gray' },
];

export default function JobIndex() {
    return (
        <NavLayout>
            <LeftMenu />
            <JobWrapper>
                <JobThumbListWrapper>
                    {jobs.map((job) => (
                        <JobCard key={job.id} {...job} />
                    ))}
                </JobThumbListWrapper>
            </JobWrapper>
        </NavLayout>
    );
}

const JobWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding: 40px 0 0 0;
    margin: 0 100px 0 0;
    margin-left: auto;
    width: 60%;
`;

const JobThumbListWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5px;
    row-gap: 5px;
`;
