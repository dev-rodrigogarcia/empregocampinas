import React from 'react'
import {
   Footer as FooterStyled,
   CopyRight,
   Topics,
   BannerWidget,
} from './styles'
import { Text } from '../../Components/Text'
import { Container } from '../../Components/Container'
import { Row, Col, Box } from '../../Components/Grid'
import imgBanner from '../../assets/img/widget-banner.jpg'
import { Icon } from '../../Components/Icon'
import { SocialMedia } from './Components/SocialMedia'
import { Divider } from './Components/Divider'

const Footer: React.FC = () => {

   return (
      <FooterStyled>
         <Topics>
            <Container>
               <Row size={100} noGutter>
                  <Col xs={12} sm={6} md={6} lg={6}>
                     <Text
                        color="white"
                        weight="bold"
                        size={24}
                        align="left"
                     >
                        Sobre nós
                     </Text>
                     <br />

                     <Text
                        color="white"
                        weight="medium"
                        size={13}
                        align="justify"
                     >
                        A propriedade Hidden Hills, com vista para a montanha
                        e a cidade, possui nove quartos, incluindo uma suíte master com
                        terraço privativo e entretenimento. asa que inclui um teatro de 20 lugares.
                     </Text>

                     <br />
                     <Divider />
                     <br />

                     <Box>
                        <Icon
                           size={22}
                           color="primary"
                           className="far fa-envelope"
                        />
                        &nbsp;&nbsp;
                        <Text
                           color="white"
                           weight="medium"
                           size={15}
                           align="justify"
                        >
                           contato@empregocampinas.com.br
                        </Text>
                     </Box>

                     <SocialMedia />
                  </Col>

                  <Col xs={12} sm={6} md={6} lg={6}>
                     <Box justify="flex-end">
                        <BannerWidget src={imgBanner} alt="parceiro footer" />
                     </Box>
                  </Col>
               </Row>
            </Container>
         </Topics>

         <CopyRight>
            <Container>
               <Text
                  color="white"
                  weight="medium"
                  size={14}
                  align="center"
               >
                  © 2020, Emprego Campinas - Oportunidades de emprego em Campinas e Região. All rights reserved.
               </Text>
            </Container>
         </CopyRight>
      </FooterStyled>
   )
}

export { Footer }