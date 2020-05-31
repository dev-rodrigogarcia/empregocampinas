import React from 'react'
import { Banner } from '../../Components/Banner'
import { Container } from '../../Components/Container'
import Jobs from '../../assets/img/design-jobs.png'
import { Box } from '../../Components/Grid/Box'
import { FormSearch } from '../../Components/FormSearch'

const Home: React.FC = () => {
   return (
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
   )
}

export { Home }