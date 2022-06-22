import styled from 'styled-components'

const AMbeige = '#F2E9E4'


const Container = styled.div`
    width : 100% ;
    display : flex ;
    justify-content : space-around ;
    padding-top : 50px ;

    @media (max-width: 750px) {
        font-size : 0px;
        justify-content : center ; 
    }
    `
const LinkTo = styled.a`
    display : flex ;
    align-items : center ;
    text-decoration : none ;
    color : ${AMbeige};
`

const ImgText = styled.div`
    display : flex ;
    width : max-content ;
    justify-content : center ;
    align-items : center ;
    font-family: 'Candal', sans-serif;
    color : ${AMbeige} ;

    @media (max-width: 750px) {
        padding : 0 10px 0 ;
    }
`
const Logo = styled.img`
    height : 30px ;

    @media (max-width: 300px) {
        height : 20px ;
    }
`

const Styled = {
    Container,
    ImgText,
    Logo,
    LinkTo,
}

export default Styled
