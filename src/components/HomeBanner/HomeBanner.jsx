import React, { useEffect, useState } from 'react'
import { BannerButton, BannerButtonWrapper, BannerContent, BannerDesc, BannerHeader, BtnLabel, HomeBannerWrapper, ImageBgSmoke } from './hbn.elm'
import sm from '../../assets/img/clouds_2.png'
const HomeBanner = () => {
    const [smp, setSmp] = useState(1000)
    useEffect(() => {
        setTimeout(function () {
            if (smp > 0) {
                setSmp(smp - 0.7)
            }
            if (smp <= 0) {
                setSmp(1000)
            }
        }, 10)
    }, [smp])
    return (
        <HomeBannerWrapper>
            <ImageBgSmoke smp={smp} bg={sm}>
            </ImageBgSmoke>
            <BannerContent>
                <BannerHeader>DELICIOUS ITALIAN HOME MADE CUISINE</BannerHeader>
                <BannerDesc>Ratione numquam. Fugiat alias saepe fuga odio sed exauris, minim anim dolores earum! Veniam corporis cupidatat atque nesciunt dicta justoui varius loreto martino con sostanza e progolo.</BannerDesc>
                <BannerButtonWrapper>
                    <BannerButton>
                        <BtnLabel>View Menu</BtnLabel>
                    </BannerButton>
                    <BannerButton>
                        <BtnLabel>Reverser Now</BtnLabel>
                    </BannerButton>
                </BannerButtonWrapper>
            </BannerContent>
        </HomeBannerWrapper>
    )
}

export default HomeBanner
