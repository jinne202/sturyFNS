import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { hideMessageRequest } from '../../reducers/layoutReducer';

const MessageModal = () => {

  const dispatch = useDispatch();

  const handleSubmitMessage = () => {
    dispatch(hideMessageRequest());
  }
  
  return (
    <>
      <ModalOverlay></ModalOverlay>
      <ModalWrapper>
          <ModalInner>
            <MessageName>To.누구누구</MessageName>
            <MessageArea></MessageArea>
            <MessageBtn onClick={handleSubmitMessage}>보내기</MessageBtn>
          </ModalInner>
      </ModalWrapper>
    </>
  )
}

const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  width: 360px;
  height : 400px;
  border : 4px solid black;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`

const MessageName = styled.div`
  font-size : 18px;
`

const MessageArea = styled.textarea`
  border : 1px solid #cfcfcf;
  outline : none;
  resize : none;
  width : 100%;
  margin : 20px 0 0 0;
  height : 220px;
  padding : 20px;
  line-height : 120%;
  font-size : 14px;
`

const MessageBtn = styled.button`
  width : 120px;
  height : 40px;
  outline : none;
  border : none;
  margin : 25px 28%;
  border-radius : 40px;
  background-color : #FF7E21;
  color : white;
  font-weight : 700;
  text-align : center;
  cursor : pointer;
`

export default MessageModal;