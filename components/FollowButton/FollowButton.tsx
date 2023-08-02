import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import FollowerClient from "./FollowClient";

interface Props {
  targetUserId: string;
}

export async function FollowButton({ targetUserId }: Props) {
  const session = await getServerSession(authOptions);

  const currentUserId = await prisma.user
    .findFirst({ where: { email: session?.user?.email! } })
    .then((user) => user?.id);
  
  const isFollowing = await prisma.follows.findFirst({
    where: { followerId: currentUserId, followingId: targetUserId },
  });

  if(currentUserId === targetUserId) {
    return <button className="btn btn-sm" disabled >Seguir</button>
  }

  return (
    <FollowerClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
  )
}