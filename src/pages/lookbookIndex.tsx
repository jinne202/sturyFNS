import React from 'react';
import NavLayout from '../components/NavLayout';
import LeftMenu from '../components/LeftMenu';
import styled from 'styled-components';
import LookbookCard from '../components/LookbookPage/LookbookCard';

const lookbooks = [
    { id: 1, name: 'name1', source: 'blue' },
    { id: 2, name: 'name2', source: 'red' },
    { id: 3, name: 'name3', source: 'green' },
    { id: 4, name: 'name4', source: 'white' },
    { id: 5, name: 'name5', source: 'black' },
    { id: 6, name: 'name6', source: 'gray' },
    { id: 7, name: 'name7', source: 'yellow' },
    { id: 8, name: 'name8', source: 'orange' },
];

export default function LookBookIndex() {
    return (
        <NavLayout>
            <LeftMenu />
            {/* <LookbookWrapper>
                <LookbookThumbListWrapper>
                    <LookbookThumbList>
                        {lookbooks.map((lookbook) => (
                            <LookbookCard key={lookbook.id} {...lookbook} />
                        ))}
                    </LookbookThumbList>
                </LookbookThumbListWrapper>
            </LookbookWrapper> */}
            <LookbookWrapper>
                <LookbookThumbWrapper>
                    {lookbooks.map((lookbook) => (
                        <LookbookCard key={lookbook.id} {...lookbook} />
                    ))}
                </LookbookThumbWrapper>
            </LookbookWrapper>
        </NavLayout>
    );
}

const LookbookWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 78px 100px 100px 0px;
    margin-left: auto;
    width: 70%;
`;

const LookbookThumbWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
`;
