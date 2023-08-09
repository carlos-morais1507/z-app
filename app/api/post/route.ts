import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request, res: Response) {
  const session = await getServerSession(authOptions);
    const currentUserId = await prisma.user
      .findUnique({ where: { email: session?.user?.email! } })
      .then((user) => user?.id!);

      const requestBody = JSON.parse(await req.text());
      const { post } = requestBody;

      const record = await prisma.post.create({
        data: {
          content: post,
          likes: 0,
          reposts: 0,
          userId: currentUserId
        }
      });

  return NextResponse.json(record);
}

