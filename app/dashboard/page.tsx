import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import UserCard from "@/components/UserCard";
import { ProfileForm } from "./ProfileForm";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin')
  }

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    }
  });
  const cardUser = {
    id: user?.id ?? '',
    name: user?.name ?? null,
    bio: user?.bio ?? null,
    image: user?.image ?? null,
  };

  return (
    <main className=" mt-[65px] px-12 pt-6">
      <div className="flex gap-3 text-primary prose prose-h1:text-primary items-center justify-start">
        <PencilSquareIcon className="h-[30px] lg:h-[60px]"/>
        <h1 className="text-3xl lg:text-6xl">Editar Perfil</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full h-full p-6">
        <UserCard {...cardUser} />
        <div className="md:h-96 h-36 border-[1px] border-slate-500 rounded-full"/>
        <ProfileForm user={user} />
      </div>
    </main>
  )
}