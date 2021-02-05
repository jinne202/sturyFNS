// import React from 'react';
// import styled from 'styled-components';
// import { BsHeart } from 'react-icons/bs';
// import { Row, Col } from 'antd';

// const LookbookCard = (props: any) => {
//     return (
//         <LookbookCardContainer>
//             <Row>
//                 <Col span={24}>
//                     <img src="http://placehold.it/240x240" alt="lookbookImage" />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col span={12} style={{ width: '50%', position: 'absolute' }}>
//                     <LookbookUserName>{props.name}</LookbookUserName>
//                 </Col>
//                 <Col span={12} style={{ position: 'absolute', left: '200px' }}>
//                     <Row>
//                         <Col span={12}>
//                             <LookbookLikeCount>100</LookbookLikeCount>
//                         </Col>
//                         <Col span={12} style={{ paddingLeft: '2px' }}>
//                             <LookbookLike>
//                                 <BsHeart />
//                             </LookbookLike>
//                         </Col>
//                     </Row>
//                 </Col>
//             </Row>
//         </LookbookCardContainer>
//     );
// };

// const LookbookCardContainer = styled.div`
//     cursor: pointer;
//     margin: 0px 0px 60px 30px;
//     color: ${({ theme }) => theme.mode.textColor};
//     img {
//         width: 220px;
//         height: 375px;
//     }
// `;
// const LookbookUserName = styled.div`
//     margin: 5px 0 0 0;
//     font-weight: bold;
//     font-size: 24px;
//     line-height: 32px;
// `;
// const LookbookLikeCount = styled.div`
//     margin: 9px 30px 0 0;
//     line-height: 28px;
//     font-family: Noto Sans KR;
//     font-weight: normal;
//     font-size: 18px;
// `;
// const LookbookLike = styled.div`
//     margin: 9px 0 0 0;
//     line-height: 32px;
//     font-family: Noto Sans KR;
//     font-weight: normal;
//     font-size: 18px;
// `;

// export default LookbookCard;

import React from 'react';
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';

const LookbookCard = (props: any) => {
    return (
        <LookbookCardContainer>
            <img src="http://placehold.it/240x240" alt="lookbookImage" style={{ width: '95%', height: '374px' }} />
            <LookbookTitle>
                <LookbookUserName>{props.name}</LookbookUserName>
                <LookbookLike>
                    <p>
                        100
                        <div style={{ marginTop: '2px' }}>
                            <BsHeart />
                        </div>
                    </p>
                </LookbookLike>
            </LookbookTitle>
        </LookbookCardContainer>
    );
};

const LookbookCardContainer = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.mode.textColor};
    width: 100%;
    height: 0;
    margin-bottom: 450px;
    user-select: scale-down;
    box-shadow: 0 0 22px rgba(0, 0, 0, 0.5);
`;

const LookbookTitle = styled(LookbookCardContainer)`
    height: 35px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: flex-end;
`;

const LookbookUserName = styled.h2`
    margin: 5px 0 0 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
`;

const LookbookLike = styled.h2`
    display: grid;
    grid-template-rows: 35px;
    grid-template-columns: 101px, 26px;
    margin: 9px 0 0 0;

    p {
        display: flex;
        justify-content: flex-end;
        font-family: Noto Sans KR;
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
    }
    svg {
        margin-left: 8px;
        margin-right: 12px;
        stroke: ${({ theme }) => theme.mode.textColor};
    }
`;

export default LookbookCard;
