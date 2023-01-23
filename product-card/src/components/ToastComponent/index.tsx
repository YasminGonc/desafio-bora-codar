import React, { ReactNode } from 'react'
import * as Toast from '@radix-ui/react-toast'
import { ToastRoot, ToastTitle, ToastViewport } from './styles'

interface ToastComponentProps {
  children: ReactNode
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function ToastComponent({
  children,
  open,
  setOpen,
}: ToastComponentProps) {
  return (
    <Toast.Provider>
      {children}
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>Adicionado!</ToastTitle>
        <Toast.Description>Item adicionado com sucesso.</Toast.Description>
      </ToastRoot>
      <ToastViewport />
    </Toast.Provider>
  )
}
