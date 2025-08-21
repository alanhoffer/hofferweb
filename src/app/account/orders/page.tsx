import Image from "next/image";
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from '@/components/ui/badge';
import { orders } from '@/lib/placeholder-data';
import { Separator } from '@/components/ui/separator';

export default function MyOrdersPage() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'default';
      case 'Shipped':
        return 'secondary';
      case 'Processing':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold font-headline">My Orders</h1>
        <p className="text-muted-foreground">Check the status of your recent orders.</p>
      </header>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>Order History</CardTitle>
          <CardDescription>A list of your past purchases from BeeCommerce.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {orders.map((order) => (
              <AccordionItem value={order.id} key={order.id}>
                <AccordionTrigger>
                  <div className="flex justify-between w-full pr-4 text-sm">
                    <span className="font-medium">{order.id}</span>
                    <span>{order.date}</span>
                    <Badge variant={getStatusVariant(order.status)}>{order.status}</Badge>
                    <span className="font-semibold">{order.total}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4 py-4">
                    {order.items.map(item => (
                       <li key={item.id} className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                           <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md object-cover" />
                           <div>
                            <Link href={`/shop/${item.id}`} className="font-medium hover:underline">{item.name}</Link>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                           </div>
                         </div>
                         <p className="font-medium">{(item.priceValue * item.quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                       </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
