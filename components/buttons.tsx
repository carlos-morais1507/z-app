'use client'

import Link from "next/link";


export function SignInButton() {
const status = 'authenticated';

  if (status === 'authenticated') {
    return (
      <div>
        <Link href={'/'} className="avatar btn btn-circle btn-ghost">
          <img src={'/user.png'} width={32} height={32} alt="Avatar" className="rounded-full p-1"/>
        </Link>
      </div>
    )
  }
}