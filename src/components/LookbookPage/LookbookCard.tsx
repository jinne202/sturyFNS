import React from 'react';
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';
import { Row, Col } from 'antd';

const LookbookCard = (props: any) => {
    return (
        <LookbookCardContainer>
            <Row>
                <Col span={24}>
                    <img src="http://placehold.it/240x240" alt="lookbookImage" />
                </Col>
            </Row>
            <Row>
                <Col span={12} style={{ width: '50%', position: 'absolute' }}>
                    <LookbookUserName>{props.name}</LookbookUserName>
                </Col>
                <Col span={12} style={{ position: 'absolute', left: '200px' }}>
                    <Row>
                        <Col span={12}>
                            <LookbookLikeCount>100</LookbookLikeCount>
                        </Col>
                        <Col span={12} style={{ paddingLeft: '2px' }}>
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
    margin: 0px 0px 60px 30px;
    color: ${({ theme }) => theme.mode.textColor};
    img {
        width: 220px;
        height: 375px;
    }
`;
const LookbookUserName = styled.div`
    margin: 5px 0 0 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
`;
const LookbookLikeCount = styled.div`
    margin: 9px 30px 0 0;
    line-height: 28px;
    font-family: Noto Sans KR;
    font-weight: normal;
    font-size: 18px;
`;
const LookbookLike = styled.div`
    margin: 9px 0 0 0;
    line-height: 32px;
    font-family: Noto Sans KR;
    font-weight: normal;
    font-size: 18px;
`;

export default LookbookCard;
