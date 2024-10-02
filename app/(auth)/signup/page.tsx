import AuthForm from '@/components/AuthForm';

const SignUp = () => {
    return (
        <div
            className='flex'
        >
            <AuthForm
                isLogin={false}
            />
        </div>
    )
}

export default SignUp