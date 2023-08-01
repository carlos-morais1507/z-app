'use client'

import Link from "next/link";


export function SignInButton() {
const status = 'authenticated';
    return (
      <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <label tabIndex={0}>
          <div className="avatar btn btn-circle btn-ghost">
            <img src={'/user.png'} width={32} height={32} alt="Avatar" className="rounded-full p-1"/>
          </div>
        </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          {status === 'authenticated' ? (
            <>
            <Link href={'/'} className="btn btn-ghost btn-sm normal-case">Minha conta</Link>
            <li><button className="btn btn-ghost btn-sm normal-case text-error hover:text-error-content">Sair da conta</button></li>
            </>
          ) : (
            <li><button className="btn btn-ghost btn-sm normal-case text-success">Entrar</button></li>
          )}
        </ul>
      </div>
    )
  }