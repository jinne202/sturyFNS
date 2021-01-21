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
        <div>
            <NavLayout>
                <LeftMenu />
                <JobThumbListWrapper>
                    <JobCardWrapper>
                        {jobs.map((job) => (
                            <JobCard key={job.id} {...job} />
                        ))}
                    </JobCardWrapper>
                </JobThumbListWrapper>
            </NavLayout>
        </div>
    );
}

const JobThumbListWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 100px;
    padding: 60px 0;
    width: 1080px;
    margin-left: auto;
`;

const JobCardWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
`;
