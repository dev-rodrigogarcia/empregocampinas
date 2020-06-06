import styled from 'styled-components'

export const SubheadContent = styled.div`
   float: left;
   width: 100%;
   position: relative;
   padding-bottom: 30px;
`

export const SubheadText = styled.h2`
   float: left;
   width: 100%;
   text-align: center;
   color: #697891;
   font-size: 34px;
   font-weight: 800;
   position: relative;
`

export const SubheadBgText = styled.div`
   position: absolute;
   width: 100%;
   text-align: center;
   left: 0;
   top: -10px;
   font-size: 64px;
   opacity: 0.18;
   z-index: -1;
   letter-spacing: -2px;
   text-transform: uppercase;
   font-weight: 900;
   font-family: 'Raleway', sans-serif;
   color: #4DB7FE;

   &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(255,255,255,0.95) 100%);
   }
`

export const Separator = styled.span`
   float: left;
   width: 100%;
   position: relative;
   margin: 20px 0;

   &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      height: 3px;
      margin-left: -25px;
      width: 50px;
      border-radius: 3px;
      z-index: 2;
      background: #4DB7FE;
   }
`

export const Description = styled.p`
   color: #7d93b2;
   font-size: 13px;
   line-height: 20px;
   max-width: 550px;
   margin: 0 auto;
   text-align: center;
`