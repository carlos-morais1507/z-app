import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma"
import { UsersIcon } from "@heroicons/react/24/solid";

export const dynamic = 'force-dynamic'

interface Props {
  params: {
    id: string;
  }
}

export default async function Followers({ params }: Props) {
  const followers = await prisma.follows.findMany({  
    where: {
      followingId: params.id
    },
    include: {
      follower: true
    }
  })

  const targetUser = await prisma.user.findUnique({ where: { id: params.id } })

  return (
    <main className=" mt-[65px] px-12 pt-6">
      <div className="flex gap-3 text-primary prose prose-h1:text-primary items-center justify-start">
        <UsersIcon className="h-[30px] lg:h-[60px]"/>
        <h1 className="text-3xl lg:text-5xl w-full">Seguidores de {targetUser?.name?.split(' ')[0]}</h1>
      </div>
        <div className="w-full p-6 flex gap-5 items-center justify-center flex-wrap">
          {followers.map((user) => {
            return <UserCard key={user.follower.id} {...user.follower} />
          })}
        </div>
    </main>
  )
}