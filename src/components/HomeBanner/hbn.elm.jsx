import styled from 'styled-components';
export const HomeBannerWrapper = styled.div`
height: 100vh;
position: relative;
background: url('http://templates.framework-y.com/gourmet/images/bg-22.jpg');
background-size: cover;
overflow: hidden;
`
export const ImageBgSmoke = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
background: ${({bg})=>bg?`url(${bg})`:'none'};
background-position: ${({ smp }) => smp ? `${smp}px` : 0};
background-size: cover;
`
export const BannerContent = styled.div`
position: absolute;
top: 200px;
color: #ffffff;
left: 300px;
@media (max-width: 992px){
    left: 100px;
}
@media (max-width: 502px){
    left: 50px;
}
`
export const BannerHeader = styled.h1`
width: 515px;
font-size:50px;
line-height: 57px;
margin-bottom: 20px;
@media (max-width: 500px){
    width: 480px;
}
`
export const BannerDesc = styled.p`
font-family: 'Libre Baskerville', serif;
font-size: 14px;
line-height: 25px;
font-weight: 300;
width: 515px;
margin-bottom: 20px;
@media (max-width: 500px){
    width: 400px;
    margin-bottom: 40px;
}
`
export const BannerButtonWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 400px;
`
export const BannerButton = styled.div`
height: 50px;
width: 160px;
border: 2px solid #fff;
text-align: center;
border-radius: 16px;
cursor: pointer;
transition: all .3s ease-in-out;
&:hover{
    background: #008080;
}
`
export const BtnLabel = styled.p`
font-size: 24px;
margin-top: 5px;
`
