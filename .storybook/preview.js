
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

import React from 'react';
import {ThemeProvider} from 'styled-components'
import theme from '../src/theme'
import { addDecorator,addParameters } from '@storybook/react'
import "story.css"

addDecorator((storyFn) => {
    return <ThemeProvider theme={theme}>{storyFn()} </ThemeProvider>
});

addParameters({
    options: {
        showRoots: true,
    }
});

