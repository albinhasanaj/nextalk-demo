"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

const TryForFreeBtn = () => {
    const router = useRouter();

    const handleClick = () => {
        //redirect to signup page
        router.push('/signup')
    }

    return (
        <button
            onClick={handleClick}
            className="rounded-[5px] before:ease relative h-[2.5rem] w-[9rem] overflow-hidden bg-[#4D4D4D] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 hover:bg-[#585858] ">
            Try for free
        </button>
    )
}

export default TryForFreeBtn