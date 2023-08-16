import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  bio: string;
  age: number;
  email: string;
  emailVerified: string | null;
  image: string;
  bannerImage: string;
}

interface Props {
  targetUserId: string;
}

const SearchCard = ({ targetUserId }: Props) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network Response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const user = users.find((user) => user.id === targetUserId);

  if (!user) {
    return <span className='loading loading-spinner'></span>;
  }

  return (
    <Link href={`/people/${targetUserId}`} className='btn btn-ghost btn-sm h-full w-52'>
      <div className='flex gap-2 text-clip'>
        <img src={user.image ?? 'user/png'} alt={user.name} className=' w-5'/>
        <h1 className='truncate w-40 text-sm'>{user.name}</h1>
      </div>
    </Link>
  );
};

export default SearchCard;
