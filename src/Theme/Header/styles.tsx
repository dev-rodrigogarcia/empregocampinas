import styled from 'styled-components'

export const TagHeader = styled.header`
   position: sticky;
   top: 0;
   z-index: ${({ theme }) => theme.zIndex.sticky};
`