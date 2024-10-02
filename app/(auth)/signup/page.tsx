import AuthForm from '@/components/AuthForm';
import { Fragment } from 'react';

const SignUp = () => {
    return (
        <div
            id='auth-layout'
            className='flex'
        >
            <AuthForm
                isLogin={false}
            />
        </div>
    )
}

export default SignUp