import styled from 'styled-components';
import { HiFire } from 'react-icons/hi'
import { BsBookmarkStar, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { SiApplemusic } from 'react-icons/si'
import { GiAlarmClock } from 'react-icons/gi'


export const AboutWrapper = styled.div`

width: 100%;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;

`
export const ContactWrapper = styled.div`
z-index: 10;
width: 100%;
padding-top: 20px;
padding-bottom: 20px;
display: flex;
flex-direction: row;
justify-content: center;
background: #f7f7f7;
@media (max-width: 902px){
flex-wrap: wrap;
}
`
export const ContactItem = styled.div`
width: 300px;
height: 125px;
display: flex;
flex-direction: row;
@media (max-width: 902px){
margin-right: 30px;
}
`

export const FireIcon = styled(HiFire)`


`
export const StarIcon = styled(BsBookmarkStar)`
`
export const MusicIcon = styled(SiApplemusic)`
`
export const ClockIcon = styled(GiAlarmClock)`

`
export const IconItem = styled.div`
height: 100px;
font-size: 80px;
padding-right: 10px;
`
export const DescItem = styled.div`
border-left: 2px solid #737373 ;
padding-left: 10px;
p.desc{
    font-family: 'Libre Baskerville', serif;
    font-size: 14px;
    line-height: 25px;
    font-weight: 300;
    color: #737373;
}
p.heading{
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 15px;
    text-transform: none;
    color: #484848;
}
`
export const ParallaxWrapper = styled.div`
z-index: 10;
display: flex;
height: 100vh;
padding-top: 60px;
justify-content: center;
align-items: center;
width: 815px;
position: relative;
min-height: 595px;

.parallax-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 90px;
    background: #fff;
    box-sizing: border-box;
}
.main-heading{
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 30px;
    p{
        padding-bottom: 5px;
        font-size: 14px;
        opacity: .8;
        font-style: italic;
    }
    h2{
        font-weight: 600;
        font-size: 34px;
        line-height: 34px;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
    }
}
.main-subheading{
        text-align: center;
        box-sizing: border-box;
        margin-top: 30px;
        p{
            font-family: 'Libre Baskerville', serif;
            font-size: 14px;
            line-height: 25px;
            font-weight: 300;
            color: #737373;
        }
    }
    .sign{
        margin-top: 20px;
        img{
            max-width: 100%;
        }
    }
    .about-slider-chef{
        margin-top: 30px;
        height: auto;
        width: 100%;
        max-width: 780px;
    }
    @media (max-width: 902px){
        width: 515px;
        .main-subheading{
            max-width: 450px;
        }
        .main-heading{
            padding-top: 20px;
        }
    }
    @media (max-width: 602px){
        margin-top: 50px;
    }
`
export const ParallaxContent = styled.div`
        margin-top: 30px;
        height: auto;
        width: 100%;
        max-width: 780px;
        @media (max-width: 602px){
            max-width: 360px;
            
        }
`
export const Image = styled.div`
`
export const ArrowLeft = styled(BsFillArrowLeftCircleFill)`
position: absolute;
top: 50%;
left: -100px;
z-index: 3;
color: #737373;
font-size: 0rem;
cursor: pointer;
transition: all .3s ease-in-out;
${ParallaxContent}:hover &{
    left: -30px;
    font-size: 2rem;
}
`
export const ArrowRight = styled(BsFillArrowRightCircleFill)`
position: absolute;
top: 50%;
right: -100px;
z-index: 3;
color: #737373;
font-size: 0rem;
cursor: pointer;
transition: all .3s ease-in-out;
${ParallaxContent}:hover &{
    right: -30px;
    font-size: 2rem;
}
`
export const ParallaxImg = styled.div`
z-index: 0;
position: absolute;
background: url('http://templates.framework-y.com/gourmet/images/bg-8.jpg');
width: 100%;
height: 80%;
top: 165px;
background-size: cover;
transform: ${({ y }) => y > 800 ? `translateY(${-(800 - y) * 0.5}px)` : 0};
&::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.05);
    z-index: 2;
}
`
