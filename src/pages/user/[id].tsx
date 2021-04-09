import React from 'react';
import NavLayout from '../../components/NavLayout';
import BrandUserPage from '../../components/UserPage/BrandUser';
// import { useRouter } from 'next/router';

const userMyPage = () => {
    //   const router = useRouter();
    //   console.log(query) // {id : 'ok'}
    return (
        <NavLayout>
            <BrandUserPage />
        </NavLayout>
    );
};

export default userMyPage;
