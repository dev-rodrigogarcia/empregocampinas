import React from 'react'
import { TextField } from '../TextField'
import { SelectBox } from '../SelectBox'
import { Select } from '../types'
import { Card } from '../Card'
import { Button } from '../Button'
import { Box } from '../Grid/Box'
import { Text } from '../Text'

const cityOptions: Select[] = [
   { label: 'Campinas e Região', value: 'all' },
   { label: 'Campinas', value: 'Campinas' },
   { label: 'Piracicaba', value: 'Piracicaba' },
   { label: 'Valinhos', value: 'Valinhos' },
   { label: 'Vinhedo', value: 'Vinhedo' },
   { label: 'São Paulo', value: 'São Paulo' },
]

const FormSearch: React.FC = () => {

   return (
      <Card>
         <Box p={16}>
            <Text
               size={16}
               weight="medium"
               color="grayDark"
               align="justify"
            >
               Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
         </Text>
         </Box>
         <Box p={16}>
            <TextField
               label="Vaga"
               value={''}
               onChange={() => { }}
            />
         </Box>

         <Box p={16}>
            <SelectBox
               label="Cidade"
               value={
                  cityOptions.find(
                     city => city.value === 'all'
                  )
               }
               onChange={() => { }}
               options={cityOptions}
            />
         </Box>

         <Box p={16} justify="center" wrap="wrap">
            <Button variant="contained">
               Pesquisar
            </Button>

            <Button variant="outlined">
               Ver todas
            </Button>
         </Box>
      </Card >
   )
}

export { FormSearch }