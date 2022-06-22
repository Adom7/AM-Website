import React from 'react'
import Styled from './ContactMe.style'
import Socials from '../../Socials.js'

function ContactMe() {
    return (
        <Styled.Section>
            <Styled.TitleContainer>
                <Styled.Title>
                    Contact Me 🤙
                </Styled.Title>
            </Styled.TitleContainer>
            <Styled.ContactContainer>
                <a href='mailto: adlaneould@gmail.com' > <Styled.BlobButton > Email me 😁 </Styled.BlobButton> </a>
                {/* ANCHOR */}
            </Styled.ContactContainer>
            <Socials />
        </Styled.Section>
    )
}

export default ContactMe