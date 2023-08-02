'use client';

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OlStarIcon } from "@heroicons/react/24/outline";

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowerClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const follow = async () => {
    setIsFetching(true);

    const res = await fetch('/api/follow', {
      method: 'POST',
      body: JSON.stringify({ targetUserId }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    setIsFetching(false);

    console.log(res)

    startTransition(() => {
      router.refresh()
    })
  }

  const unfollow = async () => {
    setIsFetching(true);

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: 'DELETE',
    });

    setIsFetching(false);
    startTransition(() => router.refresh())
  }

  if (isFollowing) {
    return (
      <button onClick={unfollow} className="btn btn-primary btn-sm">
        {!isMutating ? (
          <div className=" flex gap-2 items-center justify-center">
            <StarIcon className="h-4" />
            <span>Deixar de Seguir</span>
          </div>
        ) : (
          <span className="loading loading-spinner"></span>
        )}
      </button>
    )
  } else {
    return (
      <button onClick={follow} className="btn btn-primary btn-sm">
      {!isMutating ? (
        <div className=" flex gap-2 items-center justify-center">
          <OlStarIcon className="h-4" />
          <span>Seguir</span>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </button>
    )
  }
}