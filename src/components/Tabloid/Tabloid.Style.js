import styled from 'styled-components';

const AMblue = '#235789'
const AMblack = '#454240'
const AMbeige = '#F2E9E4'
const AMpink = '#EF626C'
const AMgreen = '#4F9D69'

const Frame = styled.div`
    background : ${AMblue} ;
    display : flex ;
    flex-direction : column ;
    width : 350px ;
    align-items : center ;
    border-radius : 10% ;
    text-align : center;
    margin : 20px 20px 10px ;

    @media (max-width: 460px) {
        width : 90% ;
    }
`

const Illustration = styled.img`
    height : 90px ;
    width : 90px ;
    margin-top : 30px ;
    margin-bottom : 5px ;
`

const MasterTitle = styled.h3`
    color : ${AMbeige} ;
    font-family: 'Candal', sans-serif;
    font-weight : 300 ;
`

const Title = styled.h4`
    color: ${AMpink};
    font-family: 'Candal', sans-serif;
    width : 100%;
    margin-top : 5px ;
    margin-bottom : 5px ;

`
const Description = styled.p`
    margin-top : 3px;
    margin-bottom : 50px ;
    width : 100% ;
    flex-wrap : wrap ;
    color : ${AMbeige};
    font-family: 'Candal', sans-serif;

`

const ToolContainer = styled.div`
    width : 100%;
    padding-bottom : 20px;
`

const ToolTitle = styled.h4`
    color : ${AMpink};
    width : 100% ;
    margin-top : 10px ;
    margin-bottom : 10px ;
    text-align : center ;
    font-family: 'Candal', sans-serif;
`
const ToolDescrition = styled.p`
    color : ${AMbeige};
    font-family: 'Candal', sans-serif;
    width : 100% ;
    text-align : center ;
    margin-top : 2px;
    margin-bottom : 2px;
`

const Styled = {
    Frame,
    Title,
    Description,
    MasterTitle,
    Illustration,
    ToolContainer,
    ToolTitle,
    ToolDescrition,
}

export default Styled;