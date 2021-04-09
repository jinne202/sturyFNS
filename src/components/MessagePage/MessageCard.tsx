import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { showMessageRequest } from '../../reducers/layoutReducer';

const MessageCard = ( props : any ) => {
    const dispatch = useDispatch();

    const handleSubmitMessage = () => {
        dispatch(showMessageRequest());
    }

    return (
        <MessageCardContainer>
            <MessageUser>{props.me ? <ToUser>TO.{props.user}</ToUser> : <FromUser>FROM.{props.user}</FromUser>} </MessageUser>
            <MessageDescription>{props.description}</MessageDescription>
            <MessageDate>{props.date}</MessageDate>
            {props.me ? <ReplyButton onClick={handleSubmitMessage}>답장</ReplyButton> : <div></div>}
        </MessageCardContainer>
    )
}

const MessageCardContainer = styled.div`
    border-bottom : 4px solid ${({ theme }) => theme.mode.borderColor};
    font-size : 18px;
    display : flex;
    height : 60px;
`

const MessageUser = styled.div`
    padding : 18px 0 0 0;
    margin : 0 0 0 80px;
    width : 15%;
`

const MessageDescription = styled.div`
    padding : 18px 0 0 0;
    width : 60%;
`

const MessageDate = styled.div`
    padding : 18px 0 0 0;
    width : 10%;
`

const ReplyButton = styled.button`
    height : 40px;
    width : 60px;
    margin : 10px 0 0 0;
    outline : none;
    background-color : #2521FF;
    border : none;
    color : white;
    border-radius : 50px;
    font-weight : 700;
    cursor : pointer;
`

const ToUser = styled.div`
    color : #2521FF;
`

const FromUser = styled.div`
    color : #FF7E21;
`

export default MessageCard;