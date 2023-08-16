'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const PostForm = () => {
  const router = useRouter()
  const [post, setPost] = useState('');

  const sendPost = async (e: any) => {
    e.preventDefault();
  
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ post }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('Request failed with status:', response.status);
      return;
    }
  
    const data = response
    console.log(data);
    router.refresh()
  }

  return (
    <form className="flex flex-col gap-3 max-h-64">
      <textarea
        name="post"
        id="post"
        cols={25}
        rows={10}
        maxLength={250}
        className="textarea textarea-primary"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <button type="submit" onClick={sendPost} className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default PostForm;
