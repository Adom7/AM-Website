import React from 'react'
import Styled from './Tabloid.Style'

function Tabloid(data) {
    return (
        <Styled.Frame>
            <Styled.Illustration src={data.data.Img} />
            <Styled.MasterTitle>
                {data.data.MasterTitle}
            </Styled.MasterTitle>
            <Styled.Title>
                {data.data.Title1}
            </Styled.Title>
            <Styled.Description>
                {data.data.Description1}
            </Styled.Description>
            <Styled.Title>
                {data.data.Title2}
            </Styled.Title>
            <Styled.Description>
                {data.data.Description2}
            </Styled.Description>
            <Styled.ToolContainer>
                <Styled.ToolTitle>{data.data.ToolTitle}</Styled.ToolTitle>
                <Styled.ToolDescrition>{data.data.ToolInfo[0]}</Styled.ToolDescrition>
                <Styled.ToolDescrition>{data.data.ToolInfo[1]}</Styled.ToolDescrition>
                <Styled.ToolDescrition>{data.data.ToolInfo[2]}</Styled.ToolDescrition>
                <Styled.ToolDescrition>{data.data.ToolInfo[3]}</Styled.ToolDescrition>
            </Styled.ToolContainer>
        </Styled.Frame>
    )
}

export default Tabloid