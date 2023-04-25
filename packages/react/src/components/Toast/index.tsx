import { ComponentProps } from "react"
import * as ToastRadix from "@radix-ui/react-toast"
import { X } from "phosphor-react"
import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastViewPort,
  ToastClose,
} from "./styles"

export interface ToastProps extends ComponentProps<typeof ToastRadix.Root> {
  title: string
  description?: string
  durationInSeconds?: number
}

export function Toast({
  description,
  title,
  durationInSeconds = 5,
  ...props
}: ToastProps) {
  return (
    <ToastRadix.Provider swipeDirection="right">
      <ToastRoot {...props} duration={durationInSeconds * 1000}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose asChild>
          <X weight="regular" size={20} />
        </ToastClose>
      </ToastRoot>
      <ToastViewPort />
    </ToastRadix.Provider>
  )
}

Toast.DisplayName = "Toast"
