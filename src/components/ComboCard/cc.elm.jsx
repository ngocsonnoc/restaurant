import styled from 'styled-components';

export const CardWrapper = styled.div`
height: 390px ;
width: 252px;
overflow: hidden;
border-radius: 5px;
box-sizing: border-box;
background: #fff;
padding: 10px 0;
overflow: visible;
.combo-image{
    width: 100%;
    border-radius: 5px;
    overflow:hidden ;
    img{
        width: 97%;
        margin: auto;
    }
}
&:hover{
    transform: scale(1.0808);
    box-shadow: 0 10px 35px 0 rgb(255, 255, 255,  36%);
    z-index: 30;
}
`