import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@guizioliveira/ignite-ui-react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    size: 'md',
    children: 'Heading',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustonTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading',
    size: 'lg',
  },
}
