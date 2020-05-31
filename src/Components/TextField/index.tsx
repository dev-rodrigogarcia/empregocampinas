import React, { FunctionComponent, forwardRef, useState } from 'react'

import {
   FormGroup,
   Input,
   Error,
   Help,
   Highlight,
   TextFieldWrapper,
   StyledInline,
   CharacterCount,
} from './styles'
import { Arrow } from '../SelectBox/styles'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
   /**
    * The label element represents a label which can be associated to a form control, and is supposed to provide a short description for it.
    */
   label: string
   error?: string
   help?: string
   isDropDown?: boolean
   maxlength?: number
   append?: InlineProps['content']
   prepend?: InlineProps['content']
   /**
    * Refs provide a way to access DOM nodes or React elements.
    */
   ref?: React.Ref<HTMLInputElement>
   /**
   * Test property, sometimes you can't reliably select an element by any of the other queries. For those, it's recommended to use data-testid
   */
   ['data-testid']?: string
}

interface InlineProps {
   content: string | React.ReactNode
}

const TextField: FunctionComponent<TextFieldProps> = forwardRef(
   (
      {
         label,
         error,
         maxlength,
         help,
         isDropDown,
         required,
         prepend,
         append,
         onBlur,
         ...rest
      },
      ref: React.Ref<HTMLInputElement>,
   ) => {
      const [touched, setTouched] = useState(false)

      const blurHandle = (e: React.FocusEvent<HTMLInputElement>) => {
         setTouched(true)
         onBlur?.(e)
      }

      return (
         <TextFieldWrapper>
            {prepend && <Inline content={prepend} />}
            <FormGroup>
               <Input {...rest} ref={ref} onBlur={blurHandle} />
               <label htmlFor={rest.name}>
                  {label}
                  {required && <span> *</span>}
               </label>
               <Highlight className={error && touched ? 'has-error' : ''} />
               {help && <Help>{help}</Help>}
               {touched && error && (
                  <Error className="error-label">{error}</Error>
               )}
               {maxlength && (
                  <CharacterCount
                     className={error && touched ? 'has-error' : ''}
                  >
                     {String(rest.value).length}/{maxlength}
                  </CharacterCount>
               )}
               {
                  isDropDown && <Arrow />
               }
            </FormGroup>
            {append && <Inline content={append} />}
         </TextFieldWrapper>
      )
   },
)

const Inline: FunctionComponent<InlineProps> = ({ content }) => {
   if (typeof content === 'string') {
      return <StyledInline>{content}</StyledInline>
   }
   return <>{content}</>
}

export { TextField }
