import useUser from "@/hooks/useUser"
import Avatar from "./Avatar"
import Image from "next/image"

interface Props {
    userId: string
}

const UserHero = ({ userId }: Props) => {
    const { data: fetchedUser } = useUser(userId)
    return (
        <div>
            <div className="bg-neutral-700 rounded p-10 h-[150px] mt-3">
                {fetchedUser?.coverImage && (
                    <div >
                        <Image className="bg-neutral-700 rounded p-10 h-[150px] mt-3"
                            src={fetchedUser.coverImage}
                            alt="Cover Image"
                            fill
                        />
                    </div>
                )}
                <div className="mt-[12%]">
                    <Avatar userId={userId} isLarge />
                    {fetchedUser?.name}
                </div>
            </div>

        </div>
    )
}

export default UserHero