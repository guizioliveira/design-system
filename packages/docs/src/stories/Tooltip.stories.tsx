import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@guizioliveira/ignite-ui-react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    children: <Text>Hover Me</Text>,
    content: "Hello! I'm a tooltip 👋"
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    }
  },
  decorators: [
    (Story) => {
      return (
        <Box
        >
          {Story()}
        </Box>
      )
    },
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {}
