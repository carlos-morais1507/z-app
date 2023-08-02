import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import { StarIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid';
import { FollowButton } from '@/components/FollowButton/FollowButton';


interface Props {
  params: {
    id: string;
  }
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  const followers = await prisma.follows.findMany({ where: { followingId: user?.id } })
  const posts = await prisma.post.findMany({ where: { userId: user?.id } })

  return (
    <div>
      <div>
        <img src={user?.bannerImage ?? '/main-bg.png'} alt="Banner" className='w-screen h-40 md:h-72 object-cover object-center'/>
        <div className='absolute top-0 w-screen h-40 md:h-72 bg-gradient-to-b from-base-100 to-transparent' />
        <div className='flex'>
          <img src={user?.image ?? '/user.png'} alt="Foto de Perfil" className='w-36 md:w-56 rounded-full md:-translate-y-20 -translate-y-12 ml-6 avatar ring-base-100 ring-8 squa'/>
          <div className='p-3'>
            <h1 className=' text-3xl md:text-4xl font-bold'>{user?.name}</h1>
            <p>{user?.bio}</p>
            <div className='opacity-70 text-sm flex gap-1 items-center'>
             <StarIcon className='h-4' /> {followers.length} • <PaperAirplaneIcon className='ml-2 h-4'/> {posts.length}
            </div>
            <div className='mt-5'>
              <FollowButton targetUserId={params.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}