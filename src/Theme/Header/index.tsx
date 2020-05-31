import React from 'react'
import { TagHeader } from './styles'
import { Logo } from '../../Components/Logo'
import { Container } from '../../Components/Container'
import { NavBar, UL, LI, Link, Search, BoxSearch, Icon } from '../../Components/NavBar'
import { Box } from '../../Components/Grid/Box'

const Routes = [
   {
      title: 'Início',
      config: {
         to: '/',
         activeClassName: 'active',
         exact: true,
      }
   },
   {
      title: 'Vagas',
      config: {
         to: '/vagas',
         activeClassName: 'active',
         exact: true,
      }
   },
   {
      title: 'Contato',
      config: {
         to: '/contato',
         activeClassName: 'active',
         exact: true,
      }
   }
]

const Header: React.FC = () => (
   <>
      <Container>
         <Logo />
      </Container>

      <TagHeader>
         <NavBar>
            <Container>
               <Box justify="space-between" items="center">
                  <UL>
                     {
                        Routes.map(
                           (route, idx) => (
                              <LI key={`key-${idx}`}>
                                 <Link {...route.config}>
                                    {route.title}
                                 </Link>
                              </LI>
                           )
                        )
                     }
                  </UL>

                  <BoxSearch>
                     <Search
                        placeholder="Ex: Auxiliar administrativo"
                     />
                     <Icon className="fas fa-search" />
                  </BoxSearch>
               </Box>
            </Container>
         </NavBar>
      </TagHeader>
   </>
)

export { Header }