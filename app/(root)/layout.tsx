import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "QuickMeet",
  description: "Video calling App",
  icons: {
    icon: "/icons/online-meeting.svg",
  },
};

const Rootlayout = ({ children }: { children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}    
      </StreamVideoProvider>
    </main>
  )
}

export default Rootlayout