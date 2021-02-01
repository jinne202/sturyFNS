import React from 'react';
import NavLayout from '../components/NavLayout';
import LeftMenu from '../components/LeftMenu';
import styled from 'styled-components';
import SnapCard from '../components/SnapPage/SnapCard';

const snaps = [
    { id: 1, title: 'title1', source: 'blue' },
    { id: 2, title: 'title2', source: 'red' },
    { id: 3, title: 'title3', source: 'green' },
    { id: 4, title: 'title4', source: 'white' },
    { id: 5, title: 'title5', source: 'black' },
    { id: 6, title: 'title6', source: 'gray' },
    { id: 7, title: 'title7', source: 'white' },
    { id: 8, title: 'title8', source: 'black' },
    { id: 9, title: 'title9', source: 'gray' },
];

export default function SnapIndex() {
    return (
        <NavLayout>
            <LeftMenu />
            <SnapWrapper>
                <SnapThumbListWrapper>
                    <SnapThumbList>
                        {snaps.map((snap) => (
                            <SnapCard key={snap.id} {...snap} />
                        ))}
                    </SnapThumbList>
                </SnapThumbListWrapper>
            </SnapWrapper>
        </NavLayout>
    );
}

const SnapWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding: 78px 0 0 0;
    margin: 0 100px 64px 0;
    margin-left: auto;
    width: 70%;
`;

const SnapThumbListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
`;

const SnapThumbList = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
`;
