'use client'
import React, { useEffect } from 'react'

const Index: React.FC = () => {
  useEffect(() => {
    console.log('挂载了')
    console.log(window.localStorage)
  }, [])
  return <div>about</div>
}
export default Index
