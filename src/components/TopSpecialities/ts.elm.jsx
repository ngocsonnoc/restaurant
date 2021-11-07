import styled from 'styled-components';
export const TopSpecialWrapper = styled.div`
min-height: 100vh;
height: auto;
padding-top: 40px;

.text{
    display: flex;
    flex-direction: column;
    margin-right: 200px;
    padding-bottom: 40px;
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
        margin-top: 0;
        color: #4C4C4C;
    }
    @media (max-width:602px){
    margin-right: 20px;
    padding-top: 30px;  
    }
}
`
export const Header = styled.div`
display: flex ;
flex-direction: row;
width: 80%;
margin-left: 100px;
@media (max-width:602px){
    flex-direction: column;
    width: 80%;
}
`
export const Button = styled.button`
    padding: 0px 10px;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 12px;
    background-color: #525252;
    color: #fff;
    height: 40px;
    cursor: pointer;
    border: none;
    outline: none;
    margin-top: 15px;
    @media (max-width:602px){
        max-width: 200px;
        margin-bottom: 30px;
    }
`
export const ImageGrid = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 90%;
margin: auto;
justify-content: center;
align-items: center;
`
