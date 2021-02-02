import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const JobCard = (props: any) => {
    return (
        <JobCardContainer>
            <Row style={{ width: '100%' }}>
                <img src="http://placehold.it/240x240" alt="jobImage" />
            </Row>
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
