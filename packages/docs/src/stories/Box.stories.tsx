import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Layout/Box',
  component: Box,

  args: {
    children: <Text>Component Box test</Text>,
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
