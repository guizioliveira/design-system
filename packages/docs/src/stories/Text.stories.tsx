import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@guizioliveira/ignite-ui-react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustonTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
}
