'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, ShoppingBag, BookOpen, LogOut } from 'lucide-react';
import { accountNavLinks } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navIcons = {
  '/account': User,
  '/account/orders': ShoppingBag,
  '/account/courses': BookOpen,
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <nav className="flex flex-col space-y-2 p-4 border rounded-lg bg-card">
            {accountNavLinks.map((link) => {
              const Icon = navIcons[link.href as keyof typeof navIcons] || User;
              return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-primary/10',
                  pathname === link.href && 'bg-primary/10 text-primary font-semibold'
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            )})}
            <div className="pt-2 mt-2 border-t">
               <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10">
                <LogOut className="mr-3 h-4 w-4" />
                Logout
               </Button>
            </div>
          </nav>
        </aside>
        <main className="md:col-span-3">
          {children}
        </main>
      </div>
    </div>
  );
}
