//import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface Props {
    label: string,
    icon: IconType,
    href?: string,
    onClick?: () => void

}

const SidebarItem = ({ label, icon: Icon, href }: Props) => {
    return (
        <div className='flex flex-row items-center '>
            <a href={href}><div className='relative flex items-center gap-4 rounded-full hover:bg-slate-300 p-2 hover:bg-opacity-10 cursor-pointer'>
                <Icon size={28} color='white' className='ng-transparent' />
                <p className='hidden lg:block text-white text-xl'>{label}</p>
            </div></a>
        </div>
    )
}

export default SidebarItem