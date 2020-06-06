import React from 'react'
import { SubheadText, SubheadBgText, SubheadContent, Separator, Description } from './styles'

interface SubheadContext {
   text: string
   description?: string
   bgText?: string
}

const Subhead: React.FC<SubheadContext> = ({ text, description, bgText }) => {
   return (
      <SubheadContent>
         <SubheadText>
            {text}
         </SubheadText>

         {
            bgText &&
            <SubheadBgText>
               {bgText}
            </SubheadBgText>
         }

         <Separator />

         {
            description &&
            <Description>
               {description}
            </Description>
         }
      </SubheadContent>
   )
}

export { Subhead }