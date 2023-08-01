import { UsersIcon } from "@heroicons/react/24/solid"

export default async function People() {
  return(
    <main className=" mt-[65px] px-12 pt-6">
      <div className="flex gap-3 text-primary prose prose-h1:text-primary items-center justify-start">
        <UsersIcon className="h-[30px] lg:h-[60px]"/>
        <h1 className="text-3xl lg:text-6xl">Pessoas</h1>
      </div>
    </main>
  )
}