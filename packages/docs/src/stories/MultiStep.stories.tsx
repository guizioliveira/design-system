import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@guizioliveira/ignite-ui-react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: { size: 4, currentStep: 1 },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            width: '630px',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}
