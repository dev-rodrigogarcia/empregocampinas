import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavBar = styled.nav`
   background: #06beb6;
   background: -webkit-linear-gradient(to right, #4aa8b5, #06beb6);
   background: linear-gradient(to right, #4aa8b5, #06beb6);

   box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.colors.grayMedium};
`

export const UL = styled.ul`
   list-style-type: none;
   margin: 0;
   padding: 0;
   overflow: hidden;
`

export const LI = styled.li`
   float: left;
   min-width: 101px;
`

export const Link = styled(NavLink)`
   height: 60px;
   display: block;
   color: white;
   text-align: center;
   padding: 16px;
   text-decoration: none;
   font-size: 18px;

   &:hover {
      text-decoration: none;
      background: rgba(0, 0, 0, 0.05);
      text-decoration: none;
   }

   &.active {
      background: rgba(0, 0, 0, 0.05);
      text-decoration: none;
      border-left: 3px solid;
      border-right: 3px solid;
      border-color: rgba(0,0,0,0.05);
      font-weight: 600;
   }
`

export const BoxSearch = styled.div`
   background: rgba(255,255,255, 0.9);
   border: 0;
   height: 40px;
   border-radius: 18px;
   padding: 0 20px;
   font-size: 16px;
`

export const Search = styled.input`
   background: rgba(255,255,255, 0);
   border: 0;
   height: 40px;
   font-size: 15px;
`

export const Icon = styled.em`
   padding-left: 10px;
   cursor: pointer;

   background: ${({ theme }) => theme.colors.primary};
   height: 30px;
   width: 30px;
   padding: 6px;
   margin-left: 10px;
   margin-right: -15px;
   border-radius: 20px;
   color: ${({ theme }) => theme.colors.white};
   user-select: none;

   &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
   }

   &:active {
      font-size: 14px;
      padding: 8px;
   }
`