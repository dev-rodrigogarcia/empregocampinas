import styled from 'styled-components'

export const ImgStyled = styled.img<{ w: number }>`
   max-width: ${({ w }) => w}px;
   height: auto;
`