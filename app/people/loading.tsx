export default async function LoadingUsers() {
  return(
    <main className=" mt-[65px] px-12 pt-6 prose prose-h1:text-primary">
      <h1 className="text-2xl lg:text-4xl font-semibold"><span className="loading loading-spinner ml-3"></span>Carregando dados dos usuários...</h1>
    </main>
  )
}