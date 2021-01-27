import React from 'react';
import styled from 'styled-components';

const LookbookCard = (props: any) => {
    return (
        <LookbookCardContainer>
            <div>
                <img src="http://placehold.it/240x240" alt="lookbookImage" />
                <LookbookUserName>{props.name}</LookbookUserName>
            </div>
        </LookbookCardContainer>
    );
};

const LookbookCardContainer = styled.div`
    cursor: pointer;
    div {
        flex: 0 1 calc(100% / 4);
    }
    margin: 0px 0px 38px 10px;
    color: ${({ theme }) => theme.mode.textColor};

    img {
        height: 374px;
        width: 100%;
    }

    @media only screen and (min-width: 240px) {
        div {
            flex: 0 1 calc(100% / 2);
        }
    }

    @media only screen and (min-width: 480px) {
        div {
            flex: 0 1 calc(100% / 3);
        }
    }

    @media only screen and (min-width: 720px) {
        div {
            flex: 0 1 calc(100% / 4);
        }
    }

    @media only screen and (min-width: 960px) {
        div {
            flex: 0 1 calc(100% / 5);
        }
    }

    @media only screen and (min-width: 1200px) {
        div {
            flex: 0 1 calc(100% / 6);
        }
    }

    @media only screen and (min-width: 1440px) {
        div {
            flex: 0 1 calc(100% / 7);
        }
    }

    @media only screen and (min-width: 1680px) {
        div {
            flex: 0 1 calc(100% / 8);
        }
    }

    @media only screen and (min-width: 1920px) {
        div {
            flex: 0 1 calc(100% / 9);
        }
    }
`;
/* width: 187px;
        height: 374px; */

const LookbookUserName = styled.h2`
    /* height: 20px; */
`;

export default LookbookCard;
