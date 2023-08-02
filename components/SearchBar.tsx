import { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import SearchCard from "./SearchCard";

interface Person {
  id: string;
  name: string;
  bio: string;
}

const SearchBar = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [selection, setSelection] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network Response was not ok.')
        }
        return response.json();
      })
      .then(data => {
        setPeople(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  let filteredPeople: { id: string, name: string }[];

  if (query === '') {
    filteredPeople = people.map(person => ({ id: person.id, name: person.name }));
  } else {
    filteredPeople = people.filter(person => person.name.toLowerCase().includes(query.toLowerCase()))
      .map(person => ({ id: person.id, name: person.name }));
  }

  return (
    <form className="join dropdown">
      <Combobox value={selection} onChange={setSelection}>
        <Combobox.Input id="search" type="text" className="input input-bordered join-item input-sm md:input-md w-48 md:w-full" onChange={(event) => setQuery(event.target.value)} />
        <button type="submit" className="btn btn-square btn-ghost join-item btn-sm md:btn-md"><MagnifyingGlassIcon className="p-1 md:p-2" /></button>
        <Combobox.Options className="menu menu-sm dropdown-content flex justify-start mt-12 z-[1] p-2 shadow bg-base-100 rounded-box w-fit">
          {filteredPeople.slice(0, 5).map((person) => (
            <Combobox.Option key={person.id} value={person.id}>
              <SearchCard targetUserId={person.id} />
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </form>
  )
}

export default SearchBar
