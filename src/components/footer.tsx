import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-sm">
              Your partner in beekeeping success. Quality supplies, expert knowledge, and a sweet community.
            </p>
          </div>

          <div>
            <h3 className="font-bold font-headline">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/shop" className="text-muted-foreground hover:text-primary">Shop</Link></li>
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary">Courses</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-headline">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Shipping & Returns</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Wholesale</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-1">
            <h3 className="font-bold font-headline">Join our Newsletter</h3>
            <p className="mt-2 text-muted-foreground text-sm">Get the latest buzz on products, tips, and sales.</p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Your email address" className="bg-background" />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} BeeCommerce. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
            <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
            <Link href="#" aria-label="YouTube"><Youtube className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
