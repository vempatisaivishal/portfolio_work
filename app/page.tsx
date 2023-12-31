import Image from 'next/image'
import SidebarContact from './sidebarcontact'
import Card from '@/app/Skills/Card'
import Skillsshow from './Skills/Skillsshow'
import Hero from '@/app/Hero/Hero'

export default function Home() {
  return (
    <div className='relative bg-slate-900 min-h-screen min-w-full py-7'>
      <SidebarContact/>
      <Hero />
      
      <Skillsshow/>
    </div>
  )
}
