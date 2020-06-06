import React from 'react'
import { CompanyContainer, Text, TextMain } from './styles'
import { Container } from '../Container'
import { Button } from '../Button'
import { Box } from '../Grid'

const Company: React.FC = () => {

   return (
      <CompanyContainer>
         <Container>
            <Text>
               UM AJUDA O OUTRO A CRESCER!
            </Text>

            <TextMain>
               Sua empresa está com vagas abertas? <br />
               Divulgue conosco e ajude profissionais da nossa região. <br />
               É totalmene grátis.
            </TextMain>

            <Box justify="center" mt={30}>
               <Button
                  variant="contained"
               >
                  Divulgar
            </Button>
            </Box>
         </Container>
      </CompanyContainer>
   )
}

export { Company }