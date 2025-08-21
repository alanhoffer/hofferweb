import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, UserCircle, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import { blogPosts } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
      <article>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCircle className="h-4 w-4" />
              <span>By {post.author}</span>
            </div>
          </div>
        </header>

        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg mb-8"
          data-ai-hint={post.hint}
          priority
        />

        <div className="prose prose-lg max-w-none text-foreground/90 prose-headings:text-primary prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80">
          <p className="lead text-xl text-muted-foreground">{post.summary}</p>
          <p>{post.content}</p>
        </div>

        <Separator className="my-8" />

        <footer className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Share2 className="h-5 w-5 text-muted-foreground" />
            <span className="font-semibold">Share this post:</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Share on Twitter</span>
            </Button>
            <Button variant="outline" size="icon">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Share on Facebook</span>
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">Share on LinkedIn</span>
            </Button>
          </div>
        </footer>
      </article>
    </div>
  );
}
