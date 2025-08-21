'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allProducts } from '@/lib/placeholder-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const categories = ['All', 'Honey', 'Live Bees', 'Equipment'];

export default function ShopPage() {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Shop</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Everything you need for a thriving hive, from sweet honey to essential gear.
        </p>
      </header>
      
      <div className="mb-8 flex justify-center">
        <div className="w-full max-w-xs">
          <Label htmlFor="category-filter" className="sr-only">Filter by category</Label>
          <Select onValueChange={setFilter} defaultValue="All">
            <SelectTrigger id="category-filter">
              <SelectValue placeholder="Filter by category..." />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/shop/${product.id}`} className="block">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="w-full h-64 object-cover"
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
        ))}
      </div>
    </div>
  );
}
