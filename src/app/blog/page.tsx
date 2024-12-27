import React from 'react'
import SubhHero from '@/components/SubhHero'
import BlogComponent from '@/components/BlogComponent'
import Button from '@/components/Button'
import Features from '@/components/Features'
function blog() {
  return (
    <div>
      <SubhHero title='Blog' subtitle='Home > Blog'/>
      <BlogComponent/>
      <Button/>
      <Features/>
    </div>
  )
}

export default blog