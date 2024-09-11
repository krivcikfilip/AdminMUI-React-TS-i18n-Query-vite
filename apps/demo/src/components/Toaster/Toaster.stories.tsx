import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import toast from 'react-hot-toast'

import Toaster from './Toaster'

const meta: Meta<typeof Toaster> = {
    component: Toaster,
    tags: ['autodocs'],
}

export const Success: StoryObj<typeof meta> = {
    args: {},
    decorators: [
        (Story) => (
            <React.Fragment>
                <Story />
                <button onClick={() => toast.success('Success')}>
                    Trigger toast
                </button>
            </React.Fragment>
        ),
    ],
}

export const Error: StoryObj<typeof meta> = {
    args: {},
    decorators: [
        (Story) => (
            <React.Fragment>
                <Story />
                <button onClick={() => toast.error('Error')}>
                    Trigger toast
                </button>
            </React.Fragment>
        ),
    ],
}

export default meta
