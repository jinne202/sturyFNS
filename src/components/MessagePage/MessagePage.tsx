import React from 'react';
import styled from 'styled-components';
import MessageCard from './MessageCard';

const dummyMessage = [
    {id : 1, user : "김땡땡", description : "가나다라마바사", me : false, date : "21-01-21"},
    {id : 2, user : "윤땡땡", description : "피에스타", me : true, date : "21-01-22"},
    {id : 3, user : "김땡땡", description : "파노라마", me : false, date : "21-01-25"},
    {id : 4, user : "이땡땡", description : "화", me : false, date : "21-01-26"},
    {id : 5, user : "한땡땡", description : "좀비", me : true, date : "21-01-27"},
    {id : 6, user : "홍길동", description : "인더다크", me : true, date : "21-01-28"},
]

const messageIcon = <svg width="59" height="48" viewBox="0 0 59 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 0H53.3333C56.2789 0 58.6667 2.38781 58.6667 5.33333V42.6667C58.6667 45.6122 56.2789 48 53.3333 48H5.33333C2.38781 48 0 45.6122 0 42.6667V5.33333C0 2.38781 2.38781 0 5.33333 0ZM5.33333 17.648V42.6667H53.3333V17.6491L29.3332 29.6492L5.33333 17.648ZM5.33333 11.6851L29.3333 23.6863L53.3333 11.6863V5.33333H5.33333V11.6851Z" fill="black"/>
</svg>

const searchIcon = <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20C36 23.6974 34.7458 27.1019 32.6397 29.8113L43.4143 40.5859L40.5859 43.4143L29.8113 32.6397C27.1019 34.7458 23.6974 36 20 36ZM32 20C32 26.6274 26.6274 32 20 32C13.3726 32 8 26.6274 8 20C8 13.3726 13.3726 8 20 8C26.6274 8 32 13.3726 32 20Z" fill="black"/>
</svg>


const MessagePage = () => {
    return (
        <MessageWrapper>
            <MessageTitle>
                <IconWrapper>
                    {messageIcon}
                </IconWrapper>
                <h2>MESSAGE</h2>
            </MessageTitle>
            <SearchWrapper>
                <SearchBox/>
                <SearchIconWrapper>
                    {searchIcon}
                </SearchIconWrapper>
            </SearchWrapper>
            <MessageTable>
                {dummyMessage.map((message : any) => (
                    <MessageCard key={message.id} {...message}/>
                ))}
            </MessageTable>
        </MessageWrapper>
    )
}

const MessageWrapper = styled.div`
    margin : 0 100px;
`

const MessageTitle = styled.div`
    margin : 84px 0 0 0;
    width : 100%;

    & > h2 {
        font-size : 72px;
        font-family: 'Poppins', sans-serif;
        font-weight : 800;
        text-align : center;
        margin : 40px 0 0 0;
    }
`

const IconWrapper = styled.div`
    margin : 0 47%;
    display : block;
`

const SearchWrapper = styled.div`
    width : 400px;
    margin : 60px auto;
    position : relative;
`

const SearchBox = styled.input`
    width : 400px;
    height : 50px;
    border : 3px solid black;
    border-radius : 50px;
    padding : 0 20px;
    outline : none;
`

const SearchIconWrapper = styled.div`
    position : absolute;
    right : 20px;
    top : 10px;
`

const MessageTable = styled.div`
    border-top : 4px solid ${({ theme }) => theme.mode.borderColor};
    margin : 0 0 200px 0;
`

export default MessagePage;
