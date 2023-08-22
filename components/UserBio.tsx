import useCurrentUser from "@/hooks/useCurrentUser"
import useUser from "@/hooks/useUser"
import { useMemo } from "react"

interface Props {
    userId: string
}

const UserBio = (userId: string) => {
    const { data: currentUser } = useCurrentUser()
    const { data: fetchedUser } = useUser(userId)

    const createdAt = useMemo(() => {
        if (!fetchedUser?.createdAt) {
            return null
        }

        return format(new Date(fetchedUser, createdAt), 'MMMM yyyy')
    }, [fetchedUser?.createdAt])

    return (
        <div>{fetchedUser?.name}</div>
        
    )
}

export default UserBio