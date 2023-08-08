'use client'

import { useState } from "react";

const PostForm = () => {
  const [post, setPost] = useState('');

  const sendPost = async (e: any) => {
    e.preventDefault();

    await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ post }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return (
    <form className="flex flex-col gap-3 max-h-64" onSubmit={sendPost}>
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
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default PostForm;
