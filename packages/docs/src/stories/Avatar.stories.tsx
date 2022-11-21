import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@visum-ui/react'

export default {
  title: 'data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/guizioliveira.png',
    alt: 'Guilherme de Oliveira',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
