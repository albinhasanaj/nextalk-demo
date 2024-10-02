
import React from 'react'
import AuthForm from '@/components/AuthForm'

const LogIn = () => {
    return (
        <div
            className='flex'
        >

            <AuthForm
                isLogin={true}
            />
        </div>
    )
}

export default LogIn