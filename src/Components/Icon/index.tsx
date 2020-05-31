import styled from 'styled-components'
import { themeSettings } from '../../Theme/theme-settings'

interface Props {
   color: keyof typeof themeSettings.colors
   size: number
}

export const Icon = styled.em<Props>`
   color: ${({ color, theme }) => theme.colors[color]};
   font-size: ${({ size }) => size}px;
`