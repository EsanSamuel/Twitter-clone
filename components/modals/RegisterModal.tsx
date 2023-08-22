import { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'
import useRegisterModal from '@/hooks/useRegisterModal'
import useLoginModal from '@/hooks/useLoginModal'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { signIn } from 'next-auth/react'

const RegisterModal = () => {
    const RegisterModal = useRegisterModal()
    const LoginModal = useLoginModal()

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }

        RegisterModal.onClose()
        LoginModal.onOpen()
    }, [LoginModal, isLoading, RegisterModal])



    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            await axios.post('/api/register', { email, password, name, username })

            toast.success('Account Created')

            signIn('credentials', {
                email,
                password
            })

            RegisterModal.onClose()
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong!')
        } finally {
            setIsLoading(false)
        }
    }, [RegisterModal, email, password, name, username])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Enter Name'
                onChange={(e) => setName(e.target.value)}
                type='text'
                value={name}
                disabled={isLoading} />

            <Input
                placeholder='Enter Username'
                onChange={(e) => setUsername(e.target.value)}
                type='text'
                value={username}
                disabled={isLoading} />

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
        <h1 className='text-white text-center pt-10 cursor-pointer' onClick={onToggle}>Already have an account? <span className='font-bold'>login</span></h1>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={RegisterModal.isOpen}
            title='Create an Account'
            actionLabel='Register'
            onClose={RegisterModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal