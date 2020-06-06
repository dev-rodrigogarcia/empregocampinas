import React from 'react'
import * as C from './styles'
import { Box } from '../../../Components/Grid'

interface CardContext {
   vacancy: any
}

const Card: React.FC = () => {

   return (
      <C.Container>
         <C.Header>
            <C.Title>
               Nutricionista
            </C.Title>

            <C.Subhead>
               <em className="fas fa-map-marker-alt"></em>
               &nbsp;
               Campinas e região - SP
            </C.Subhead>
         </C.Header>

         <C.Body>
            <C.Description>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </C.Description>
         </C.Body>

         <C.Footer>
            <Box>
               <C.Tag>
                  CLT
               </C.Tag>

               <C.Tag>
                  PCD
               </C.Tag>

               <C.Tag>
                  REMOTO
               </C.Tag>
            </Box>
         </C.Footer>
      </C.Container>
   )
}

export { Card }