import styled, { css } from 'styled-components'
import { scrollBar } from '../scrollBar'
import { Select } from '../types'

export const FormGroup = styled.fieldset`
   margin: 12px 0 18px 0;
   padding: 0;
   border: none;
   position: relative;
   width: 100%;

   label {
      position: absolute;
      pointer-events: none;
      color: ${({ theme }) => theme.colors.grayMedium};
      transition: all 250ms ease-out;

      span {
         color: ${({ theme }) => theme.colors.critical};
      }
   }
`

export const Arrow = styled.div`
   position: absolute;
   right: 6px;
   bottom: 16px;
   border-width: 4px 4px 0 4px;
   border-style: solid;
   border-color: ${({ theme }) =>
      `${theme.colors.grayMedium} transparent transparent transparent;`};
`

export const Delete = styled.div<{ show: boolean }>`
   display: ${({ show }) => (show ? 'inline' : 'none')};
   & button {
      position: absolute;
      bottom: 0;
      right: 24px;
      svg {
         width: 12px;
         height: 12px;
      }
   }
`

export const ValueIcon = styled.img`
   width: 26px;
   height: 26px;
   border-radius: 13px;
   position: absolute;
   left: 0;
   bottom: 6px;
`

export const SvgIcon = styled.div<{ isInput?: boolean }>`
   svg {
      width: 26px;
      height: 26px;
      border-radius: 26px;
      ${({ isInput }) => isInput && css`
         position: absolute;
         left: 0;
         bottom: 6px;
      `}

      background-color: ${({ theme }) => theme.colors.primary};
      fill: #fff;
      padding: 3px;

      margin-right: 6px;
      display: flex;
   }
`

export const Highlight = styled.div`
   position: absolute;
   left: 50%;
   bottom: 0;
   transform: translateX(-50%);
   height: 1px;
   transition: all 250ms ease-out;
   width: 0%;
   background-color: ${({ theme }) => theme.colors.primary};
`

export const Input = styled.input<{ option: Select }>`
   background-color: transparent;
   color: ${({ theme }) => theme.colors.grayDark};
   font-family: ${({ theme }) => theme.typography.fontFamily};
   font-size: 16px;
   width: 100%;
   height: 38px;
   display: flex;
   align-items: center;
   border: none;
   border-bottom: ${({ theme }) => `1px solid ${theme.colors.grayLight}`};
   ${p => p.disabled && `border-bottom: 1px dotted ${p.theme.colors.grayLight}`};
   ${p => p.option.icon && `padding-left: 32px`};

  &:focus {
      outline: none;
   }

   &[value=''] ~ label {
      font-size: 14px;
      left: 0;
      top: 9px;
   }

   &[value=''] ~ ${Highlight} {
      width: 0%;
   }

   &:focus ~ ${Highlight} {
      width: 100%;
   }

   &[value='']
      ~ ${Highlight}.has-error,
      &:focus
      ~ ${Highlight}.has-error,
      &
      ~ ${Highlight}.has-error {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.critical};
   }

   &:focus ~ label,
   & ~ label {
      top: -14px;
      font-size: 12px;
   }
`

const BaseHelpers = styled.p`
   position: absolute;
   left: 0;
   bottom: -18px;
   font-size: 12px;
`

export const Help = styled(BaseHelpers)`
   color: ${({ theme }) => theme.colors.grayMedium};
`

export const Error = styled(BaseHelpers)`
   color: ${({ theme }) => theme.colors.critical};
`

interface OptionsContentProps {
   open: boolean
   width: number
}

export const OptionsContent = styled.div<OptionsContentProps>`
   display: ${({ open }) => (open ? 'block' : 'none')};
   position: absolute;
   width: ${({ width }) => width + 'px'};
   min-width: 80px;
   background-color: ${({ theme }) => theme.colors.white};
   padding: 0 0 6px 0;
   border-radius: 0 0 4px 4px;
   border-style: solid;
   border-width: 1px;
   border-top: none;
   z-index: ${({ theme }) => theme.zIndex.dropdown};
   border-color: ${({ theme }) => theme.colors.primary};
   & div {
      max-height: 240px;
      overflow-x: auto;
      ${scrollBar}
   }
`
