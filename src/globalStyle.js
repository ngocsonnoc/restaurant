import { createGlobalStyle } from "styled-components";
import bg from "./assets/image/bg-login.png";

export const GlobalStyle = createGlobalStyle`
  
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root{
    --yellow-main: #ffa323; 
    --green-main :#308d46;
}
   * {
  margin: 0;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}
button {
  font-family: 'Montserrat', sans-serif;
}
body {
  font-family: 'Montserrat', sans-serif;
  background-color: #f8f8f8;
}
input.input-border-bottom{
  border: none;
    outline: none;
    border-bottom: 1px solid #000;
    background: transparent;
}
h1, h3 {
    font-family: 'Oswald', sans-serif;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
  width: 95%;
}
.flex-basis-50{
  flex-basis:50% !important;
}
.hr-title{
  width: 90%;
  height: 2px;
}
.btn {
  font-size: 1.2rem;
    padding: 0.1rem 2rem;
    border-radius: 5rem;
    margin-top: 1rem;
    background: none;
    color: #333;
    cursor: pointer;
    border: 0.2rem solid var(--yellow-main);
}
.btn:hover{
    background:var(--yellow-main);
    color:#fff;
}
section{
    min-height: 100vh;
    padding:1rem 10%;
    padding-top: 2.5rem;
}
.heading {
    text-align: center;
    font-size: 3rem;
    padding: 0 0.5rem;
    color: #333;
    font-weight: bold;
}
.login-container{
    background-image: url(${bg});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-family: "Raleway", sans-serif;
    }
    .alert-text{
        text-transform: lowercase;
    font-size: 1rem;
    }
    .w-60{
        width: 60% !important;
    }
    @media screen and ( max-width:760px){
      .heading {
          font-size: 2rem;
      }
      section{
        padding: 1rem 5%;
      }
    }
    .special-button{
      background: var(--yellow-main);
  color: #fff;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  text-decoration: none;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
    }
`;
