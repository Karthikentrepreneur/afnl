import React from 'react'
import { Studio } from 'sanity'
import config from '../../sanity.config'

export default function StudioPage() {
  return (
    <div className="h-screen w-full bg-white relative z-50 overflow-hidden">
      <Studio config={config} />
    </div>
  )
}