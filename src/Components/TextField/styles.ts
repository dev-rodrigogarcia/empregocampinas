import styled from 'styled-components'

export const StyledInline = styled.span`
   display: block;
   margin-top: 20px;
`

export const FormGroup = styled.fieldset`
   margin: 12px 0 18px 0;
   display: block;
   padding: 0;
   border: none;
   position: relative;
   flex: 1 1 auto;

   label {
      position: absolute;
      pointer-events: none;
      color: ${({ theme }) => theme.colors.grayMedium};
      transition: all 250ms ease-out;

      span {
         color: ${({ theme }) => theme.colors.critical};
      }
   }

   .has-error {
      color: ${({ theme }) => theme.colors.critical}
   }
   
   & ~ ${StyledInline} {
      margin-left: 6px;
   }

`

export const CharacterCount = styled.span`
   font-size: 12px;
   line-height: 14px;
   overflow: hidden;
   letter-spacing: 0.9px;
   transition: all .3s cubic-bezier(.55,0,.55,.2);
   opacity: 1;
   margin-top: 0;
   padding-top: 5px;
   float: right;
`

export const TextFieldWrapper = styled.div`
   display: flex;
   width: 100%;

   ${StyledInline} {
      & ~ ${FormGroup} {
         margin-left: 6px;
      }
   }
`

export const Highlight = styled.div`
   position: absolute;
   left: 50%;
   top: 37px;
   bottom: 0;
   transform: translateX(-50%);
   height: 1px;
   transition: all 250ms ease-out;
   width: 0%;
   background-color: ${({ theme }) => theme.colors.primary};
`

export const Input = styled.input`
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

   ${p => p.disabled && `border-bottom: 1px dotted ${p.theme.colors.grayLight}`}

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
   font-size: 12px;
   width: 80%;
   padding-top: 3px;
`

export const Help = styled(BaseHelpers)`
   color: ${({ theme }) => theme.colors.grayMedium};
`

export const Error = styled(BaseHelpers)`
   color: ${({ theme }) => theme.colors.critical};
`
