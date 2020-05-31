import React from 'react'
import { Box } from '../Grid/Box'
import { ImgStyled } from './styles'
import logo from '../../assets/img/logo-emprego-campinas.png'
import ADS from '../../assets/img/header-banner.jpg'

const Logo: React.FC = () => (
   <Box pt={20} pb={20} justify="space-between">
      <ImgStyled src={logo} w={220} />
      <ImgStyled src={ADS} w={731} />
   </Box>
)

export { Logo }