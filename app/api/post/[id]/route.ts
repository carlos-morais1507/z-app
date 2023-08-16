import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body // Access the 'id' parameter correctly
  console.log('Deleting item with id:', id);

  // Perform the actual deletion logic here
  // ...

  return NextResponse.json(id)
}
