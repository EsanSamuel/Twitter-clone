import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { FaFeather } from 'react-icons/fa'

const SidebarTweetButton = () => {
    const router = useRouter()

    const RegisterModal = useRegisterModal()
    const LoginModal = useLoginModal()

    const open = useCallback(() => {
        LoginModal.onOpen()
    },
        [LoginModal],
    )

    return (
        <div onClick={open} className=''>
            <div className='mt-6 lg:hidden h-14 w-14 flex justify-center items-center bg-sky-500 transition cursor-pointer rounded-full hover:opacity-50'>
                <FaFeather size={24} color='white' />
            </div>
            <div className='mt-6 lg:flex hidden w-full p-2 flex justify-center items-center bg-sky-500 transition cursor-pointer rounded-full hover:opacity-50'>
                <button onClick={open}>Tweet</button>
            </div>
        </div>
    )
}

export default SidebarTweetButton