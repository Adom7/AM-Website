import styled from "styled-components"

const AMblue = '#235789'
const AMblack = '#454240'
const AMbeige = '#F2E9E4'
const AMpink = '#EF626C'
const AMgreen = '#4F9D69'

const Section = styled.div`
    background : ${AMblue} ;
    display : flex ;
    width : 100% ;
    justify-content : center;
    flex-wrap : wrap ;
`
const TitleContainer = styled.div`
    display : flex ;
    justify-content : center ;
    align-items : center ;
    width : 100% ;
`

const Title = styled.h2`
    color : ${AMpink} ;
    align-text : center ;
    font-size : 200% ;
    font-family: 'Candal', sans-serif;
    text-decoration : underline ;
`

const ContactContainer = styled.div`
    width : 100% ;
    display : flex ;
    justify-content : center ;
    flex-wrap : wrap ;
`

const BlobButton = styled.button`
    border-radius : 17px 40px 20px 40px ;
    height : 83px ;
    width : 170px ;
    border : none ;
    background-color : ${AMgreen} ;
    font-family: 'Candal', sans-serif;
    color : ${AMbeige} ;
    box-shadow : 0 5px 0 black ;
    &:hover {
        transition : 0.5s ;
        background-color : ${AMpink} ;
        cursor : pointer ;
    }
    &:active{
        box-shadow : none ;
        transform : translateY(10px);
    }
`


const Styled = {
    Section,
    TitleContainer,
    Title,
    ContactContainer,
    BlobButton,
}

export default Styled 