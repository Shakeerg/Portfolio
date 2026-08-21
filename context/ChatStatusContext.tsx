'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type ChatStatus = 'idle' | 'thinking' | 'listening' | 'responding'

interface ChatStatusContextValue {
  status: ChatStatus;
  setStatus: (status: ChatStatus) => void;
}

const ChatStatusContext = createContext<ChatStatusContextValue | undefined>(undefined)

export function ChatStatusProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<ChatStatus>('idle')
  return (
    <ChatStatusContext.Provider value={{ status, setStatus }}>
      {children}
    </ChatStatusContext.Provider>
  )
}

export function useChatStatus() {
  const context = useContext(ChatStatusContext)
  if (!context) {
    throw new Error('useChatStatus must be used within a ChatStatusProvider')
  }
  return context
}