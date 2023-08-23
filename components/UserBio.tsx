import useCurrentUser from "@/hooks/useCurrentUser"
import useUser from "@/hooks/useUser"
import { useMemo } from "react"
import { format } from 'date-fns'
import Button from './Button'
import { BiCalendar } from "react-icons/bi"
import axios from "axios"

interface Props {
    userId: string
}

const UserBio = ({ userId }: Props) => {
    const { data: currentUser } = useCurrentUser()
    const { data: fetchedUser } = useUser(userId)

    const createdAt = useMemo(() => {
        if (!fetchedUser?.createdAt) {
            return null
        }

        return format(new Date(fetchedUser.createdAt), 'MMMM yyyy')
    }, [fetchedUser?.createdAt])

    
    return (

        <div className="pt-1">
            <div className="flex justify-between">
                <h1 className="p-5"></h1>
                <div className="flex justify-end">
                    {currentUser?.id === userId ? (
                        <Button onClick={() => { }} label='Edit' secondary />
                    ) : (
                        <Button onClick={() => { }} label='Follow' secondary />
                    )}</div>
            </div>

            <div className="mb-8 px-4 mt-10">
                <div className="flex flex-col">
                    <p className="text-white text-2xl font-semibold">
                        {fetchedUser?.name}Samuel Esan
                    </p>
                    <p className="text-[12px] text-neutral-500">
                        {fetchedUser?.username}@samuelesan
                    </p>
                    <p className="text mt-4 text-white">
                        {fetchedUser?.bio}
                    </p>

                    <div className="flex flex-row gap-2 text-neutral-500">
                        <BiCalendar size={20} />
                        Joined {createdAt}
                    </div>
                </div>
            </div>

        </div>


    )
}

export default UserBio