import './commands'

import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { mount } from 'cypress/react18'
import { StrictMode } from 'react'

import { theme } from '@/theme/theme'

Cypress.Commands.add('mount', (component, options) => {
    const wrapped = (
        <StrictMode>
            <ThemeProvider theme={theme}>
                {component}
                <CssBaseline />
            </ThemeProvider>
        </StrictMode>
    )

    return mount(wrapped, options)
})
