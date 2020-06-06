import styled, { css } from 'styled-components'

export const BoxSocial = styled.div<{ size?: number; NotHover?: boolean }>`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100%;
   width: ${({ size }) => size ? size : '45'}px;
   height: ${({ size }) => size ? size : '45'}px;
   margin: 5px;
   cursor: pointer;

   &:hover {
      ${({ NotHover }) => !NotHover && css`background-color: rgba(255,255,255,0.1)`};
   }
`
export const Facebook = styled(BoxSocial)`
   background: #3B5998;
   color: white;
`
export const Instagram = styled(BoxSocial)`
   background: #125688;
   color: white;
`
export const Linkedin = styled(BoxSocial)`
   background: #007bb5;
   color: white;
`
export const Youtube = styled(BoxSocial)`
   background: #bb0000;
   color: white;
`