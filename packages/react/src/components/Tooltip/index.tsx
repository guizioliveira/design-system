import { ComponentProps, ReactNode } from "react"
import * as TooltipRadix from "@radix-ui/react-tooltip"
import { TooltipContent, TooltipArrow } from "./styles"

export interface TooltipProps extends ComponentProps<typeof TooltipRadix.Root> {
  children: string | ReactNode
  content: string | ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root {...props} delayDuration={400}>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent sideOffset={6} arrowPadding={12}>
            {content}
            <TooltipArrow width={16} height={8} />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = "Tooltip"
