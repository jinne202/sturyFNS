import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const SnapCard = (props: any) => {
    return (
        <SnapCardContainer>
            <Link href={`/viewsnapcard/${124124}`}>
                <a>
                    <img src="http://placehold.it/240x240" alt="snapImage" />
                </a>
            </Link>
        </SnapCardContainer>
    );
};

const SnapCardContainer = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.mode.textColor};
    user-select: scale-down;
    margin-bottom: 0%;
    & > a > img {
        width: 100%;
        height: 100%;
    }
`;

export default SnapCard;
