import styled from 'styled-components';

export const CardWrapper = styled.div`
max-width: 303px;
height: 337px;
display: flex;
flex-direction: column;
position: relative;
cursor: pointer;
overflow: hidden;
margin: 10px 5px 10px 5px;
.product-image{
    position: relative;
    overflow: hidden;
    img{
        margin: auto;
        width: 100%;
        transition: all .3s ease-in;
    &:hover{
        transform: scale(1.3);
    }
    }
    span{
        position: absolute;
        bottom: 20px;
        font-size: 18px;
        z-index: 9;
        left: 16px;
        color: #fff;
        transform: translate3d(0,0,0);
        cursor: pointer;
        
    }
}
.product-desc{
    h2{
        color: #3E3E3E;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 10px;
    }
    p{
        color: #929292;
    }
}

`