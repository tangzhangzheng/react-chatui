
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

import React from 'react';
import {ThemeProvider} from 'styled-components'
import theme from '../src/theme'
import { addDecorator } from '@storybook/react'

addDecorator((storyFn) => {
 return <ThemeProvider theme={theme}>{storyFn()} </ThemeProvider>
})