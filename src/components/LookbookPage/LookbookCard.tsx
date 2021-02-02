import React from 'react';
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';
import { Row, Col } from 'antd';

const LookbookCard = (props: any) => {
    return (
        <LookbookCardContainer>
            <Row>
                <img src="http://placehold.it/240x240" alt="lookbookImage" />
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={18}>
                    <LookbookUserName>{props.name}</LookbookUserName>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6}>
                    <Row style={{ marginRight: '3px' }}>
                        <Col xs={24} sm={24} md={24} lg={20}>
                            <LookbookLikeCount>100</LookbookLikeCount>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={4} style={{}}>
                            <LookbookLike>
                                <BsHeart />
                            </LookbookLike>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LookbookCardContainer>
    );
};

const LookbookCardContainer = styled.div`
    cursor: pointer;
    margin: 38px 0px 0px 14px;
    color: ${({ theme }) => theme.mode.textColor};
    img {
        width: 215px;
        height: 374px;
    }
`;

const LookbookUserName = styled.div`
    margin: 5px 0 0 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
`;
const LookbookLikeCount = styled.div`
    margin: 9px 0 0 0;
    line-height: 26px;
    font-family: Noto Sans KR;
    font-weight: normal;
    font-size: 18px;
`;

const LookbookLike = styled.div`
    margin: 9px 0 0 0;
    line-height: 30px;
    font-family: Noto Sans KR;
    font-weight: normal;
    font-size: 18px;
`;

export default LookbookCard;
