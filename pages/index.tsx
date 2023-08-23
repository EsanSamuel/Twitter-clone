import PostFeed from "@/components/PostFeed";
import Form from "@/components/Form";

export default function Home() {
  return (
    <div className=''>
      <h1 className="p-5 text-white font-semibold">Home</h1>
      <Form placeholder='whats happening' />
      <PostFeed />
    </div>
  )
}
