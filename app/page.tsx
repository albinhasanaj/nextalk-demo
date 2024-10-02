import Collage from '@/components/Collage'
import Footer from '@/components/Footer'
import Form from '@/components/Form'
import MidFeatures from '@/components/MidFeatures'
import Navbar from '@/components/Navbar'
import TopHP from '@/components/TopHP'
import React from 'react'

const HomePage = () => {
    return (
        <div
            className='relative w-full h-screen'>
            <Navbar />
            <TopHP />
            <div id="home-page"
                className='pt-20 bg-black'
            >
                <div className='bg-black w-full pt-20'>
                    <MidFeatures />
                </div>
                <div className='bg-black w-full pt-20'>
                    <Collage />
                </div>
                <div className='bg-black w-full pt-20 pb-10'>
                    <Form />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage