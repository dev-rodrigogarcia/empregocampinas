import React from 'react'
import { TitleSocialMedia, Card, Followers } from './styles'
import { Box } from '../Grid'
import { Facebook, Youtube, Instagram, Linkedin } from '../../Theme/Footer/Components/SocialMedia/styles'
import { Icon } from '../Icon'

const SocialMedia: React.FC = () => {

   return (
      <Box direction="column" mt={5}>
         <Box justify="flex-start" pl={15} pr={15}>
            <TitleSocialMedia>
               siga nossas redes sociais
            </TitleSocialMedia>
         </Box>

         <Box pl={15} pr={15} mb={10} justify="space-between" noMediaScreen>
            <Card>
               <Box>
                  <Facebook size={30} NotHover>
                     <Icon
                        className="fab fa-facebook-f"
                        color="white"
                        size={16}
                     />
                  </Facebook>

                  <Followers>
                     800 <br />
                     <span>
                        Curtidas
                     </span>
                  </Followers>
               </Box>
            </Card>

            <Card>
               <Box>
                  <Linkedin size={30} NotHover>
                     <Icon
                        className="fab fa-linkedin-in"
                        color="white"
                        size={16}
                     />
                  </Linkedin>

                  <Followers>
                     160 <br />
                     <span>
                        Conexões
                     </span>
                  </Followers>
               </Box>
            </Card>
         </Box>

         <Box pl={15} pr={15} mb={30} justify="space-between" noMediaScreen>
            <Card>
               <Box>
                  <Instagram size={30} NotHover>
                     <Icon
                        className="fab fa-instagram"
                        color="white"
                        size={16}
                     />
                  </Instagram>

                  <Followers>
                     1500 <br />
                     <span>
                        Seguidores
                     </span>
                  </Followers>
               </Box>
            </Card>

            <Card>
               <Box>
                  <Youtube size={30} NotHover>
                     <Icon
                        className="fab fa-youtube"
                        color="white"
                        size={16}
                     />
                  </Youtube>

                  <Followers>
                     250 <br />
                     <span>
                        Inscritos
                     </span>
                  </Followers>
               </Box>
            </Card>
         </Box>
      </Box>
   )
}

export { SocialMedia }