"use client"

import AnimatedCursor from 'react-animated-cursor';
import React from 'react'

const Cursor = () => {
  return (
    <main>
        <AnimatedCursor 
            showSystemCursor={true}
            innerSize={0}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
            backgroundColor: '#00000F'
            }}
            outerStyle={{
            border: '1px solid #00000F'
            }}
        />
    </main>
  )
}

export default Cursor