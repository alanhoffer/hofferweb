'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Logo from './logo';
import { navLinks } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

export default function Header() {
  const pathname = usePathname();
  // Placeholder for cart item count
  const cartItemCount = 3;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">My Account</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -right-2 -top-2 h-5 w-5 justify-center p-0">{cartItemCount}</Badge>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
                <Logo />
                <nav className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 border-t pt-4 flex flex-col gap-4">
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/account">
                      <User className="mr-2 h-5 w-5" />
                      My Account
                    </Link>
                  </Button>
                   <Button variant="outline" asChild className="w-full relative">
                    <Link href="/cart">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Shopping Cart
                      {cartItemCount > 0 && (
                         <Badge className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 justify-center p-0">{cartItemCount}</Badge>
                      )}
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/login">Login</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
