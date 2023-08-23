import useCurrentUser from "@/hooks/useCurrentUser"
import useLoginModal from "@/hooks/useLoginModal"
import { formatDistanceToNowStrict } from "date-fns"
import { useRouter } from "next/router"
import { useCallback, useMemo } from "react"
import Avatar from "./Avatar"
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai"

interface Props {
    data: Record<string, any>
    userId?: string
}

const PostItem = ({ data, userId }: Props) => {
    const router = useRouter()
    const LoginModal = useLoginModal()

    const { data: currentUser } = useCurrentUser()

    const getToUser = useCallback(
        (event: any) => {
            event.stopPropagation()

            router.push(`/users/${data.user.id}`)
        },
        [router, data.user.id],
    )

    const getToPost = useCallback(
        (event: any) => {
            event.stopPropagation()

            router.push(`/users/${data.id}`)
        },
        [router, data.id],
    )

    const onLike = useCallback(
        (event: any) => {
            event.stopPropagation()

            LoginModal.onOpen()
        },
        [LoginModal],
    )

    const createdAt = useMemo(() => {
        if (!data?.createdAt) {
            return null
        }
        return formatDistanceToNowStrict(new Date(data.createdAt))
    }

        , [data?.createdAt])

    return (
        <div onClick={getToPost} className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover: translate">
            <div className="flex flex-row items-start gap-5">
                <div>
                    <Avatar userId={data.user.id} />
                </div>
                <div className="flex flex-col gap-2">
                    <div className=" flex flex-row items-start gap-5">
                        <h1 className="text-white">{data.user.name}</h1>
                        <p className="text-[#5f5f5f]">@{data.user.username}</p>
                        <p className="text-neutral-500" >{createdAt}</p>
                    </div>

                    <div className="text-white mt-1">
                        {data.body}
                    </div>

                    <div className="flex flex-row gap-10 text-neutral-500">
                        <div className="flex gap-1"><AiOutlineMessage size={20} /> <p>{data.comments?.length || 0}</p></div>
                        <div className="flex gap-1"><AiOutlineHeart size={20} onClick={onLike}/> <p>{data.comments?.length || 0}</p></div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostItem