import useUser from "@/hooks/useUser"
import { useCallback } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import Placholder from '../public/images/placeholder.png'

interface Props {
    userId: string
    isLarge?: boolean
    hasBorder?: boolean
    isSmall?: boolean
}

const Avatar = ({ userId, isLarge, hasBorder,isSmall }: Props) => {
    const router = useRouter()
    const { data: fetchedUser } = useUser(userId)

    const onClick = useCallback((event: any) => {
        event.stopPropagation()

        const url = `/users/${userId}`

        router.push(url)
    }, [router, userId])
    return (
        <div className={`
        ${hasBorder ? 'border-5 border-[#13131a]' : ''}
        ${isLarge ? 'h-[120px] w-[120px]' : 'h-[50px] w-[50px]'}
       
        rounded-full hover:opacity-90 transition cursor-pointer relative
        `}>
            <Image fill alt='Image' style={{
                objectFit: 'cover',
                borderRadius: '100%'
            }} onClick={onClick} src={fetchedUser?.profileImage || Placholder} />
        </div>
    )
}

export default Avatar