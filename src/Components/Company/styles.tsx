import styled from 'styled-components'
import BG from '../../assets/img/image-section-company.png'

export const CompanyContainer = styled.section`
   padding: 110px 0;
   overflow: hidden;
   background-image: url(${BG});
   background-size: cover;
   background-position: center;
   margin-bottom: -40px;
   border-radius: 5% 5% 0% 0% / 5% 5%;
`

export const Text = styled.h4`
   font-size: 16px;
   color: #fff;
   padding-bottom: 20px;
   text-align: center;
`

export const TextMain = styled.h2`
   font-size: 24px;
   font-weight: 800;
   color: #fff;
   font-family: 'Raleway', sans-serif;
   text-align: center;
   padding: 0 16px;
`

export const Overlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: #000;
   opacity: 0.5;
   z-index: 2;
`