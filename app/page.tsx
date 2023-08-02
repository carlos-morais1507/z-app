import Link from "next/link";

export default function Home() {

  return (
    <main className="flex flex-col items-center bg-gradient-radial min-h-screen bg-cover px-0 mt-0">
      <div className="h-[450px] w-full flex flex-col items-start justify-end p-6 lg:p-12">
        <h1 className="bg-clip-text text-transparent hero--anim text-3xl lg:text-6xl font-extrabold">Como você está?</h1>
        <h2 className="max-w-6xl text-lg">Conecte-se com milhares de usuários ao redor do mundo</h2>
          <div className="mt-3 flex gap-3">
            <Link href={'/'} className="btn btn-outline backdrop-blur-sm btn-secondary">
              Meu Feed
            </Link>
            <Link href={'/dashboard'} className="btn backdrop-blur-sm btn-outline btn-primary">
              Minha Conta
            </Link>
          </div>
      </div>
    </main>
  )
}
