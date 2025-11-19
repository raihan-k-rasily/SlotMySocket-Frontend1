// Home.jsx (Updated)
import React from 'react'
import LiquidEther from '../../bits/components/LiquidEther'
import Header from '../components/Header'
import Footer from '../../components/Footer'


function Home() {
    return (
        <>
            <Header/>
            {/* 1. Corrected 'w-ful' to 'w-full' and added a semantic 'main' */}
            <main className='w-full h-screen bg-black text-black relative flex justify-center items-center'> 
                {/* Background Effect Container */}
                <div style={{ width: '100%', height: "100%", position: 'relative' }}>
                    <LiquidEther
                        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                        mouseForce={20}
                        cursorSize={100}
                        isViscous={false}
                        viscous={30}
                        iterationsViscous={32}
                        iterationsPoisson={32}
                        resolution={0.5}
                        isBounce={false}
                        autoDemo={true}
                        autoSpeed={0.5}
                        autoIntensity={2.2}
                        takeoverDuration={0.25}
                        autoResumeDelay={3000}
                        autoRampDuration={0.6}
                    />
                </div>
                
                {/* Foreground Content */}
                <div className='absolute flex flex-col justify-center items-center'>
                    {/* 2. Increased font size for better impact and added tracking */}
                    <h1 className='text-purple-900 font-extrabold text-4xl md:text-4xl lg:text-7xl mb-10 tracking-tight'>
                        Slot My Socket
                    </h1>
                    {/* Optional: Add a subtle subheading */}
                    <p className='text-purple-400 text-xl font-medium'>
                        Find your nearest charging station with ease.
                    </p>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home