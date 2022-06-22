import styled from 'styled-components';

const AMblue = '#235789'
const AMblack = '#454240'
const AMbeige = '#F2E9E4'
const AMpink = '#EF626C'
const AMgreen = '#4F9D69'

const BeigeSection = styled.div`
    display : flex ;
    flex-wrap : wrap ;
    align-items : space-between ;
    background : ${AMbeige};
`

const CenterContainer = styled.div`
    display : flex ;
    justify-content : center ;
    align-items : flex-start ;
    width : 100%;
`


const GIF = styled.img`
    height : 10vh ;
`

const TitleContainer = styled.div`
    display : flex ;
    justify-content : center ;
    align-items : center ;
    width : 100% ;
`
const Title = styled.h2`
    color: ${AMpink};
    font-family: 'Candal', sans-serif;
    font-size : 200% ;
    text-decoration : underline ;
`
const AboutMeContainer = styled.div`
    display : flex ;
    align-items : center;
    flex-wrap : wrap ;
    justify-content : center ;
    width : 100% ;
    margin-bottom : 20px ;
`

const AboutMe = styled.div`
    color : ${AMblack};
    font-family: 'Candal', sans-serif;
    text-align : center ;
    max-width : 70% ;

`

const Container = styled.div`
    display : flex ;
    align-items : flex-end;
    justify-content : flex-start;
    width : 100%;
`

const Computer = styled.img`
    max-width : 100%;
`

const TabloidContainer = styled.div`
    display : flex ;
    flex-wrap : wrap ; 
    justify-content : center;
    margin : 10px 10px 10px ;
    width : 100%;

    @media (max-width: 1190px) {
        display : flex ; 
        flex-direction : column ;
        align-items : center ;
        margin : 10px 0 0px ;
    }

`
const Styled = {
    BeigeSection,
    GIF,
    TitleContainer,
    Title,
    CenterContainer,
    AboutMeContainer,
    AboutMe,
    Container,
    Computer,
    TabloidContainer,

}

export default Styled