import Image from 'next/image';
import Link from 'next/link';
import { Calendar, UserCircle, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">The Cabaña Hoffer Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Your source for beekeeping tips, news, and stories from the hive.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/blog/${post.slug}`} className="block">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={post.hint}
              />
            </Link>
            <CardHeader>
              <CardTitle className="text-xl leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
              </CardTitle>
              <CardDescription className="flex items-center gap-4 pt-2 text-xs">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className="flex items-center gap-1.5"><UserCircle className="h-3.5 w-3.5" /> {post.author}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm">{post.summary}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="p-0">
                <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
