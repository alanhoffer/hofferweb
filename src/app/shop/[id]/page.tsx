import Image from 'next/image';
import { notFound } from 'next/navigation';
import { allProducts } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = allProducts.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            className="w-full rounded-lg shadow-lg"
            data-ai-hint={product.hint}
            priority
          />
        </div>
        <div>
          <Badge variant="secondary" className="mb-2">{product.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-primary mb-4">{product.price}</p>
          <Separator className="my-6" />
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          <div className="flex items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground space-y-2">
            <p><strong>SKU:</strong> {product.id.toUpperCase()}</p>
            <p><strong>Availability:</strong> In Stock</p>
          </div>
        </div>
      </div>
    </div>
  );
}
