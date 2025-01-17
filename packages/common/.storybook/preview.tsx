import { Preview } from '@storybook/react'
import { StrictMode } from 'react'

const preview: Preview = {
    decorators: [
        (Story) => (
            <StrictMode>
                <Story />
            </StrictMode>
        ),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
