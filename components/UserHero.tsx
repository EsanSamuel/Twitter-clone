import useUser from "@/hooks/useUser"
import Avatar from "./Avatar"

interface Props {
    userId: string
}

const UserHero = ({ userId }: Props) => {
    const { data: fetchedUser } = useUser(userId)
    return (
        <div className="bg-neutral-700 rounded p-10 h-[150px] mt-3">
            <div className="mt-10">
                <Avatar userId={userId} isLarge hasBorder/>
                {fetchedUser?.name}
            </div>
        </div>
    )
}

export default UserHero