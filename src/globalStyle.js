import { createGlobalStyle } from "styled-components";
import bg from "./assets/image/bg-login.png";

export const GlobalStyle = createGlobalStyle`
  

body {
    color: #8f9bad;
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
}

:root{
    --yellow-main: #ffa323; 
    --green-main :#308d46;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --orange:#ff7800;
    --black:#130f40;
    --light-color:#666;
    --box-shadow:0 .5rem 1.5rem rgba(0,0,0,.1);
    --border:.2rem solid rgba(0,0,0,.1);
    --outline:.1rem solid rgba(0,0,0,.1);
    --outline-hover:.2rem solid var(--black);

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

  background-color: #f8f8f8;
}
input.input-border-bottom{
  border: none;
    outline: none;
    border-bottom: 1px solid #000;
    background: transparent;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 1.4;
    margin: 20px 0;
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
  .btn-confirm {
    background: #000;
    color: #fff;
    padding: 5px 20px;
    border-radius: 15px;
    cursor: pointer;
    label{
      cursor: pointer;
    }
  }

  /* modal thay doi avatar */
  .flex-10{
    flex-basis:10%;
  }
  .flex-15{
    flex-basis:15%;
  }
  .flex-20{
    flex-basis:20%;
  }
  .flex-25{
    flex-basis:25%;
  }
  .flex-30{
    flex-basis:30%;
  }
  .flex-40{
    flex-basis:40%;
  }
  .flex-50{
    flex-basis:50%;
  }
  .flex-60{
    flex-basis:60%;
  }
  .flex-70{
    flex-basis:70%;
  }
  .flex-80{
    flex-basis:80%;
  }
  .view-avatar .user-avatar{
      width: 200px;
      height: 200px;
      overflow: hidden;
      border-radius: 50%;
      display: flex;
      justify-content: center;
  }
  .view-avatar .user-avatar img {
        width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
  .alert {
    position: relative;
    padding: 0.3rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  .tfu-control{
    padding: 0.3rem 1rem;
    margin-left: 10px;
  }

  .user-phone-number {
    position: relative;
    display: flex;
    flex-direction: revert;
    justify-content: flex-end;
    margin-left: 10px;
}
.user-phone-number .phone_prefix {
    position: absolute;
    background: #f1f1f1;
    top: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    left: 1px;
    height: 38px;
    width: 11%;
    z-index: 0;
    border: 1px solid #aaa;
    display: flex;
    justify-content: center;
    align-items: center;
}
.user-info input.tfu-control {
    height: 38px;
    border: 1px solid #aaa;
    padding: 0 15px;
    border-radius: 5px;
}
.tfu-control.input-prefix {
    flex-basis: 90%;
}
/* ket thuc */
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
    .mapboxgl-marker{
      img{
        max-width: 30px;
      }
    }
`;
