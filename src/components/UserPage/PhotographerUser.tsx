import React from "react";
import styled from 'styled-components';
import MyPageCard from './MyPageCard';

const dummyUserImg = require('../../../static/userImage.png');

const MyPosts = [
    {id : 1, title : "title1", img : "img"},
    {id : 2, title : "title2", img : "img"},
    {id : 3, title : "title3", img : "img"},
    {id : 4, title : "title4", img : "img"}
]

const PhotographerUserPage = () => {
    return (
        <UserMyPageWrapper>
            <MyCard>
                <LeftTypeTitle>Photographer</LeftTypeTitle>
                <RightWrapper>
                <UserImg><img src={dummyUserImg} alt="더미 유저 이미지"/></UserImg>
                <UserName>Wonyoung, Jang</UserName>
                </RightWrapper>
            </MyCard>
            <MyInfo>
                <LeftInfo>
                    <InfoDetails>
                        <InfoSub>SNS</InfoSub><InfoContent>@snsssnssss</InfoContent>
                    </InfoDetails>
                    <InfoDetails>
                        <InfoSub>About</InfoSub><InfoContent>어떤어떤 사람이다 어쩌고 저쩌고</InfoContent>
                    </InfoDetails>
                </LeftInfo>
                <RightButtonsWrapper>
                    <div>
                        <EditProfileBtn>내 프로필 편집</EditProfileBtn>
                        <MessageBtn>쪽지함</MessageBtn>
                    </div>
                </RightButtonsWrapper>
            </MyInfo>
            <MyPostsCardWrapper>
                {MyPosts.map((post) => (
                    <MyPageCard key={post.id} {...post}/>
                ))}
            </MyPostsCardWrapper>
        </UserMyPageWrapper>
    )
}

const UserMyPageWrapper = styled.div`
  margin : 0 100px 200px;
`

const MyCard = styled.div`
  margin : 95px 0 0 0;
  display : flex;
`

const LeftTypeTitle = styled.div`
  width : 10%;
  font-size : 18px;
  color : ${({ theme }) => theme.mode.textColor};
`

const RightWrapper = styled.div`
  width : 90%;
`

const UserImg = styled.div`
  width : 160px;
  height : 160px;
  border : 4px solid ${({ theme }) => theme.mode.borderColor};
  border-radius : 50%;
  float : right;
  margin : 0 0 40px 0;
  overflow: hidden;

  & > img {
    width : 100%;
    height : 100%;
    object-fit : cover;
  }
`

const UserName = styled.p`
  font-size : 120px;
  font-family: 'Poppins', sans-serif;
  font-weight : 800;
  text-align : right;
  clear: both;
  color : ${({ theme }) => theme.mode.textColor};
`

const MyInfo = styled.div`
    margin : 100px 0 0 0;
    display : flex;
`

const LeftInfo = styled.div`
    width : 50%;
    padding : 25px 0 0 0;
    color : ${({ theme }) => theme.mode.textColor};
`

const InfoDetails = styled.div`
    width : 100%;
    display : block;
    font-size : 18px;
    line-height : 35px;
    margin : 0 0 10px 0;
`

const InfoSub = styled.p`
    display : inline-block;
    font-weight : 700;
    width : 150px;
`

const InfoContent = styled.p`
    display : inline-block;
`

const RightButtonsWrapper = styled.div`
    position : relative;
    width : 50%;
    display : flex;
    justify-content : flex-end;
`

const ButtonStyle = styled.button`
    width : 265px;
    height : 65px;
    border-radius : 50px;
    display : block;
    cursor : pointer;
    font-size : 18px;
    font-weight : 700;

    &:focus {
        outline : none;
    }
`

const EditProfileBtn = styled(ButtonStyle)`
    margin : 0 0 15px 0%;
    color : ${({ theme }) => theme.mode.buttonTextColor};
    background-color : ${({ theme }) => theme.mode.containerColor};
    border : 4px solid ${({ theme }) => theme.mode.borderColor};
`

const MessageBtn = styled(ButtonStyle)`
    color : ${({ theme }) => theme.mode.textColor};
    background-color : ${({ theme }) => theme.mode.mainBg};
    border : 4px solid ${({ theme }) => theme.mode.borderColor};
`

const MyPostsCardWrapper = styled.div`
    margin : 105px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 44px;
    row-gap : 44px;
`


export default PhotographerUserPage;