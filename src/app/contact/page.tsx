"use client"
import { Meteors } from '@/components/ui/meteors'
import React from 'react'

function page() {
    return (
        <div className='relative w-full h-screen overflow-hidden min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
            <div className='absolute inset-0'>
                <Meteors number={100} />
            </div>
            <div className='relative z-10 w-full h-full flex flex-col items-center justify-center'>
                <h2 className='text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
                    Contact Us
                </h2>
                <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
                    Contact on umesh_desai6@yahoo.com
                </p>
            </div>
        </div>
    )
}

export default page