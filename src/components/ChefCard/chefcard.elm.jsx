import styled from 'styled-components';
export const CartWrapper = styled.div`
height: 371px;
width: 239px;
overflow: hidden;
position: relative;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

img{
    height: 283px;
    width: 240px;
}
.desc{
    position: absolute;
    width: 100%;
    top: 83%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    text-align: center;
    transition: all .3s ease-in-out;
    h2.name{
        font-size: 17px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 17px;
        border-bottom: 1px solid #d8d8d8;
        border-radius: 0px;
        display: inline-block;
        position: relative;
        width: 80%;
        margin: auto;
        padding: 8px 5px;
    }
    p.position{
        font-size: 16px;
        font-weight: 400;
        letter-spacing: .5px;
        margin-top: 5px;
        color: #6b6b6b;
    }
    ul.social{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 70px;
        margin-top: 10px;
        margin-bottom: 10px;
        i{
            color: #737373;
        }
    }
    p.chef-desc{
        max-width: 200px;
        font-family: 'Libre Baskerville', serif;
        font-size: 12px;
        line-height: 25px;
        font-weight: 300;
        color: #737373;
    }
}
&:hover .desc{
    top: 50%;
}
@media (max-width: 602px){
            margin-left: 50px;
        }
`
