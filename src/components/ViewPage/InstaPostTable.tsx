import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

export interface InstaPostTableProps {}

const InstaPostTable: React.SFC<InstaPostTableProps> = (props: any) => {
    return (
        <InstaPostTableContainer>
            <button>
                <AiOutlineArrowLeft />
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
                <AiOutlineArrowRight />
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
        margin-top: auto;
        margin-bottom: auto;
        height: 50px;
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
