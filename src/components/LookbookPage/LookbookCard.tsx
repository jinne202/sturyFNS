import React from 'react';
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';

const LookbookCard = (props: any) => {
    return (
        <LookbookCardContainer>
            <img src="http://placehold.it/240x240" alt="lookbookImage" />
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
    height: 0;
    margin-bottom: 450px;
    user-select: scale-down;
    & > img {
        width: 100%;
        height: 374px;
    }
`;

const LookbookTitle = styled.div`
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
        line-height: 24px;
    }
    svg {
        margin-left: 8px;
        margin-right: 6px;
        stroke: ${({ theme }) => theme.mode.textColor};
    }
`;

export default LookbookCard;
