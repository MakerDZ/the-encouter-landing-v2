"use client"
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

const Cursor = () => {
  return (
    <div>
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
    </div>
  )
}

export default Cursor