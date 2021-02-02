import React from 'react';
import NavLayout from '../components/NavLayout';
import LeftMenu from '../components/LeftMenu';
import styled from 'styled-components';
import SnapCard from '../components/SnapPage/SnapCard';
import { Row, Col, List } from 'antd';

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
            {/* <Row style={{ marginBottom: '100px' }}>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <LeftMenu />
                </Col>

                <Col xs={24} sm={24} md={24} lg={14} style={{ margin: '98px 0px 100px 20px' }}>
                    <List
                        grid={{
                            xs: 1,
                            sm: 2,
                            md: 3,
                            lg: 3,
                            xl: 3,
                            xxl: 3,
                        }}
                        dataSource={snaps}
                        renderItem={(item) => (
                            <List.Item style={{ marginBottom: '-10px' }}>
                                <SnapCard key={item.id} {...item} />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row> */}
            <LeftMenu />
            {snaps.map((snap) => (
                <SnapCard key={snap.id} {...snap} />
            ))}
        </NavLayout>
    );
}
