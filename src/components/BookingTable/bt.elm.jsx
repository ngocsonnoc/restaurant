import styled from 'styled-components';

export const BookingTableWrapper = styled.div`
max-width: 100%;
height: 120vh;
position: relative;
margin-top: 100px;
margin: 100px auto;
padding-top:60px ;
display: flex;
flex-direction: column;
z-index: 5;
@media (max-width:800px){
    height: 150vh;
}
`
export const HotCombo = styled.div`
max-width: 100%;
margin: auto;
padding-left: 100px;
z-index: 10;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
@media (max-width:500px){
    padding-left: 00px;
}
`
export const ParallaxImg = styled.div`
z-index: -10;
position: absolute;
background: url('http://templates.framework-y.com/gourmet/images/bg-6.jpg');
width: 100%;
height: 100%;
top: 0;
background-size: cover;
background-repeat: no-repeat;
transition: all .5s ease;
transform: ${({ y, initialY }) => y > initialY ? `translateY(${-(initialY - y) * 0.2}px)` : 0};
&::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.05);
    z-index: 2;
}

@media (max-width:1304px){
    height: 1100px;
}
@media (max-width:925px){
    height: 1300px;
}
@media (max-width:703px){
    height: 1900px;
}
`
export const ComboCard = styled.div`
width: 262px;
height: 371px;
z-index: 5;
margin: 0 20px 20px 20px;
position: relative;
cursor: pointer;
overflow: hidden;
transition: all .5s ease;
@media (max-width:500px){
    margin: 0 20px 20px 0;
}
.img-box{
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
}
.caption{
    position: absolute;
    top: 0%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    transition: all .5s ease;
    height: 30px;
    overflow: hidden;
    h2{
        text-transform: uppercase;
        color: #FFFFFF;
        font-size: 28px;
        padding-bottom: 5px;
    }
    hr{
        font-size: 30px;
        background: #FFFFFF;
        width: 50px;
        margin: auto;
    }
}
.desc{
    position: absolute;
    height: 30px;
    top: 20%;
    left: 25%;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 10;
    color: #FFFFFF;
    overflow: hidden;
    transition: all .5s ease;
    span{
        position: absolute;
        transition: all .5s ease;
        top: -20px;
    }
}
&:hover{
    transform: scale(1.0808);
    box-shadow: 0 10px 35px 0 rgb(255, 255, 255,  36%);
    z-index: 30;

    .caption{
        top: -10%;
        height: 50px;
    }
    .desc{
        span{
            top: 0;
        }
    }
}
&::after{
    content: '';
    position: absolute;
    top: 0%;
    background: #3333;
    width: 100%;
    height: 100%;
}
`
export const TableForm = styled.div`
width:100% ;
height: 300px;
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 30px;
background: transparent;
transition: all .3s ease-in-out;
.title-base{
    width: 40%;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    cursor: pointer;
    margin-top: 40px;
    .text{
        p{
            font-family: 'Libre Baskerville', serif;
            font-size: 14px;
            line-height: 25px;
            font-weight: 300;
            color: #737373;
            margin-bottom: 7px;
        }
        h2{
            font-weight: 600;
            font-size: 34px;
            line-height: 34px;
            text-transform: uppercase;
            margin-top: 0;
        }
    }
    .desc{
        margin-top: 30px;
        color: #FAFAFA;
        font-size: 16px;
        line-height: 20px;
        padding-left: 10px;
    }
    .footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 30px;
        margin-right: 50px;
        cursor: pointer;
        i{
            margin-right: 7px;
        }
    }
}
.form-booking{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 100px;
    color: #FFFFFF;
    width: 40%;
    .form-item{
        margin-right: 20px;
        flex: 30%;
        display: flex;
        flex-direction: column;
        label{
            margin-bottom: 20px;
            font-size: 20px;
        }
        input,select{
            border: none;
            outline: none;
            color: #FFFFFF;
            border-bottom: 2px solid #FFFFFF;
            background: transparent;
            width: 100%;
            font-size: 17px;
           &:focus{
               color: #FFFFFF;
               font-size: 17px;
           }
        }
        select{
            background: transparent;
            option{
                color: #000;
            }
        }

    }
}
@media (max-width:960px){
    flex-direction: column;
    margin-left:100px;
    max-width: 80%;
    margin-top: 100px;
    .title-base{
        width: 80%;
    }
    .form-booking{
        width: 80%;
        margin-top: 40px;
        padding-left: 20px;
        .form-item{
            flex: 40%;
            margin-top: 20px;
        }
    }
}
`