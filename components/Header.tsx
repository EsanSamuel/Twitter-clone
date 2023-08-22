import { IconType } from "react-icons"
import { useRouter } from "next/router"
import { useCallback } from "react"

interface Props {
    label: string
    icon: IconType
}

const Header = ({ label, icon: Icon }: Props) => {
    const router = useRouter()

    const onClick = useCallback(
        () => {
            router.push('/')
        },
        [router],
    )

    return (
        <div className="flex gap-3 w-full border-b-2 border-[#5f5f5f] pb-2 ">
            <Icon size={22} onClick={onClick} /> <h2>{label}</h2>
            <hr />
        </div>
    )
}

export default Header