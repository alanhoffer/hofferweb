import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { orders } from '@/lib/placeholder-data';
import { MinusCircle, PlusCircle, Trash2, ArrowRight } from 'lucide-react';

const cartItems = orders.flatMap(order => order.items.slice(0, 1));
const subtotal = cartItems.reduce((acc, item) => acc + item.priceValue * item.quantity, 0);
const shipping = 5.00;
const tax = subtotal * 0.08;
const total = subtotal + shipping + tax;

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Shopping Cart</h1>
      </header>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Your Items ({cartItems.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="divide-y">
                        {cartItems.map(item => (
                            <li key={item.id} className="py-4 flex flex-col md:flex-row gap-4 justify-between">
                                <div className="flex gap-4">
                                    <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md object-cover" />
                                    <div>
                                        <Link href={`/shop/${item.id}`} className="font-semibold hover:text-primary">{item.name}</Link>
                                        <p className="text-muted-foreground text-sm">{item.price}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Button variant="ghost" size="icon" className="h-7 w-7"><MinusCircle className="h-4 w-4" /></Button>
                                            <Input type="number" value={item.quantity} className="w-14 h-8 text-center" readOnly />
                                            <Button variant="ghost" size="icon" className="h-7 w-7"><PlusCircle className="h-4 w-4" /></Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row md:flex-col items-center justify-between">
                                     <p className="text-lg font-semibold">{(item.priceValue * item.quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                                     <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                                        <Trash2 className="h-4 w-4" />
                                     </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between">
                    <p className="text-muted-foreground">Subtotal</p>
                    <p>{subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </div>
                 <div className="flex justify-between">
                    <p className="text-muted-foreground">Shipping</p>
                    <p>{shipping.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </div>
                 <div className="flex justify-between">
                    <p className="text-muted-foreground">Tax</p>
                    <p>{tax.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                    <p>Total</p>
                    <p>{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" size="lg">
                <Link href="/checkout">Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
