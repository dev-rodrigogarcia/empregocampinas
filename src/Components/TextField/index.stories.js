import React, { useState } from 'react'
import {ThemeProvider as Wrapper} from './../../ThemeProvider'
import { TextField } from './index'



export default { title: 'TextField', component: TextField }

export const defaultTextInput = () => {

    const [value, setValue] = useState('')
    return (  
        <Wrapper>
           <TextField value={value} onChange={e=> setValue(e.target.value)} label="Say Hello" type="text" />
       </Wrapper>
   )
}

export const disabled = () => (
    <Wrapper>
        <TextField value="Hello Brazil" label="Say Hello" type="text" disabled/>
    </Wrapper>
)

export const required = () => (
    <Wrapper>
        <TextField value="Hello Brazil" label="Say Hello" type="text" required/>
    </Wrapper>
)


export const error = () => (
    <Wrapper>
        <TextField value="Hello Brazil" label="Say Hello" type="text" error="Invalid data"/>
    </Wrapper>
)

export const help = () => (
    <Wrapper>
        <TextField value="Hello Brazil" label="Say Hello" type="text" help="Insert a valid param"/>
    </Wrapper>
)




