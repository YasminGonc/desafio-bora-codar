import * as Tooltip from '@radix-ui/react-tooltip'
import React, { ReactNode } from 'react'
import { TooltipContent } from './styles'

interface TooltipProps {
  children: ReactNode
  note: string
  disabled?: boolean
  name?: string
  onClickFunction: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function ButtonWithTooltip({
  children,
  note,
  disabled,
  name,
  onClickFunction,
}: TooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button onClick={onClickFunction} disabled={disabled} name={name}>
            {children}
          </button>
        </Tooltip.Trigger>
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
