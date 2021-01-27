import React from "react";
import NavLayout from '../../components/NavLayout';
import PhotographerMyPage from '../../components/MyPage/Photographer';
// import { useRouter } from 'next/router';

const userMyPage = () => {
//   const router = useRouter();
  // const id:Number = 1;
//   console.log(query) // {id : 'ok'}
  return (
    <NavLayout>
      <PhotographerMyPage/>
    </NavLayout>
  );
};

export default userMyPage;