import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button, Toast, ToastProps } from '@guizioliveira/ignite-ui-react'

function ToastStory(props : ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
    <Button onClick={() => setOpen(true)}>Schedule now</Button>
    <Toast open={open} onOpenChange={setOpen} {...props}/>
    </>
  )
}

export default {
  title: 'Feedback/Toast',
  component: ToastStory,
  args: {
    title: "Teste",
    description: "Hello! I'm a tooltip 👋",
    durationInSeconds: 5
  },
  argTypes: {
    title: {
      table: {
        type: { summary: 'string' }
      }
    },
    description: {
      table: {
        type: { summary: 'string' }
      }
    },
    durationInSeconds: {
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 }
      }
    }
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {}
