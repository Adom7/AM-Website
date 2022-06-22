import React from 'react'
import Styled from './AboutMe.style.js'

import MouseGif from "../../../medias/scroll-down.gif"
// import Tabloid from '../../Tabloid/Tabloid'
// import Brain from '../../../medias/Brain.png'
// const Tabloid1 = {
//     Img: Brain,
//     MasterTitle: 'Je suis en train de faire un test',
//     Title1: 'Title 1',
//     Description1: 'Description 1',
//     Title2: 'Title 2 ',
//     Description2: 'Description 2',
//     ToolTitle: 'ToolTitle',
//     ToolInfo: ['Info1', 'Info2', 'Info3', 'Info4']
// }
//Still Working on it :p

function Section1() {
    return (
        <Styled.BeigeSection>
            <Styled.CenterContainer>
                <Styled.GIF src={MouseGif} />
            </Styled.CenterContainer>
            <Styled.TitleContainer>
                <Styled.Title>
                    About Me ✌️
                </Styled.Title>
            </Styled.TitleContainer>
            <Styled.AboutMeContainer>
                <Styled.AboutMe>
                    {/* Passionne par l’informatique BLA BLA BLA
                    Je suis autodidacte , puis diplomer d’un bac + 3 en informatique de chez Efrei
                    Un grand curieux je me forme au nouvelle technologie du Web 3 BLA BLA BLA
                    Je suis en train de faire ma propre collection NFT UHZFUHZEF
                    Je vurlgarise egalement les nouvelles technologies sur Youtube et tiktok
                    Projet Alpha et Coffre Obsidian BLA BLA */}
                    Salut ! 👋<br />

                    Je suis Adlane , je suis un passionné de technologie, j'ai débuté ma formation de développeur web en autodidacte
                    grâce au nombreux tutoriels disponible sur Youtube / OpenClassrooms...
                    < br />
                    < br />
                    Suite à cela j'ai obtenu ma licence en 2022 en tant que développeur Web/Mobile au sein de Efrei Paris <br />
                    <br />
                    J'ai commencé à m'informer et à m'intéresser à la crypto, au web3 et à toutes les technologies qui rentre dans ce domaine en fin 2021, c'est un
                    milieu qui pour moi à beaucoup d'avenir.
                    Actuellement je suis en train de créer une collection NFT sur la blockchain Solana
                    (@CryptoGhostAgency) afin de comprendre les technologies,
                    mais aussi comment créer une communauté et répondre au besoins et envies de la communauté.
                    <br />

                    <br />
                    Je peux aujourd'hui vous proposer mes compétences afin d'approfondir mes connaissances, mais aussi et surtout , de concrétiser vos projets.
                    Si vous avez un projet, ou une simple idée, je vous invite à m'envoyer un message, cela ne vous engage à rien 😉
                    <br />
                    <br />
                    Adlane O.M
                </Styled.AboutMe>
            </Styled.AboutMeContainer>
            {/* <Styled.TabloidContainer>
                <Tabloid data={Tabloid1} />
                <Tabloid data={Tabloid1} />
                <Tabloid data={Tabloid1} />
            </Styled.TabloidContainer> */}
        </Styled.BeigeSection>
    )
}

export default Section1