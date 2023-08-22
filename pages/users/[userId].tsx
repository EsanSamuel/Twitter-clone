import Header from '@/components/Header'
import useUser from '@/hooks/useUser'
import useUsers from '@/hooks/useUsers'
import { useRouter } from 'next/router'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { ClipLoader } from 'react-spinners'
import UserHero from '@/components/UserHero'
import UserBio from '@/components/UserBio'

const UserView = () => {
    const router = useRouter()
    const { userId } = router.query

    const { data: fetchedUser, isLoading } = useUser(userId as string)

    /* if (isLoading || !fetchedUser) {
         return (
             <div className='flex justify-center items-center h-full'>
                 <ClipLoader color='lightblue' size={80} />
             </div >
         )
     }*/
    return (
        <div className='text-white p-5'>
            <Header icon={BiArrowBack} label={fetchedUser?.name} />
            <UserHero userId={userId as string} />
            <UserBio userId={userId as string} />
        </div>
    )
}

export default UserView