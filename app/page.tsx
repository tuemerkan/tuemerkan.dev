'use client'

import ContentArea from '@/components/content-area'
import Sidebar from '@/components/sidebar'

export default function Home() {
  return (
    <main className="p-24 h-screen grid grid-cols-2 gap-20">
      <Sidebar />
      <ContentArea />
    </main>
  )
}
