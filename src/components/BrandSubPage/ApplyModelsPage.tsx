import React from 'react';
import styled from 'styled-components';
import ModelCard from './ModelCard';

const ApplyModel = [
    {id : 1, img : "img", modelName : "Wonyoung", height : "170cm", weight : "48kg", bust : "34", waist : "24", hip : "34", shoes : "235"},
    {id : 2, img : "img", modelName : "Yuri", height : "168cm", weight : "47kg", bust : "34", waist : "24", hip : "34", shoes : "235"},
    {id : 3, img : "img", modelName : "Minju", height : "171cm", weight : "48kg", bust : "34", waist : "24", hip : "34", shoes : "235"},
    {id : 4, img : "img", modelName : "Yujin", height : "172cm", weight : "49kg", bust : "34", waist : "24", hip : "34", shoes : "235"}
]

const ApplyModelPage = () => {
    return (
        <ApplyModelsWrapper>
            <ApplyTitle>어디어디서 촬영하실 어떤 모델 모집합니다</ApplyTitle>
            <ApplySub>지원자 목록</ApplySub>
            <ModelCardWrapper>
                {ApplyModel.map((model) => (
                    <ModelCard key={model.id} {...model}/>
                ))}
            </ModelCardWrapper>
        </ApplyModelsWrapper>
    )
}

const ApplyModelsWrapper = styled.div`
    margin : 0 100px;
    color : ${({ theme }) => theme.mode.textColor};
`

const ApplyTitle = styled.p`
    margin : 50px 0 0 0;
    font-size : 24px;
    font-weight : 700;
`

const ApplySub = styled.p`
    font-size : 48px;
    font-weight : 700;
    margin : 50px 0 0 0;
`

const ModelCardWrapper = styled.div`
    margin : 100px 0 0 0;
    display : flex;
    justify-content : space-between;
`

export default ApplyModelPage;