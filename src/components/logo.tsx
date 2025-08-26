import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Image 
        src="https://i.ibb.co/KzXv2TkY/Component-1.png"
        alt="Cabaña Hoffer Logo"
        width={40}
        height={40}
        className="h-10 w-auto"
      />
      <span className="font-bold font-headline text-lg">Cabaña Hoffer</span>
    </Link>
  );
}
