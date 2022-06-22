import React from 'react'
import Styled from './LandingPage.style'
import { GiHamburgerMenu } from 'react-icons/gi'

import BlobOrange from "../../../medias/BlobOrange.svg"
import BlobRouge from "../../../medias/BlobRouge.svg"

// ANCHOR  To hide all the error in the client side , use this !
console.warn = console.error = () => { };

// console.log('Hi there Curious man , if you want to get the full code I invite you to see my Github repo , all the code is free to use :)');

function LandingPage() {
    return (
        <>
            <Styled.BlueSection>
                <Styled.TopNav>
                    <Styled.LogoContainer>
                        <h1> Adlane.Ould</h1>
                    </Styled.LogoContainer>
                </Styled.TopNav>
                <Styled.RedBlob src={BlobRouge} />
                <Styled.OrangeBlob src={BlobOrange} />
                <Styled.DiscoverySection>
                    <Styled.DescriptionContainer>
                        Hey There ! 👋 <br />
                        My name is Adlane OULD and I like to create <br />cool stuff on internet 😋
                    </Styled.DescriptionContainer>
                    <Styled.TitleContainer>
                        <Styled.TitleLeft>
                            <Styled.TitleLeftContainer>
                                <Styled.Front>Front</Styled.Front>
                                <Styled.Dev>-End</Styled.Dev>
                            </Styled.TitleLeftContainer>
                            <Styled.TitleLeftContainer>
                                <Styled.Back>Back</Styled.Back>
                                <Styled.Dev>-End</Styled.Dev>
                            </Styled.TitleLeftContainer>
                        </Styled.TitleLeft>
                        <Styled.TitleRight>
                            <Styled.Dev>Developer</Styled.Dev>
                        </Styled.TitleRight>
                    </Styled.TitleContainer>
                </Styled.DiscoverySection>
            </Styled.BlueSection>
        </>
    )
}

export default LandingPage