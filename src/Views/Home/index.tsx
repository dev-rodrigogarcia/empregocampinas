import React from 'react'
import { Banner } from '../../Components/Banner'
import { Container } from '../../Components/Container'
import Jobs from '../../assets/img/design-jobs.png'
import { Box } from '../../Components/Grid/Box'
import { FormSearch } from '../../Components/FormSearch'
import { Card } from '../Home/Card'
import { Row, Col } from '../../Components/Grid'
import { Subhead } from './Subhead'
import { Button } from '../../Components/Button'
import { BannerWidget } from '../../Theme/Footer/styles'
import BannerSquared from '../../assets/img/banner2.jpg'
import { SocialMedia } from '../../Components/SocialMedia'

const Home: React.FC = () => {
   return (
      <>
         <Banner>
            <Container>
               <Box justify="space-between" items="center">
                  <Box>
                     <FormSearch />
                  </Box>

                  <Box>
                     <div className="new_startup_img d-flex justify-content-sm-center">
                        <img width="500" height="310" src={Jobs} alt="application" />
                     </div>
                  </Box>
               </Box>
            </Container>
         </Banner>
         <br />
         <br />
         <Container>
            <Row>
               <Col>
                  <Subhead
                     text="Vagas Recentes"
                     bgText="#vaiqueésua"
                     description="Confira as últimas vagas nas principais empresas de Campinas e região e candidate-se gratuitamente."
                  />
               </Col>

               <Col lg={8} md={8}>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />

                  <Box justify="center" mt={30} mb={20}>
                     <Button
                        variant="contained"
                     >
                        Ver todas
                  </Button>
                  </Box>
               </Col>

               <Col lg={4} md={4}>
                  <Box justify="flex-end" direction="column" mt={15} style={{ position: 'sticky', top: '75px' }}>
                     <SocialMedia />
                     <BannerWidget src={BannerSquared} alt="parceiro" />

                     <br />

                     <BannerWidget src={BannerSquared} alt="parceiro" />

                     <br />
                     <br />
                     <br />
                     <br />
                  </Box>
               </Col>
            </Row>
         </Container>
         <br />
         <br />

      </>
   )
}

export { Home }