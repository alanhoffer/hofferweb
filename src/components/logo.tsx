import Link from 'next/link';
import { cn } from '@/lib/utils';

function BeeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.5 4.5a3.5 3.5 0 0 0-5 0" />
      <path d="M18 10a2.5 2.5 0 0 1-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5a2.5 2.5 0 0 1 5 0Z" />
      <path d="M8.5 10a2.5 2.5 0 0 1-2.5 2.5C4.6 12.5 3.5 11.4 3.5 10a2.5 2.5 0 0 1 5 0Z" />
      <path d="M12.5 14.5a3.5 3.5 0 0 1 5 0" />
      <path d="m20.5 18-3.3-1.2" />
      <path d="m3.5 18 3.3-1.2" />
      <path d="M12.5 4.5a3.5 3.5 0 0 1-5 0" />
      <path d="m14 18.5 2.4-1.6" />
      <path d="m10 18.5-2.4-1.6" />
      <path d="m15.5 14.5-3-1" />
      <path d="m8.5 14.5 3-1" />
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-bold font-headline", className)}>
      <div className="p-1 bg-primary rounded-md">
        <BeeIcon className="h-6 w-6 text-primary-foreground" />
      </div>
      <span>Cabaña Hoffer</span>
    </Link>
  );
}
