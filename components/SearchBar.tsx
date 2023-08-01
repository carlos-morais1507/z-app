'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"

const SearchBar = () => {
  return (
    <form className="join">
      <input id="search" type="text" className="input input-bordered join-item input-sm md:input-md w-48 md:w-full" />
      <button type="submit" className="btn btn-square btn-ghost join-item btn-sm md:btn-md"><MagnifyingGlassIcon className="p-1 md:p-2"/></button>
    </form>
  )
}

export default SearchBar