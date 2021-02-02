import React from 'react';
import NavLayout from '../components/NavLayout';
import LeftMenu from '../components/LeftMenu';
import styled from 'styled-components';
import JobCard from '../components/JobPage/JobCard';
import { Row, Col, List } from 'antd';

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
        // <NavLayout>
        //     <LeftMenu />
        //     <JobWrapper>
        //         <JobThumbListWrapper>
        //             <JobThumbList>
        //                 {jobs.map((job) => (
        //                     <JobCard key={job.id} {...job} />
        //                 ))}
        //             </JobThumbList>
        //         </JobThumbListWrapper>
        //     </JobWrapper>
        // </NavLayout>
        <NavLayout>
            <Row style={{ marginBottom: '100px' }}>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <div>
                        <LeftMenu />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={14} style={{ margin: '98px 0px 100px 25px' }}>
                    <List
                        grid={{
                            gutter: 0,
                            xs: 2,
                            sm: 3,
                            md: 4,
                            lg: 4,
                            xl: 4,
                            xxl: 4,
                        }}
                        dataSource={lookbooks}
                        renderItem={(item) => (
                            <List.Item>
                                <LookbookCard key={item.id} {...item} />
                            </List.Item>
                        )}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={2}></Col>
            </Row>
        </NavLayout>
    );
}

const JobWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding: 78px 0px 82px 0px;
    margin: 0 100px 0 0;
    margin-left: auto;
    width: 70%;
`;

const JobThumbListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(388px, 1fr));
    grid-gap: 1rem;
`;

const JobThumbList = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
`;
