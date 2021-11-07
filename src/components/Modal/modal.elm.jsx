import styled from 'styled-components';
export const BackDrop = styled.div`
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 30;
  img{
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
    border: 3px solid white;
}
@media (max-width:602px){
    img{
        max-width: 90%;
    }
}
`