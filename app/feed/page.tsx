import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { prisma } from "@/lib/prisma"
import Post from "@/components/Post";
import PostForm from "@/components/PostForm";

export const dynamic = 'force-dynamic'

export default async function People() {
  const posts = await prisma.post.findMany();

  return(
    <main className=" mt-[65px] px-12 pt-6">
      <div className="flex gap-3 text-primary prose prose-h1:text-primary items-center justify-start">
        <PaperAirplaneIcon className="h-[30px] lg:h-[60px]"/>
        <h1 className="text-3xl lg:text-6xl">Feed</h1>
      </div>
        <div className="w-full p-6 flex flex-col gap-5">
          <PostForm />
          <div className="w-full flex flex-col-reverse gap-3">
            {posts.map((post)=> { return<Post key={post.id} {...post}/> })}
          </div>
        </div>
    </main>
  )
}