import UserCard from "@/components/UserCard"
import { UsersIcon } from "@heroicons/react/24/solid"
import { prisma } from "@/lib/prisma"

export const dynamic = 'force-dynamic'

export default async function People() {
  const users = await prisma.user.findMany();

  return(
    <main className=" mt-[65px] px-12 pt-6">
      <div className="flex gap-3 text-primary prose prose-h1:text-primary items-center justify-start">
        <UsersIcon className="h-[30px] lg:h-[60px]"/>
        <h1 className="text-3xl lg:text-6xl">Pessoas</h1>
      </div>
        <div className="w-full p-6 flex gap-5 items-center justify-center flex-wrap">
          {users.map((user) => {
            return <UserCard key={user.id} {...user} />
          })}
        </div>
    </main>
  )
}