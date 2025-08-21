import Image from 'next/image';
import { notFound } from 'next/navigation';
import { allProducts } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function getStockBadge(stock: string) {
  switch (stock) {
    case 'in_stock':
      return <Badge variant="default" className="bg-green-500 text-white">In Stock</Badge>;
    case 'low_stock':
      return <Badge variant="secondary" className="bg-yellow-500 text-white">Low Stock</Badge>;
    case 'out_of_stock':
      return <Badge variant="destructive">Out of Stock</Badge>;
    default:
      return null;
  }
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = allProducts.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const averageRating = product.reviews.length > 0 
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
    : 0;

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
          <h1 className="text-3xl md:text-4xl font-bold font-headline mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < Math.round(averageRating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">({product.reviews.length} reviews)</span>
          </div>
          <p className="text-3xl font-bold text-primary mb-4">{product.price}</p>
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          <Separator className="my-6" />

          <div>
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Separator className="my-6" />

          <div className="flex items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" disabled={product.stock === 'out_of_stock'}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            {getStockBadge(product.stock)}
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground space-y-2">
            <p><strong>SKU:</strong> {product.id.toUpperCase()}</p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold font-headline mb-6">Customer Reviews</h2>
        <Card>
          <CardContent className="p-6 space-y-6">
            {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index} className="flex gap-4">
                  <Avatar>
                    <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">{review.author}</p>
                        <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{new Date(review.date).toLocaleDateString()}</p>
                    <p className="text-muted-foreground">{review.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
