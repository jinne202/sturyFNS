import React from 'react';
import styled from 'styled-components';
import { DatePicker, Space } from 'antd';
import Editor from './Editor';
import TagInput from './TagInput';

const WriteWrapper = () => {

    const selectedTags = (tags:any) => {console.log(tags)};
    const { RangePicker } = DatePicker;

    return (
        <EditPageWrapper>
        <WriteComponentWrapper>
            <TitleWrapper>
                <Title placeholder="제목을 입력하세요"></Title>
            </TitleWrapper>
            <Editor/>
        </WriteComponentWrapper>
        <TagComponentWrapper>
            <TagInput selectedTags={selectedTags}/>
        </TagComponentWrapper>
        <BottomComponentWrapper>
            <SubBottomComponent>
                <SubTitle>마감일</SubTitle>
                <RangePicker />
            </SubBottomComponent>
            <SubBottomComponent>
                <SubTitle>근무지역</SubTitle>
                <SubInput placeholder="ex . 서울"></SubInput>
            </SubBottomComponent>
            <SubBottomComponent>
                <SubTitle>대표이미지</SubTitle>
                <SubInput type="file"></SubInput>
            </SubBottomComponent>
        </BottomComponentWrapper>
        <ButtonWrapper>
            <PreUpload>임시저장</PreUpload>
            <UploadBtn>완료</UploadBtn>
        </ButtonWrapper>
        </EditPageWrapper>
    )
}

const EditPageWrapper = styled.div`
    padding : 0 0 200px 0;
`

const TitleWrapper = styled.div`
    margin : 50px 0 20px;
`

const Title = styled.input`
    font-size : 40px;
    border : 0;
    outline : 0;
    border-bottom : 1px solid #eee;
    width : 100%;
    padding : 15px 0;
    font-weight : 700;
`

const WriteComponentWrapper = styled.div`
    margin : 0 100px;
`

const TagComponentWrapper = styled.div`
    margin : 80px 100px;
`

const BottomComponentWrapper = styled.div`
    margin : 0 100px 100px;
`

const SubBottomComponent = styled.div`
    display : flex;
    margin : 0 0 30px 0;
`

const SubTitle = styled.p`
    width : 200px;
    font-size : 18px;
    font-weight : 700;
    margin : 7px 0 0 0;
`

const SubInput = styled.input`
    border : 1px solid #d9d9d9;
    outline : none;
    height : 30px;
    padding : 0 0 0 11px;

    &::placeholder {
        color : #d9d9d9;
        font-size : 14px;
    }
`

const ButtonWrapper = styled.div`
    display : flex;
    margin : 0 100px;
`

const BtnDefault = styled.button`
    outline : none;
    width : 300px;
    height : 50px;
    text-align : center;
    font-size : 18px;
`

const PreUpload = styled(BtnDefault)`
    margin-right : 30px;
    background : #eee;
    border : 3px solid #B9B9B9;
    color : #b9b9b9;
`

const UploadBtn = styled(BtnDefault)`
    border : 4px solid black;
    background : black;
    color : white;
`

export default WriteWrapper;