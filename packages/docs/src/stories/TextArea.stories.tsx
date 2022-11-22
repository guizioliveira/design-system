import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@guizioliveira/ignite-ui-react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
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
          <Text size="sm">Message</Text>
          {Story()}
        </Box>
      )
    },
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
