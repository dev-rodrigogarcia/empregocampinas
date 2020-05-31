import React from 'react'
import { TextField } from '.'
import { ThemeProvider } from '../../ThemeProvider'
import { render } from '@testing-library/react'

import { fireEvent } from '@testing-library/dom'

describe('<TextField/>', () => {
   it('render and show correct label pass by props', () => {
      const { getByText } = render(
         <ThemeProvider>
            <TextField type="text" value="1" label="Hello Brazil" onChange={() => { }} />
         </ThemeProvider>,
      )

      expect(getByText('Hello Brazil')).toBeTruthy()
   })

   it('show correct help text', () => {
      const { getByText } = render(
         <ThemeProvider>
            <TextField
               type="text"
               value="1"
               help="Hello Brazil help"
               label="Hello Brazil"
               onChange={() => { }}
            />
         </ThemeProvider>,
      )

      expect(getByText('Hello Brazil help')).toBeTruthy()
   })

   it('show correct message error', () => {
      const { getByText, getByRole } = render(
         <ThemeProvider>
            <TextField
               type="text"
               value="1"
               error="Hello Brazil error"
               label="Hello Brazil"
               onChange={() => { }}
            />
         </ThemeProvider>,
      )

      fireEvent.blur(getByRole("textbox"))

      expect(getByText('Hello Brazil error')).toBeTruthy()
   })
})
