import React from 'react'
import Styled from './Socials.style'

import Github from '../medias/Github.png'
import Tiktok from '../medias/Tiktok.png'
import Youtube from '../medias/Youtube.png'
import LinkedIn from '../medias/LinkedIn.png'
import Malt from '../medias/Malt.png'
import Superprof from '../medias/Superprof.png'



function Socials() {
    return (
        <Styled.Container>
            <Styled.ImgText> <Styled.LinkTo href='https://github.com/Adom7'> <Styled.Logo src={Github} /> Github </Styled.LinkTo> </Styled.ImgText>
            <Styled.ImgText> <Styled.LinkTo href='https://www.tiktok.com/@am_web3'> <Styled.Logo src={Tiktok} /> Tiktok </Styled.LinkTo> </Styled.ImgText>
            <Styled.ImgText> <Styled.LinkTo href='https://www.youtube.com/channel/UCh4hXo8enuRmJQxP4L6p-CQ'> <Styled.Logo src={Youtube} /> Youtube </Styled.LinkTo> </Styled.ImgText>
            <Styled.ImgText> <Styled.LinkTo href=''> <Styled.Logo src={Superprof} /> Superprof </Styled.LinkTo> </Styled.ImgText>
            <Styled.ImgText> <Styled.LinkTo href='https://www.malt.fr/profile/adlaneouldmohand'> <Styled.Logo src={Malt} /> Malt </Styled.LinkTo> </Styled.ImgText>
            <Styled.ImgText> <Styled.LinkTo href='https://www.linkedin.com/in/adlane-ould-1ba51917a/'> <Styled.Logo src={LinkedIn} /> LinkedIn </Styled.LinkTo> </Styled.ImgText>
        </Styled.Container>
    )
}

export default Socials