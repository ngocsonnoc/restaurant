import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AboutWrapper, ArrowLeft, ArrowRight, ClockIcon, ContactItem, ContactWrapper, DescItem, FireIcon, IconItem, MusicIcon, ParallaxContent, ParallaxImg, ParallaxWrapper, StarIcon, } from './hab.elm';
import { ChefCard } from '..';
const chefData = [{
    name: 'JESSICA SARTER',
    image: 'http://templates.framework-y.com/gourmet/images/chef-5.png',
    fbLink: '',
    twLink: '',
    instagarmLink: '',
    position: 'Founder & Chef',
    desc: 'Lorem Ipsum is simply dummy text of the printing and industry lorem has been the graco.'
}, {
    name: 'ALAN MARDON',
    image: 'http://templates.framework-y.com/gourmet/images/chef-4.png',
    fbLink: '',
    twLink: '',
    instagarmLink: '',
    position: 'Co-founder',
    desc: 'Lorem Ipsum is simply dummy text of the printing and industry lorem has been the graco.'
}, {
    name: 'SARH PREST',
    image: 'http://templates.framework-y.com/gourmet/images/chef-3.png',
    fbLink: '',
    twLink: '',
    instagarmLink: '',
    position: 'Chef',
    desc: 'Lorem Ipsum is simply dummy text of the printing and industry lorem has been the graco.'
}, {
    name: 'SARAH PÈRKER',
    image: 'http://templates.framework-y.com/gourmet/images/chef-2.png',
    fbLink: '',
    twLink: '',
    instagarmLink: '',
    position: 'Chef',
    desc: 'Lorem Ipsum is simply dummy text of the printing and industry lorem has been the graco.'
},]
const NextArrow = (props) => {
    const { onClick } = props;
    return (<ArrowRight onClick={onClick} />)

}
const PrevArrow = (props) => {
    const { onClick } = props;
    return (<ArrowLeft onClick={onClick} />)

}
const HomeAbout = () => {
    const [y, setY] = useState(0)
    const [item, setItem] = useState(3)

    //const [slide, setSlide] = useState(3)
    const settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: item,
        slidesToScroll: 1,
        cssEase: 'linear',
        dot: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const renderSlider = (data) => {
        if (data) {
            return data.map((item, index) => {
                return <ChefCard data={item} key={index} index={index} />
            })
        }
    }
    useEffect(() => {
        const parallaxEffect = () => {
            setY(window.pageYOffset)
        }
        window.addEventListener('scroll', parallaxEffect)
        return () => {
            window.removeEventListener('scroll', parallaxEffect)
        }
    }, [y])
    useEffect(() => {
        const handleItemSlide=()=>{
            if(window.innerWidth<602){
                setItem(1)
            }
            else{
                setItem(3)
            }
        }
        window.addEventListener('resize',handleItemSlide)
        return () => {
            window.removeEventListener('resize',handleItemSlide)
        }
    }, [item])
    return (
        <AboutWrapper>
            <ParallaxImg y={y}></ParallaxImg>
            <ContactWrapper>
                <ContactItem>
                    <IconItem>
                        <FireIcon />
                    </IconItem>
                    <DescItem>
                        <p className='heading'>
                            Country music
                        </p>
                        <p className='desc'>
                            Fermentum repre henderit inim solli citudin maopro.
                        </p>
                    </DescItem>
                </ContactItem>
                <ContactItem>
                    <IconItem>
                        <StarIcon />
                    </IconItem>
                    <DescItem>
                        <p className='heading'> Original barbeque</p>
                        <p className='desc'>
                            Eleifend quod do nostrum fermentum reprehenderito mato.
                        </p></DescItem>
                </ContactItem>
                <ContactItem>
                    <IconItem>
                        <ClockIcon />
                    </IconItem>
                    <DescItem>
                        <p className='heading'>
                            Starred cooks
                        </p>
                        <p className='desc'>
                            Odit eleifend quod do nostrum fermentum reprehenderito.
                        </p>
                    </DescItem>
                </ContactItem>
                <ContactItem>
                    <IconItem>
                        <MusicIcon />
                    </IconItem>
                    <DescItem><p className='heading'>
                        Open all week
                    </p>
                        <p className='desc'>
                            Maleifend quod do nostrum fermentum repreherito mato.
                        </p>
                    </DescItem>
                </ContactItem>
            </ContactWrapper>
            <ParallaxWrapper>
                <div className='parallax-main'>
                    <div className='main-heading'>
                        <p>Your pleasure of teasting</p>
                        <h2>WELCOME</h2>
                    </div>
                    <div className='main-subheading'>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className='sign'><img src="http://templates.framework-y.com/gourmet/images/sign-2.png" alt="sign" /></div>
                    <ParallaxContent>
                        <Slider {...settings}>
                            {renderSlider(chefData)}
                        </Slider>

                    </ParallaxContent>
                </div>
            </ParallaxWrapper>
        </AboutWrapper>
    )
}

export default HomeAbout
