import React, { useState } from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai"

type Tag = { index: number; text: string;};

const TagsInput = (props:any) => {
    const [tags, setTags] = useState([] as Tag[]);
    const addTags = (event:any) => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    const removeTags = (index:any) => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };
    return (
        <TagWrapper>
            {/* classname tag-inputs */}
            <Tags>
                {tags.map((tag, index) => (
                    <Tag key={index}>
                        <span>{tag}</span>
                        <CloseIcon 
                            onClick={() => removeTags(index)} 
                        >
                            <AiFillCloseCircle/>
                        </CloseIcon>
                        {/* material-icons */}
                    </Tag>
                ))}
            </Tags>
            <input
                type="text"
                onKeyUp={event => addTags(event)}
                placeholder="태그를 입력하세요"
            />
        </TagWrapper>
    );
};

const TagWrapper = styled.div`
    display : flex;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 48px;
    width: 100%;
    padding: 0 8px;
    border: 1px solid #eee;
    border-radius: 6px;
    font-size : 18px;

    & > input {
        flex: 1;
        border: none;
        height: 46px;
        font-size: 14px;
        padding: 4px 0 0 0;
        &:focus {
        outline: transparent;
        }
    }
`

const CloseIcon = styled.i`
    margin : 1px 0 0 15px;
    font-size : 20px;
`

const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
`

const Tag = styled.li`
    width: auto;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0 20px;
    font-size: 14px;
    list-style: none;
    border-radius: 20px;
    margin: 0 8px 8px 0;
    background: black;
`

export default TagsInput;