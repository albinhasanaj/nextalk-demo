import React from 'react'
import Link from 'next/link'
import FooterLine from './FooterLine'


const Footer = () => {
    return (
        <div className=''>
            <footer className='md:flex hidden w-full h-[320px] bg-[#121212] flex-col items-center'>
                <div className="max-w-[1440px] px-[130px] flex items-center h-full w-full justify-between">
                    <div className='flex flex-col gap-1 items-center'>
                        <p>Website Pages</p>
                        <FooterLine />
                        <Link href='/' className='text-white cursor-not-allowed'>Home</Link>
                        <Link href='/#' className='text-white cursor-not-allowed'>About</Link>
                        <Link href='/#' className='text-white cursor-not-allowed'>Contact</Link>
                        <Link href='/login' className='text-white cursor-not-allowed'>Log In</Link>
                        <Link href='/signup' className='text-white cursor-not-allowed'>Sign Up</Link>
                    </div>
                    <div className='flex flex-col items-center justify-between h-full py-16'>
                        <div className='flex flex-col items-center gap-[0.1rem]'>
                            <p>Check out our portfolios</p>
                            <FooterLine />
                            <Link href='https://www.albinhasanaj.com' className='hover:underline text-white '>albinhasanaj.com</Link>
                            <Link href='https://oliver.swedishservers.com/' className='hover:underline text-white '>oliver.swedishservers.com</Link>
                        </div>
                        <div className='h-[1px] w-[10rem] bg-white cursor-not-allowed' />
                        <div>
                            <p>NexTalk © 2024</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <p>Terms & Policies</p>
                        <FooterLine />
                        <Link href='/#' className='text-white cursor-not-allowed'>Terms of use</Link>
                        <Link href='/#' className='text-white cursor-not-allowed'>Privacy Policy</Link>
                        <Link href='/login' className='text-white cursor-not-allowed'>Brand guidelines</Link>
                        <Link href='/signup' className='text-white cursor-not-allowed'>Other policies</Link>
                    </div>
                </div>
            </footer>

            {/* MOBILE */}
            <footer className='flex md:hidden bg-[#121212] w-full h-[630px] flex-col justify-between items-center py-5'>
                <div className='gap-10 flex flex-col'>
                    <div className='flex flex-col gap-1 items-center'>
                        <p>Website Pages</p>
                        <FooterLine />
                        <Link href='/' className='text-white cursor-not-allowed'>Terms & Policies</Link>
                        <Link href='/about' className='text-white cursor-not-allowed'>Terms of use</Link>
                        <Link href='/contact' className='text-white cursor-not-allowed'>Privacy Policy</Link>
                        <Link href='/login' className='text-white cursor-not-allowed'>Brand guidelines</Link>
                        <Link href='/signup' className='text-white cursor-not-allowed'>Other policies</Link>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <p>Terms & Policies</p>
                        <FooterLine />
                        <Link href='/about' className='text-white cursor-not-allowed'>Terms of use</Link>
                        <Link href='/contact' className='text-white cursor-not-allowed'>Privacy Policy</Link>
                        <Link href='/login' className='text-white cursor-not-allowed'>Brand guidelines</Link>
                        <Link href='/signup' className='text-white cursor-not-allowed'>Other policies</Link>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <p>Check out our portfolios</p>
                        <FooterLine />
                        <Link href='https://www.albinhasanaj.com' className='hover:underline text-white cursor-not-allowed'>albinhasanaj.com</Link>
                        <Link href='https://therealworld.net/' className='hover:underline text-white cursor-not-allowed'>oliversoder.com</Link>
                    </div>
                </div>
                <div>
                    <p>NexTalk © 2024</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer