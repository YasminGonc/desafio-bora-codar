import * as Tooltip from '@radix-ui/react-tooltip'
import React, { ReactNode } from 'react'
import { TooltipContent } from './styles'

export interface TooltipProps {
  children: ReactNode
  note: string
}

export function ButtonWithTooltip({ children, note }: TooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent sideOffset={4}>
            {note}
            <Tooltip.Arrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
