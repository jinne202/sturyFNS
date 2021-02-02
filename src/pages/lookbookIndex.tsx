import React from 'react';
import NavLayout from '../components/NavLayout';
import LeftMenu from '../components/LeftMenu';
import styled from 'styled-components';
import LookbookCard from '../components/LookbookPage/LookbookCard';
import { Row, Col, List } from 'antd';

const lookbooks = [
    { id: 1, name: 'name1', source: 'blue' },
    { id: 2, name: 'name2', source: 'red' },
    { id: 3, name: 'name3', source: 'green' },
    { id: 4, name: 'name4', source: 'white' },
    { id: 5, name: 'name5', source: 'black' },
    { id: 6, name: 'name6', source: 'gray' },
    { id: 7, name: 'name7', source: 'yellow' },
    { id: 8, name: 'name8', source: 'orange' },
];

export default function LookBookIndex() {
    return (
        <NavLayout>
            <Row style={{ marginBottom: '100px' }}>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <div>
                        <LeftMenu />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={14} style={{ margin: '98px 0px 100px 0' }}>
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
