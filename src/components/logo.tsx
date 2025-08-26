import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-bold font-headline", className)}>
      <Image 
        src="https://i.ibb.co/68g8zPz/Component-1.png"
        alt="Cabaña Hoffer Logo"
        width={140}
        height={40}
      />
    </Link>
  );
}
