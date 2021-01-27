import React from 'react';
import styled from 'styled-components';

function ChangeForm() {
    return (
        <ChangeFormWrapper>
            <ChangeButton type="submit">다른 직업으로 변경하기</ChangeButton>
        </ChangeFormWrapper>
    );
}

const ChangeFormWrapper = styled.form`
    display: grid;
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center; /* 수평 가운데 정렬 */
`;

const ChangeButton = styled.button`
    cursor: pointer;
    width: 496px;
    height: 84px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 52px;

    background-color: #fff;
    color: #c4c4c4;
    border: 4px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 50px;

    margin: 10px 0 219px 0;

    &:focus {
        outline: none;
    }
`;

export default ChangeForm;
