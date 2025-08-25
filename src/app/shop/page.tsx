'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allProducts } from '@/lib/placeholder-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

export default function ShopPage() {
  const [filter, setFilter] = useState('Normal'); // 'Normal', 'Live'

  const filteredProducts = allProducts.filter(product => {
    if (filter === 'Live') return product.category === 'Live Bees';
    if (filter === 'Normal') return product.category === 'Honey' || product.category === 'Equipment';
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Shop</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Everything you need for a thriving hive, from sweet honey to essential gear.
        </p>
      </header>

      <div className="mb-8 flex justify-center gap-4">
        <Button
          onClick={() => setFilter('Normal')}
          variant={filter === 'Normal' ? 'default' : 'outline'}
        >
          Normal Products
        </Button>
        <Button
          onClick={() => setFilter('Live')}
          variant={filter === 'Live' ? 'default' : 'outline'}
        >
          Queen Cells
        </Button>
      </div>

      <div className={cn(
        "grid gap-8",
        filter === 'Live' ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      )}>
        {filteredProducts.map((product) => (
          filter === 'Live' ? (
            <Card key={product.id} className="w-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-3">
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-1">
                  <div className="w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: '1 / 1' }} // Mantiene proporción si quieres cuadrada
                      data-ai-hint={product.hint}
                    />
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-3xl font-bold text-primary">{product.price}</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      {product.features.map((feature, i) => <li key={i}>{feature}</li>)}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full sm:w-auto" size="lg">
                      <Link href={`/shop/${product.id}`}>
                        <ShoppingCart className="mr-2" />
                        View Details & Purchase
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>

          ) : (
            <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/shop/${product.id}`} className="block flex justify-center items-center h-48 p-5">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={50}
                  className="max-h-full max-w-full rounded-lg"
                  data-ai-hint={product.hint}
                />
              </Link>
              <CardHeader className="flex-grow">
                <CardTitle className="text-lg leading-snug">
                  <Link href={`/shop/${product.id}`} className="hover:text-primary transition-colors">{product.name}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-primary">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/shop/${product.id}`}>View Product</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        ))}
      </div>
    </div>
  );
}
