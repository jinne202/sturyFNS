<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';

const SnapCard = () => {
    return (
        <SnapCardContainer>
            <img src="http://via.placeholder.com/300.png/09f/fff" alt="snapImage" />
            {/* <SnapTitle>{props.title}</SnapTitle> */}
        </SnapCardContainer>
    );
};

const SnapCardContainer = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.mode.textColor};
    img {
        width: 100%;
        height: 100%;
    }
`;

export default SnapCard;
=======
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
>>>>>>> 70db809dabf6e696e82524ff1f96dc3964bde583
