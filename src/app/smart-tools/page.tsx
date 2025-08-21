import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowRight, Cpu, ShoppingCart, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SmartToolsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Smart Beekeeping Solutions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover our innovative tools for hive management and queen breeding.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#ai-app">
                Explore AI App <Cpu className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#breeders-panel">
                Buy Queen Breeder’s Panel{' '}
                <ShoppingCart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1 – AI Beekeeping Assistant & Apiary Management */}
      <section id="ai-app" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold font-headline mb-4">
              AI Beekeeping Assistant & Apiary Management
            </h2>
            <p className="text-muted-foreground mb-4">
              Our AI-powered beekeeping application is designed to support
              beekeepers at every step. It provides:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Instant answers to general beekeeping questions.</li>
              <li>
                A complete apiary management system to track hive health, queen
                age, inspections, treatments, and honey yields.
              </li>
            </ul>
            <p className="text-muted-foreground mb-8">
              With 24/7 guidance, this tool helps you make informed decisions
              and optimize your beekeeping operations.
            </p>
            <Button asChild>
              <Link href="/contact">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://placehold.co/600x400.png"
              alt="AI Assistant on a tablet in an apiary"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="tablet apiary"
            />
          </div>
        </div>
      </section>

      {/* Section 2 – Queen Breeder’s Tool Panel */}
      <section id="breeders-panel" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Queen breeder's toolkit"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="beekeeping tools"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">
              Queen Breeder’s Tool Panel
            </h2>
            <p className="text-muted-foreground mb-6">
              For professional queen breeders, we offer a complete toolkit in
              one convenient panel. This includes grafting tools, cell cups,
              introduction cages, and everything needed to raise high-quality
              queens. A practical and reliable solution for breeders who want
              efficiency and results.
            </p>
            <Button asChild>
              <Link href="/shop">
                Buy Now <ShoppingCart className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3 – Why Choose Our Innovations? */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-headline mb-10">
            Why Choose Our Innovations?
          </h2>
          <Card className="max-w-3xl mx-auto shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3 font-semibold text-base">Tool</TableHead>
                  <TableHead className="font-semibold text-base">Benefit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    AI Assistant & Apiary Management
                  </TableCell>
                  <TableCell>Smart hive tracking and instant expert guidance.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Queen Breeder’s Panel</TableCell>
                  <TableCell>All-in-one professional toolkit for queen rearing.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

       {/* Final Call to Action */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold font-headline mb-4">Ready to Get Started?</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg mb-8">
               Whether you want to optimize your apiary with AI or start breeding queens like a pro, our smart tools provide everything you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Button asChild size="lg">
                  <Link href="#ai-app">
                    Start with AI App <Cpu className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#breeders-panel">
                    Order Breeder’s Panel <ShoppingCart className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
