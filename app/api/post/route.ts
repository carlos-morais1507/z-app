import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export default async function handler(req: Request, res: Response) {
  if (req.method === 'GET') {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
  } else if (req.method === 'POST') {
    const session = await getServerSession(authOptions);
    const currentUserId = await prisma.user
      .findUnique({ where: { email: session?.user?.email! } })
      .then((user) => user?.id!);

    try {
      const requestBody = await req.json();
      const content = requestBody.post;

      if (!content) {
        return new NextResponse("Content is missing in the request body", { status: 400 });
      }

      console.log(content)

      const record = await prisma.post.create({
        data: {
          content: content,
          likes: 0,
          reposts: 0,
          userId: currentUserId
        }
      });

      return new NextResponse(JSON.stringify(record), { status: 201 });
    } catch (error) {
      return new NextResponse("Invalid JSON in request body", { status: 400 });
    }
  }
}
