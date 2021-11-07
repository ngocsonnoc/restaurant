import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsHandbag, BsSearch, BsMenuApp } from 'react-icons/bs'
import Badge from '@mui/material/Badge';




export const NavbarWrapper = styled.div`
width: 100%;
z-index: 100;
max-height: 80px;
min-height: 80px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
left: 0;
transition: all .3s ease-out;
-webkit-transition:all .3s ease-out;
background: ${({onScroll})=>onScroll?'#343a40':'transparent'};
@media (max-width: 992px){
${({ active }) => {
        if (active) {
            return `
        min-height: 500px;
        flex-direction: column;
        justify-content: center;
        `
        }
    }}
}
@keyframes cartWrapper{
   from{
       transform: scale(0);
   }
   to{
       transform: scale(1);
   }
}
@keyframes searchWrapper{
   from{
       transform: translateY(-30%);
   }
   to{transform:
    translateY(0%);
   }
}
`
export const MenuIcon = styled(BsMenuApp)`
display: none;
margin-right: 50px;
height: 25px;
width: 25px;
cursor: pointer;
color: #fff;
@media (max-width: 992px){
    display: block;
    margin-top: 20px;
    margin-right: 100px;
}
`
export const NavbarLogo = styled.div`
position: relative;
margin-left: 60px;
flex-grow: 1;
@media (max-width: 992px){
   
    position: fixed;
    top: 0px;
    left: 0;
   width: 100%;
   max-height: 80px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}
`
export const Logo = styled.img`
max-height: 100%;
width: 140px;
cursor: pointer;
@media (max-width: 992px){
    margin-top: 20px;
    max-height: 40px;
}
`
export const NavbarLink = styled.div`
position: relative;
display: flex;
justify-content: flex-start;
flex-grow: 3;
transition: all .3s ease-out;
@media (max-width: 992px){
    background-color: #343a40;
    width: 100%;
    transition: all .3s ease-out;
    align-items: center;
    ${({ active }) => {
        if (active) {
            return `
            display: flex;
            flex-direction: column;
            margin-top:80px;
            max-height: 250px;
        `
        } else {
            return `
            display: none;
            `
        }
    }}
    
}
`
export const NavbarRight = styled.div`
flex-grow: 2;
max-width: 200px;
margin-right: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

@media (max-width: 992px){
    background-color: #343a40;
    max-width: 100%;
    width: 100%;
    margin-right: 0;
    padding-bottom: 20px;
    ${({ active }) => {
        if (active) {
            return `
            display: flex;
            flex-direction: column;
            margin-top:20px;
            margin-bottom:50px;
            margin-top:0;
            max-height:125px;
        `
        } else {
            return `
            display: none;
            `
        }
    }}
    
}
`
export const Link = styled(NavLink)`
color: ${({ active }) => active ? 'red' : '#fff'};
margin-top: 10px;
font-family: 'Montserrat', sans-serif;
font-weight: 500;
font-size: 18px;
@media (max-width: 992px){
    color: ${({ active }) => active ? 'red' : '#ffff'};
}
`
export const ItemWrap = styled.div`
width: 100px;
height: 100%;
text-align: center;
position: relative;
@media (max-width: 992px){
    margin-top: 20px ;
    color: ${({ active }) => active ? 'red' : '#ffff'};
}
`
export const BagIcon = styled(BsHandbag)`
width: 100%;
height: 100%;
position: relative;

`
export const BagBadge = styled(Badge)`
height: 30px;
width: 30px;
cursor: pointer;
font-size: 19px;
color: #fff;
@media (max-width: 992px){
    color: #ffff;
}
`
export const SearchIcon = styled(BsSearch)`
height: 25px;
width: 25px;
cursor: pointer;
color: #fff;
@media (max-width: 992px){
    display: none;
}
`
export const SearchWrapper = styled.div`
position: absolute;
left: 30%;
top: 110px;
height: 44px;
display: ${({ search }) => search ? 'flex' : 'none'};
align-items: center;
justify-content: center;
margin: auto;
width: 500px;
background: #fff;
border: 2px solid rgb(0,128,128);
transform-origin: top bottom;
animation: searchWrapper .1s ease-in;
@media (max-width: 992px){
    position: relative;
    display: flex;
    margin: 0;
    top: 0;
    width: 400px;
    left: 0%;
}
`
export const Search = styled.input`
height: 100%;
border: none;
outline: none;
width: 80%;
font-size: 16px;
`
export const LanguageWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const Language = styled.select`
height: 18px;
width: 40px;
font-size: 12px;
margin-right: 2px;
`
export const Flag = styled.img`
height: 15px;
width: 25px;
`
export const CartWrapper = styled.div`
position: absolute;
z-index: 10;
width: 330px;
height: 500px;
top: 50px;
right: 0px;
display: none;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border: 2px solid rgb(0,128,128);
transition: all .3s;
transform-origin: top right;
animation: cartWrapper ease-in .2s;
background: #fff;
${BagBadge}:hover &{
    display: flex;
    @media (max-width: 992px){
        display: none;
    }

}
.bridge{
    position: absolute;
    width: 300px;
    height: 40px;
    right: -10px;
    top: -40px;
}
`
export const CartContent = styled.div`
width: 100%;
height: 355px;
overflow-y: scroll;
`
export const CartHeader = styled.h2`
width: 100%;

text-align: center;
padding-top:20px;
padding-bottom:20px;
background: rgb(0,128,128);
color: #fff;
`
export const CartItem = styled.div`
width: 100%;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
margin: 14px 0px;
`
export const ItemImg = styled.img`
width: 80px;
height: 50px;

`
export const ItemName = styled.p`
color: #000;
`
export const ItemPrice = styled.p`
color: #000;
`
export const ItemQty = styled.p`
color: #f7c400;
`
export const CartFooter = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding-top: 20px;
padding-bottom: 23px;
background: rgb(0,128,128);
`
export const CartPrice = styled.h3`
`
export const CartLinkWr = styled.div`
width:100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`
export const CartLink = styled(Link)`
color: #fff;
`
export const Message = styled.h4`
text-align: center;
margin-top: 100px;
`
