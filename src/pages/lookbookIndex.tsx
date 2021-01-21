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
        <div>
            <NavLayout>
                <LeftMenu />
                <LookbookThumbListWrapper>
                    <LookbookCardWrapper>
                        {lookbooks.map((lookbook) => (
                            <LookbookCard key={lookbook.id} {...lookbook} />
                        ))}
                    </LookbookCardWrapper>
                </LookbookThumbListWrapper>
            </NavLayout>
        </div>
    );
}

const LookbookThumbListWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 100px;
    padding: 60px 0;
    width: 1080px;
    margin-left: auto;
`;

const LookbookCardWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
`;
