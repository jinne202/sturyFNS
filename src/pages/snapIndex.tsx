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
        <div>
            <NavLayout>
                <LeftMenu />
                <SnapThumbListWrapper>
                    <SnapCardWrapper>
                        {snaps.map((snap) => (
                            <SnapCard key={snap.id} {...snap} />
                        ))}
                    </SnapCardWrapper>
                </SnapThumbListWrapper>
            </NavLayout>
        </div>
    );
}

const SnapThumbListWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 100px;
    padding: 60px 0;
    width: 1080px;
    margin-left: auto;
`;

const SnapCardWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
`;
