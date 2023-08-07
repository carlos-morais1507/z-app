import Link from 'next/link'
import React from 'react'
import { FollowButton } from './FollowButton/FollowButton'

interface Props {
  postId: string
}

const Post = () => {
  return (
    <div className='w-full p-6 border-2 border-primary rounded-box flex flex-col gap-3'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0'>
        <div className='flex'>
          <img src={'/user.png'} alt={'Usuário'} className='avatar rounded-full w-16' />
          <div className='flex flex-col ml-2'>
            <Link href={`/people`}>
              <h1 className='text-lg md:text-xl font-bold'>Carlos Morais</h1>
            </Link>
          </div>
        </div>
        <FollowButton targetUserId=''/>
      </div>
      <div>
        <p className='md:text-md text-sm text-justify'>
          Chasing sunsets, collecting memories. 🌅✨ Laugh a little louder, love a little deeper. 💖 Embracing every moment and creating my own sunshine. ☀️💫 #ChasingDreams #JoyfulLife
        </p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Post