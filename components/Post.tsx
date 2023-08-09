import Link from 'next/link'
import React from 'react'
import { FollowButton } from './FollowButton/FollowButton'
import { prisma } from '@/lib/prisma'

interface Props {
  id: string,
  content: string,
  likes: number,
  reposts: number,
  userId: string,
}

const Post = async ({ id, content, likes, reposts, userId }: Props) => {
  const user = await prisma.user.findUnique({ where: { id: userId } })

  return (
    <div className='w-full p-6 border-2 border-primary rounded-box flex flex-col gap-3'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0'>
        <div className='flex'>
          <img src={user?.image ?? '/user.png'} alt={'Usuário'} className='avatar rounded-full w-16' />
          <div className='flex flex-col ml-2'>
            <Link href={`/people/${user?.id}`}>
              <h1 className='text-lg md:text-xl font-bold'>{user?.name}</h1>
            </Link>
          </div>
        </div>
        <FollowButton targetUserId={userId}/>
      </div>
      <div>
        <p className='md:text-md text-sm text-justify break-words'>{content}</p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Post