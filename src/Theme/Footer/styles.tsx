import styled from 'styled-components'

export const Footer = styled.footer`

`

export const Topics = styled.div`
   padding: 50px 16px 30px 16px;
   background: #191919;
   background: -webkit-linear-gradient(to bottom, #404040, #191919);
   background: linear-gradient(to bottom, #404040, #191919);
   border-radius: 15% 15% 0% 0% / 5% 5%;
`

export const CopyRight = styled.div`
   padding: 16px;
   background-color: ${({ theme }) => theme.colors.dark};
   position: relative;
`

export const BannerWidget = styled.img`
   border-radius: 10px;
   max-width: 100%;
`