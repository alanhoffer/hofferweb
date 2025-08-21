import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function CheckoutPage() {
    const subtotal = 175.98;
    const shipping = 5.00;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Checkout</h1>
      </header>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" defaultValue="Alex Johnson" />
                            </div>
                             <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue="alex.j@example.com" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Shipping Address</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="address">Street Address</Label>
                            <Input id="address" placeholder="123 Honeycomb Lane" />
                        </div>
                        <div className="grid sm:grid-cols-3 gap-4">
                             <div>
                                <Label htmlFor="city">City</Label>
                                <Input id="city" placeholder="Beesville" />
                            </div>
                             <div>
                                <Label htmlFor="state">State</Label>
                                <Input id="state" placeholder="CA" />
                            </div>
                             <div>
                                <Label htmlFor="zip">ZIP Code</Label>
                                <Input id="zip" placeholder="12345" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Payment Method</CardTitle>
                        <CardDescription>All transactions are secure and encrypted.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup defaultValue="card" className="space-y-4">
                            <div className="flex items-center space-x-2 p-4 border rounded-md has-[[data-state=checked]]:border-primary">
                                <RadioGroupItem value="card" id="card" />
                                <Label htmlFor="card" className="flex-1 cursor-pointer">
                                   Credit Card
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2 p-4 border rounded-md has-[[data-state=checked]]:border-primary">
                                <RadioGroupItem value="paypal" id="paypal" />
                                <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                                    PayPal
                                </Label>
                            </div>
                             <div className="flex items-center space-x-2 p-4 border rounded-md has-[[data-state=checked]]:border-primary">
                                <RadioGroupItem value="mercadopago" id="mercadopago" />
                                <Label htmlFor="mercadopago" className="flex-1 cursor-pointer">
                                    MercadoPago
                                </Label>
                            </div>
                        </RadioGroup>
                        <div className="mt-6 space-y-4">
                             <div>
                                <Label htmlFor="card-number">Card Number</Label>
                                <Input id="card-number" placeholder="1234 5678 9101 1121" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="expiry-date">Expiry Date</Label>
                                    <Input id="expiry-date" placeholder="MM / YY" />
                                </div>
                                 <div>
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input id="cvc" placeholder="123" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
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
                <Link href="/order-confirmation">Place Order</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
