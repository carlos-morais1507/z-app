import React from 'react';
import Link from 'next/link';

interface Props {
  id: string;
  name: string | null;
  bio: string | null;
  image: string | null;
}

const UserCard = ({ id, name, bio, image }: Props) => {
  return (
    <div>
      <div className='w-64 h-96 border-2 border-slate-700 border-b-slate-800 border-l-slate-800 rounded-box p-4 flex flex-col bg-gradient-card items-center justify-center shadow-xl'>
        <div className='h-1/2 w-full flex items-center justify-center'>
          <img src={image ?? "/user.png"} alt={`Perfil de ${name}`} className='rounded-full w-2/3'/>
        </div>
        <div className='h-1/2 text-clip w-full flex flex-col items-center justify-center gap-2'>
          <h1 className='text-xl font-semibold truncate w-full text-center'>{name ?? 'Sem Nome'}</h1>
          <p className='truncate w-full text-center'>{bio ?? 'Sem bio'}</p>
          <Link href={`/people/${id}`} className='mt-6 btn btn-outline btn-primary btn-sm backdrop-blur-sm'>Ver Perfil</Link>
        </div>
      </div>
    </div>
  )
}

export default UserCard