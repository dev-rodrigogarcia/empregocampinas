import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Roboto:400,500,700&display=swap');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  } 

  *:focus {
    outline: 0;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.typography.fontFamily};
    color: ${props => props.theme.colors.grayDark};
    font-weight: 400;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    letter-spacing: .1px;
    text-rendering: optimizeLegibility;
  }
  @media (max-width: 991px){
    body, html {
        overflow-x: auto;
    }
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary}
  }

  
  .row {
    > div{
        padding-right:10px;
        padding-left:10px;
      }
  }

  .ps__rail-y {
    z-index: 3;
  }

  tspan {
    font-size: 13px;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #e9e9e9;
  }
 
  ::-webkit-scrollbar-track {
    border-radius: 0px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #b6b6b6;
    border-radius: 10px;
  }
 
  ::-webkit-scrollbar-thumb:hover {
    background: #555555; 
  }


.row-style {
   height: 100%;
   align-items: center;
}

.new_startup_content .app_btn {
   background: #fff;
   border-color: #fff;
   color: #503365;
   -webkit-box-shadow: 0 20px 20px 0 rgba(0,11,40,.1);
   box-shadow: 0 20px 20px 0 rgba(0,11,40,.1);
   padding-top: 10px;
   padding-bottom: 10px;
   -webkit-box-shadow: none;
   box-shadow: none;
   text-decoration: none;
}

.new_startup_img > img {
   max-width: 100%;
   height: auto;
}

.app_btn {
   -webkit-box-shadow: 0 20px 30px 0 rgba(12,0,46,.1);
   box-shadow: 0 20px 30px 0 rgba(12,0,46,.1);
   background-color: #503365;
   display: inline-block;
   padding: 14px 40px;
   border-radius: 45px;
   border: 1px solid #503365;
}

.new_startup_content h2 {
   font-size: 50px;
   line-height: 58px;
}

.new_startup_content p {
   font-size: 18px;
}

.btn_hover:hover {
   color: #c34f6c;
}
`

export { GlobalStyle }
