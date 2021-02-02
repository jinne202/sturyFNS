import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

// <SnapCardContainer>
//     <img src="http://via.placeholder.com/300.png/09f/fff" alt="snapImage" />
{
    /* <Row>
                <Col
                    xs={{ span: 5, offset: 1 }}
                    sm={{ span: 6, offset: 2 }}
                    md={{ span: 6, offset: 2 }}
                    lg={{ span: 6, offset: 2 }}
                    xl={{ span: 6, offset: 2 }}
                    xxl={{ span: 6, offset: 2 }}
                >
                    <img src="http://placehold.it/240x240" alt="lookbookImage" />
                </Col>
            </Row> */
}

const SnapCard = (props: any) => {
    return (
        <SnapCardContainer>
            <SnapCardGrid>
                <SnapCardPadded>
                    <Centered src="http://via.placeholder.com/816x481" />
                </SnapCardPadded>
                <SnapCardRendered>
                    <Centered src="http://via.placeholder.com/816x481" />
                </SnapCardRendered>

                {/* <SnapCardPadded>
                    <Centered src="http://via.placeholder.com/816x481" />
                </SnapCardPadded>

                <SnapCardPadded>
                    <Centered src="http://via.placeholder.com/604x611" />
                </SnapCardPadded>

                <SnapCardPadded>
                    <Centered src="http://via.placeholder.com/940x667" />
                </SnapCardPadded> */}
            </SnapCardGrid>
        </SnapCardContainer>
    );
};

const SnapCardContainer = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.mode.textColor};
`;

const SnapCardGrid = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const SnapCardWrapper = styled.div`
    display: inline-block;
    width: calc(100% / 3);
    margin: 2px;
    border: 1px solid red;
`;

const SnapCardPadded = styled(SnapCardWrapper)`
    height: 0;
    position: relative;
    overflow: hidden;
    padding-bottom: 56.25% / 4;
`;

const SnapCardRendered = styled(SnapCardWrapper)`
    margin-left: auto;
    width: calc(200% / 3) !important;
    height: 0;
    position: relative;
    overflow: hidden;
    padding-bottom: 56.25% / 4;
    border: 1px solid blue !important;
`;

const SnapCardImage = styled.img`
    width: 100%;
    height: auto;
`;

const Centered = styled(SnapCardImage)`
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    margin: auto;
`;

export default SnapCard;
