import React from 'react';
import NavLayout from '../../components/NavLayout';
import ViewInsta from '../../components/ViewPage/ViewInsta';

const ViewLookbook = ({ lookbook }: any) => {
    console.log(lookbook);

    return (
        <NavLayout>
            <ViewInsta />
        </NavLayout>
    );
};

export default ViewLookbook;
