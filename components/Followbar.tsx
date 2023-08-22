import useUsers from "@/hooks/useUsers"
import Avatar from "./Avatar"

const Followbar = () => {
  const { data: users = [] } = useUsers()

  if (users.length === 0) {
    return null
  }
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-[#1c1c24]  h-auto text-white text-left py-4 px-5 rounded">
        <h2 className="font-semibold">Who to follow</h2>
        <div className=" mt-5">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex gap-5 pb-10">
              <Avatar userId={user.id} isSmall />
              <div className='flex flex-col'>
                <p>{user.name}</p>
                <p className="text-[#5f5f5f] text-[13px] text-left">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Followbar