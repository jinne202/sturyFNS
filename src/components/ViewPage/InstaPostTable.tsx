import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export interface InstaPostTableProps {}

const InstaPostTable: React.SFC<InstaPostTableProps> = (props: any) => {
    return (
        <InstaPostTableContainer>
            <button>
                <BsChevronLeft style={{ width: '75px', height: '100px' }} />
            </button>
            <PostWrapper>
                <Link href={`/instagram/${1}`}>
                    <a>
                        <img src="http://placehold.it/240x240" alt="snapImage" />
                    </a>
                </Link>
                <Link href={`/instagram/${1}`}>
                    <a>
                        <img src="http://placehold.it/240x240" alt="snapImage" />
                    </a>
                </Link>
                <Link href={`/instagram/${1}`}>
                    <a>
                        <img src="http://placehold.it/240x240" alt="snapImage" />
                    </a>
                </Link>
                <Link href={`/instagram/${1}`}>
                    <a>
                        <img src="http://placehold.it/240x240" alt="snapImage" />
                    </a>
                </Link>
            </PostWrapper>
            <button>
                <BsChevronRight style={{ width: '75px', height: '100px' }} />
            </button>
        </InstaPostTableContainer>
    );
};

const InstaPostTableContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.mode.textColor};

    & > button {
        background-color: transparent;
        border: transparent;
        margin-top: auto;
        margin-bottom: auto;
        height: 95px;
    }
`;

const PostWrapper = styled(InstaPostTableContainer)`
    display: grid;
    grid-template-columns: repeat(4, 0fr);
    justify-content: center;
    padding: 0 40px 0 40px;
    & > a > img {
        width: 100%/4;
        height: 100%;
    }
`;

export default InstaPostTable;
