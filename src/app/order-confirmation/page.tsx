import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Package } from 'lucide-react';

export default function OrderConfirmationPage() {
  const orderId = "ORD-004";
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex items-center justify-center">
        <Card className="max-w-2xl w-full text-center shadow-lg">
            <CardHeader className="items-center">
                <div className="p-3 bg-green-100 rounded-full">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-3xl mt-4">Thank you for your order!</CardTitle>
                <CardDescription className="max-w-md">
                    Your order has been placed successfully. You will receive an email confirmation shortly.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Separator className="my-6" />
                <div className="text-left space-y-4">
                    <h3 className="font-semibold text-lg">Order Details</h3>
                    <div className="flex justify-between items-center">
                        <p className="text-muted-foreground">Order Number</p>
                        <p className="font-mono text-primary font-semibold">{orderId}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-muted-foreground">Estimated Delivery</p>
                        <p className="font-medium">3-5 Business Days</p>
                    </div>
                     <div className="flex justify-between items-center">
                        <p className="text-muted-foreground">Total Amount</p>
                        <p className="font-bold text-xl">$194.26</p>
                    </div>
                </div>
                 <Separator className="my-6" />
                 <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="flex-1" size="lg">
                        <Link href="/account/orders">
                           <Package className="mr-2 h-5 w-5" />
                           Track My Order
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1" size="lg">
                        <Link href="/shop">Continue Shopping</Link>
                    </Button>
                 </div>
            </CardContent>
        </Card>
    </div>
  );
}
