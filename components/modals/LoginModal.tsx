import useLoginModal from '@/hooks/useLoginModal'
import { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'
import useRegisterModal from '@/hooks/useRegisterModal'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

const LoginModal = () => {
    const LoginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }

        LoginModal.onClose()
        registerModal.onOpen()
    }, [LoginModal, isLoading, registerModal])



    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            await signIn('credentials', {
                email,
                password
            })

            toast.success('Login Successful')

            LoginModal.onClose()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [LoginModal, email, password])

    const bodyContent = (
        <div className='flex flex-col gap-5'>
            <Input
                placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                value={email}
                disabled={isLoading} />

            <Input
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                value={password}
                disabled={isLoading} />
        </div>
    )


    const footerContent = (
        <h1 className='text-white text-center pt-10 cursor-pointer' onClick={onToggle}>Don't have an account? <span className='font-bold'>signin</span></h1>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={LoginModal.isOpen}
            title='Login'
            actionLabel='Sign in'
            onClose={LoginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal