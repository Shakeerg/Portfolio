'use client'
import dynamic from 'next/dynamic'
import { useChatStatus } from '@/context/ChatStatusContext'

const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
})

const Hero3D = () => {
  const { status } = useChatStatus()

  return (
    <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px]
    hidden lg:block pointer-events-none'>
      <Scene3D state={status} />
    </div>
  )
}

export default Hero3D