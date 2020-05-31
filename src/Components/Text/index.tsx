import styled, { css } from 'styled-components'
import { themeSettings } from '../../Theme/theme-settings'

enum TextTransform {
   'uppercase' = 'uppercase',
   'lowercase' = 'lowercase',
}

enum TextAlign {
   'left' = 'left',
   'center' = 'center',
   'right' = 'right',
   'justify' = 'justify',
   'flex-end' = 'flex-end',
}

enum FontWeight {
   'notWeight' = 100,
   'medium' = 500,
   'bold' = 900,
}

interface TextProps {
   size: number
   svgSize?: number
   align?: keyof typeof TextAlign
   transform?: keyof typeof TextTransform
   weight: keyof typeof FontWeight
   color: keyof typeof themeSettings.colors
   svgColor?: keyof typeof themeSettings.colors
}

export const Text = styled.p<TextProps>`
   font-size: ${({ size }) => size}px;
   color: ${({ color, theme }) => theme.colors[color]};
   font-weight: ${({ weight }) => FontWeight[weight]};
   text-align: ${({ align }) => (align ? align : 'left')};
   width: 100%;
   overflow-wrap: break-word;
   display: flex;
   align-items: center;
   justify-content: ${({ align }) => (align ? align : 'left')};

   ${({ transform }) =>
      transform &&
      css`
         text-transform: ${transform};
      `}

   svg {
      width: ${({ size, svgSize }) => (svgSize ? svgSize : size)}px;
      fill: ${({ theme, svgColor }) =>
      svgColor ? theme.colors[svgColor] : theme.colors.grayLight};
   }
`
