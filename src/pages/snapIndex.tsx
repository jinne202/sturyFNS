import React from 'react';
import NavLayout from '../components/NavLayout';
import LeftMenu from '../components/LeftMenu';
import styled from 'styled-components';
import SnapCard from '../components/SnapPage/SnapCard';
import { Row, Col, Divider } from 'antd';
import { List, Card } from 'antd';

const snaps = [
    { id: 1, title: 'title1', source: 'blue' },
    { id: 2, title: 'title2', source: 'red' },
    { id: 3, title: 'title3', source: 'green' },
    { id: 4, title: 'title4', source: 'white' },
    { id: 5, title: 'title5', source: 'black' },
    { id: 6, title: 'title6', source: 'gray' },
    { id: 7, title: 'title7', source: 'white' },
    { id: 8, title: 'title8', source: 'black' },
    { id: 9, title: 'title9', source: 'gray' },
];

export default function SnapIndex() {
    return (
        <NavLayout>
            <Row>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <LeftMenu />
                </Col>
                <Col xs={24} sm={24} md={24} lg={14} style={{ margin: '98px 0px 0px 0px' }}>
                    <List
                        grid={{
                            gutter: 0,
                            xs: 1,
                            sm: 2,
                            md: 3,
                            lg: 3,
                            xl: 3,
                            // xxl: 3,
                        }}
                        dataSource={snaps}
                        renderItem={(item) => (
                            <List.Item style={{ marginBottom: '0px' }}>
                                <SnapCard key={item.id} {...item} />
                            </List.Item>
                        )}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={2}></Col>
            </Row>
        </NavLayout>
    );
}

// const SnapWrapper = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: flex-end;
//     padding: 78px 0 0 0;
//     margin: 0 100px 64px 0;
//     margin-left: auto;
//     width: 70%;
// `;

// const SnapThumbListWrapper = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//     grid-gap: 1rem;
// `;

// const SnapThumbList = styled.div`
//     display: flex;
//     flex-direction: row-reverse;
//     flex-wrap: wrap-reverse;
// `;
