import React from 'react'
import { Box } from '../../../../Components/Grid'
import {
   Facebook,
   Instagram,
   Linkedin,
   Youtube
} from './styles'
import { Icon } from '../../../../Components/Icon'

const SocialMedia: React.FC = () => {
   return (
      <Box pt={30} pb={20} wrap="wrap">
         <Facebook>
            <Icon
               className="fab fa-facebook-f"
               color="white"
               size={25}
            />
         </Facebook>

         <Linkedin>
            <Icon
               className="fab fa-linkedin-in"
               color="white"
               size={25}
            />
         </Linkedin>

         <Instagram>
            <Icon
               className="fab fa-instagram"
               color="white"
               size={25}
            />
         </Instagram>

         <Youtube>
            <Icon
               className="fab fa-youtube"
               color="white"
               size={25}
            />
         </Youtube>
      </Box>
   )
}

export { SocialMedia }