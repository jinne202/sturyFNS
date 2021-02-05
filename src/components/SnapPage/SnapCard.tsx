// import { Layout, Menu } from 'antd';
// import styled from 'styled-components';

// const SnapCard = () => {
//     return (
//         <SnapCardGrid>
//             <SnapCardRendered>
//                 <Centered src="http://via.placeholder.com/816x481" />
//             </SnapCardRendered>
//         </SnapCardGrid>
//     );
// };

// export default SnapCard;

// const SnapCardGrid = styled.div`
//     display: flex;
//     /* justify-content: space-between; */
//     flex-wrap: wrap;
// `;

// const SnapCardWrapper = styled.div`
//     display: inline-block;
//     /* width: calc(100% / 3); */
//     /* margin: 100px; */
//     border: 1px solid red;
// `;

// // const SnapCardPadded = styled(SnapCardWrapper)`
// //     height: 0;
// //     position: relative;
// //     overflow: hidden;
// //     padding-bottom: 56.25% / 4;
// // `;

// const SnapCardRendered = styled.div`
//     display: inline-block;
//     margin: 50px;
//     margin-left: auto;
//     width: calc(200% / 3) !important;
//     height: auto;
//     position: relative;
//     overflow: hidden;
//     padding-bottom: 56.25% / 4;
//     border: 1px solid blue !important;
// `;

// const SnapCardImage = styled.img`
//     width: 100%;
//     height: auto;
// `;

// const Centered = styled(SnapCardImage)`
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     right: -50%;
//     bottom: -50%;
//     margin: auto;
// `;

import React from 'react';
import styled from 'styled-components';

const LookbookCard = (props: any) => {
    return (
        <LookbookCardContainer>
            <img src="http://placehold.it/240x240" alt="lookbookImage" />
            <LookbookTitle>
                <LookbookUserName>{props.name}</LookbookUserName>
                <LookbookLike>
                    <p>
                        100
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="24 / basic / heart">
                                <path
                                    id="icon"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.5532 2.00002C15.1056 2 14.1724 2.17246 13.1027 2.69607C12.7066 2.88993 12.335 3.12339 11.99 3.39576C11.6582 3.13866 11.3015 2.91592 10.9218 2.72813C9.83132 2.18878 8.85028 2 7.45455 2C3.71644 2 1 5.09727 1 9.11988C1 12.1578 2.69383 15.0923 5.84884 17.9299C7.50489 19.4193 9.61932 20.8933 11.1336 21.6775L12 22.1261L12.8664 21.6775C14.3807 20.8933 16.4951 19.4193 18.1512 17.9299C21.3062 15.0923 23 12.1578 23 9.11988C23 5.13984 20.2579 2.01536 16.5532 2.00002ZM21 9.11988C21 11.4999 19.5862 13.9493 16.8137 16.4429C15.3022 17.8023 13.359 19.1609 12 19.8737C10.641 19.1609 8.69782 17.8023 7.18628 16.4429C4.41382 13.9493 3 11.4999 3 9.11988C3 6.14772 4.88364 4 7.45455 4C8.56428 4 9.24813 4.13159 10.0351 4.52084C10.5 4.75077 10.9109 5.05437 11.2665 5.43377L12.0023 6.2187L12.7315 5.42755C13.0951 5.03295 13.512 4.72244 13.9819 4.49243C14.7459 4.11849 15.387 4 16.5491 4.00001C19.0882 4.01053 21 6.18896 21 9.11988Z"
                                    fill="black"
                                />
                            </g>
                        </svg>
                    </p>
                </LookbookLike>
            </LookbookTitle>
        </LookbookCardContainer>
    );
};

const LookbookCardContainer = styled.div`
    cursor: pointer;
    background-color: #eee;
    color: ${({ theme }) => theme.mode.textColor};
    /* img {
        width: 215px;
        height: 374px;
    } */
`;

const LookbookTitle = styled.h2`
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
        stroke: ${({ theme }) => theme.mode.textColor};
    }
`;

export default LookbookCard;
