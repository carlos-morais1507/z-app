'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ProfileForm({ user }: any) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {   
    e.preventDefault();

    setLoading(true);
    
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
      bannerImage: formData.get('bannerImage'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (res.ok) {
      await res.json();
    } else {
      console.error('Failed to update user.');
    }

    setLoading(false);
    router.refresh()
  };

  return (
    <div className="join join-vertical w-64 sm:w-1/2 shadow-xl">
      <img src={user?.bannerImage ?? 'main-bg.png'} alt="Banner" className="w-full h-14 sm:h-20 object-cover join-item"/>
      <form onSubmit={updateUser} className="flex flex-col items-start justify-center border-2 border-primary w-full join-item border-t-0 p-3">
        <div className="w-full">
          <label className="label" htmlFor="name">
            <span className="label-text">Nome</span>
          </label>
          <input type="text" name="name" defaultValue={user?.name ?? ''} className="input input-primary input-sm sm:input-md w-full"/>
        </div>
        <div className="w-full">
          <label htmlFor="bio" className="label">
            <span className="label-text">Bio</span>
            <span className="label-text-alt">máx. 150 caracteres</span>
          </label>
          <textarea
            name="bio"
            cols={30}
            rows={10}
            maxLength={150}
            defaultValue={user?.bio ?? ''}
            className="textarea textarea-primary textarea-xs md:textarea-md h-32 w-full"
          ></textarea>
        </div>
        <div className="flex gap-3">
          <div>
            <label className="label" htmlFor="age">
              <span className="label-text">Idade</span>
            </label>
            <input type="text" name="age" defaultValue={user?.age ?? ''} className="input input-primary input-sm sm:input-md w-full"/>
          </div>
          <div>
            <label className="label" htmlFor="bannerImage">
              <span className="label-text">URL do banner</span>
            </label>
            <input type="text" name="bannerImage" defaultValue={user?.bannerImage ?? ''} className="input input-primary input-sm sm:input-md w-full"/>
          </div>
        </div>
        <div className="w-full">
          <label className="label" htmlFor="image">
            <span className="label-text">URL do perfil</span>
          </label>
          <input type="text" name="image" defaultValue={user?.image ?? ''} className="input input-primary input-sm sm:input-md w-full"/>
        </div>
        <button className={`btn btn-outline btn-primary mt-6`} type="submit" disabled={loading}>
          {loading === true ? (<span className="loading loading-spinner"></span>) : (<span>Salvar</span>)}
        </button>
      </form>
    </div>
  )
}