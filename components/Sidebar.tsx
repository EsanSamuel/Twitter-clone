import { BsHouseFill, BsBellFill, BsTwitter } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import SidebarItem from './SidebarItem'
import { BiLogOut } from 'react-icons/bi'
import SidebarTweetButton from './SidebarTweetButton'
import useCurrentUser from '@/hooks/useCurrentUser'
import { signOut } from 'next-auth/react'

const Sidebar = () => {
    const { data: currentUser } = useCurrentUser()

    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notifications',
            href: '/',
            icon: BsBellFill
        },
        {
            label: 'Profile',
            href: '/',
            icon: FaUser
        },
    ]
    return (
        <div className="text-[#eaeaea]  p-5 col-span-1 h-full pr-2 md:pr-6">
            <div className='flex flex-col items-end'>

                <div className='space-y-8 items-end lg:w-[230px] '>
                    <SidebarItem icon={BsTwitter} label='' />
                    {items.map((item) => (
                        <SidebarItem key={item.href} {...item} />
                    ))}
                    {currentUser && (
                        <SidebarItem onClick={() => signOut()} icon={BiLogOut} label='Logout' />
                    )}
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    )
}

export default Sidebar