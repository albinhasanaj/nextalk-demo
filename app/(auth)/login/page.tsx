
import React, { Fragment } from 'react'
import AuthForm from '@/components/AuthForm'

const LogIn = () => {
    return (
        <div
            id='auth-layout'
            className='flex'
        >

            <AuthForm
                isLogin={true}
            />
        </div>
    )
}

export default LogIn