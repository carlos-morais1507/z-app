import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  }
}

export default async function UserProfile({ params }: Props) {
  return (
    <div>

    </div>
  )
}