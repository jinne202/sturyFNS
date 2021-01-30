import React from "react";
import NavLayout from '../../components/NavLayout';
// import PhotographerUserPage from '../../components/UserPage/PhotographerUser';
// import ModelUserPage from '../../components/UserPage/ModelUser';
import BrandUserPage from '../../components/UserPage/BrandUser';
// import { useRouter } from 'next/router';

const userMyPage = () => {
//   const router = useRouter();
  // const id:Number = 1;
//   console.log(query) // {id : 'ok'}
  return (
    <NavLayout>
      <BrandUserPage/>
    </NavLayout>
  );
};

export default userMyPage;