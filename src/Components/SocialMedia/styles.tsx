import styled from 'styled-components'
import { Card as CopyCard } from '../Card'

export const TitleSocialMedia = styled.h2`
   margin: 0px;
   padding: 10px 15px;
   letter-spacing: 0.64px;
   color: #000;
   line-height: 25px;
   font-weight: 800;
   font-size: 16px;
   text-transform: uppercase;
   position: relative;

   &::before {
      position: absolute;
      top: 0;
      content: "";
      background: #000;
      left: 0;
      width: 3px;
      height: 12px;
   }

   &::after {
      position: absolute;
      top: 0;
      content: "";
      background: #000;
      left: 0;
      width: 12px;
      height: 3px;
   }
`

export const Card = styled(CopyCard)`
   width: 48%;
   padding: 5px;
`

export const Followers = styled.span`
   font-size: 16px;
   display: block;
   line-height: 14px;
   padding: 1px 0;
   font-weight: 600;
   padding-left: 5px;

   span {
      font-size: 12px;
   }
`