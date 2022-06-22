import styled from 'styled-components';

const AMblue = '#235789'
const AMblack = '#454240'
const AMbeige = '#F2E9E4'
const AMpink = '#EF626C'
const AMgreen = '#4F9D69'



const BlueSection = styled.div`
    background : ${AMblue};
    padding: 0;
    margin: 0;
    display: flex;
    justify-content : center ;
    flex-wrap : wrap; 
    height : 90vh;
    width : 100% ;

`
const BeigeSection = styled.section`
    background : ${AMbeige} ;
    display: flex;
    flex-direction : row;
    justify-content : center ;
    height : 100vh;
    width : 100% ;
`
const TopNav = styled.div`
    display : flex ;
    align-items : center ;
    justify-content : space-between ;
    width : 100%;
    font-size : 10px ;
    margin-left : 4%;
    margin-right : 4% ;
    height : max-content ; 
    color: ${AMpink};
    font-family: 'Candal', sans-serif;
`


const LogoContainer = styled.div`
    display : flex ;
    align-items : center ;
    width : 100%;
    font-size : 10px ;
    height : max-content ; 
    color: ${AMpink};
    font-family: 'Candal', sans-serif;
`
const DiscoverySection = styled.section`
    display : flex ;
    flex-direction : column ;
`

const DescriptionContainer = styled.div`
    display : flex ;
    font-family: 'Candal', sans-serif;
    color : ${AMbeige} ;
    font-size : 20px ;
    @media (max-width: 1500px) {
        font-size : 100% ;
    }
`

const TitleContainer = styled.div`
    display: flex ;
    align-items : center;
    justify-content : center ;
    font-family: 'Candal', sans-serif;
    heigth : max-content ;
    font-size : 200% ;
    overflow : none ;
    flex-wrap : wrap ;
    @media (max-width: 1500px) {
        font-size : 150% ;
    }

`
const TitleLeftContainer = styled.div`
    display : flex ;
    width : 50%
    align-items : center ;
    justify-content : center ;
`
const TitleLeft = styled.div`
`
const TitleRight = styled.div`

`
const SectionTitleContainer = styled.div`
    display : flex ; 
    flex-direction : row ;
    align-items : flex-start ;
    `
const Title = styled.h2`
    color: ${AMpink};
    font-family: 'Candal', sans-serif;
    font-size : 150% ;
    margin-left : 10% ;
    background : red ;
    `

const Container = styled.div`

    `

const Front = styled.h2`
    color: ${AMbeige};
    margin : 0 ;
`

const Back = styled.h2`
    color: ${AMblack};
    margin : 0 ;
`
const Dev = styled.h2`
    color: ${AMpink} ;
    margin : 0 ;
    `

const GIF = styled.img`
    margin : 0 50% 0 50%
    `
const RedBlob = styled.img`
    position : absolute ;
    right : 0px ;
    top : 14% ;
    width : 15% ;
    `

const OrangeBlob = styled.img`
    position : absolute ;
    left : 0px ;
    top : 65% ;
    width : 10% ;
    `
const AboutMe = styled.section`
    display : flex ;
    flex-direction : column ; 
    justify-content : flex-start;
    background : red ;
    flex-wrap : wrap ;
    height : 100% ;
    width : 100% ;
`

const ComputerImg = styled.img`
    height : 20% ;
`

const Styled = {
    Container,
    BlueSection,
    BeigeSection,
    TopNav,
    Front,
    Back,
    Dev,
    LogoContainer,
    DiscoverySection,
    DescriptionContainer,
    TitleContainer,
    TitleLeftContainer,
    TitleLeft,
    TitleRight,
    Title,
    SectionTitleContainer,
    GIF,
    RedBlob,
    OrangeBlob,
    ComputerImg,
    AboutMe,

}

export default Styled;