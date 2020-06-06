import styled from 'styled-components'

export const Container = styled.article`
   border-radius: 15px;
   background: ${({ theme }) => theme.colors.white};
   border: 1px solid ${({ theme }) => theme.colors.grayLight};
   margin: 15px;
`

export const Header = styled.div`
   padding: 16px;
   border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
`

export const Body = styled.div`
   padding: 16px;
`

export const Footer = styled.div`
   padding: 10px 20px;
   border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
`

export const Title = styled.h3`
   font-weight: 600;
   font-size: 16px;
   margin-bottom: 3px;
   color: ${({ theme }) => theme.colors.grayDark};
`

export const Subhead = styled.span`
   color: ${({ theme }) => theme.colors.primaryHover};
   font-size: 13px;
   font-weight: 500;
`

export const Description = styled.p`
   font-size: 12px;
   color: ${({ theme }) => theme.colors.grayMedium};
   font-weight: 500;
   padding-bottom: 10px;
   line-height: 24px;
   text-align: justify;
`

export const Tag = styled.span`
   margin-right: 10px;
   color: #FFF;
   font-weight: 700;
   font-size: 12px;

   padding: 5px 10px;
   background-color: #566985;
   border-radius: 15px;
`