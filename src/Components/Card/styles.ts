import styled from 'styled-components'

export const StyledCard = styled.div<{ h?: number | string }>`
   width: 100%;
   max-width: 460px;
   height: ${({ h }) => h ? `${h}px` : 'auto'};
   padding: 20px;
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.white};
   color: ${({ theme }) => theme.colors.grayMedium};
   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
   border: 1px solid ${({ theme }) => theme.colors.grayLight};
   border-radius: 12px;
   transition: all 250ms ease;

   &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
   }
`

export const StyledCardHeader = styled.div`
   width: 100%;
   margin-bottom: 25px;
   word-break: break-all;
`

export const StyledCardTitle = styled.h3`
   color: ${({ theme }) => theme.colors.grayDark};
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 8px;
   word-break: break-all;
   cursor: pointer;
   &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
   }
`

export const StyledCardText = styled.p`
   color: ${({ theme }) => theme.colors.grayMedium};
   font-size: 14px;
   text-align: justify;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
`

export const StyledCardActions = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   word-break: break-all;
   text-align: justify;
`
