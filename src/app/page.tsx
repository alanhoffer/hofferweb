import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  PlayCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { featuredProducts, testimonials, blogPosts, allCourses, allProducts } from '@/lib/placeholder-data';
import BeekeepingTip from '@/components/beekeeping-tip';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

function BeeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.5 4.5a3.5 3.5 0 0 0-5 0" />
      <path d="M18 10a2.5 2.5 0 0 1-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5a2.5 2.5 0 0 1 5 0Z" />
      <path d="M8.5 10a2.5 2.5 0 0 1-2.5 2.5C4.6 12.5 3.5 11.4 3.5 10a2.5 2.5 0 0 1 5 0Z" />
      <path d="M12.5 14.5a3.5 3.5 0 0 1 5 0" />
      <path d="m20.5 18-3.3-1.2" />
      <path d="m3.5 18 3.3-1.2" />
      <path d="M12.5 4.5a3.5 3.5 0 0 1-5 0" />
      <path d="m14 18.5 2.4-1.6" />
      <path d="m10 18.5-2.4-1.6" />
      <path d="m15.5 14.5-3-1" />
      <path d="m8.5 14.5 3-1" />
    </svg>
  );
}

export default function Home() {
  const latestPost = blogPosts[0];
  const latestCourse = allCourses[0];
  const latestProduct = allProducts[0];

  const carouselItems = [
    {
      type: 'Product',
      title: latestProduct.name,
      description: latestProduct.description,
      image: latestProduct.image,
      video: 'https://videos.pexels.com/video-files/2484749/2484749-hd_1920_1080_25fps.mp4',
      hint: latestProduct.hint,
      href: `/shop/${latestProduct.id}`,
      buttonText: 'View Product',
    },
    {
      type: 'Course',
      title: latestCourse.title,
      description: latestCourse.description,
      image: latestCourse.image,
      video: 'https://videos.pexels.com/video-files/4772877/4772877-hd_1920_1080_25fps.mp4',
      hint: latestCourse.hint,
      href: `/courses/${latestCourse.id}`,
      buttonText: 'Start Learning',
    },
    {
      type: 'Blog',
      title: latestPost.title,
      description: latestPost.summary,
      image: latestPost.image,
      video: 'https://videos.pexels.com/video-files/8000454/8000454-hd_1920_1080_24fps.mp4',
      hint: latestPost.hint,
      href: `/blog/${latestPost.slug}`,
      buttonText: 'Read More',
    },
  ];
  
  const videos = [
    {
        src: "https://placehold.co/1280x720.png",
        alt: "Beekeeping Story",
        hint: "beekeeping video",
        title: "Our Beekeeping Story",
    },
    {
        src: "https://placehold.co/1280x720.png",
        alt: "Honey Harvest",
        hint: "honey harvest",
        title: "The Sweet Harvest",
    },
    {
        src: "https://placehold.co/1280x720.png",
        alt: "Queen Rearing",
        hint: "queen bee rearing",
        title: "Rearing Strong Queens",
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Carousel Section */}
      <section className="w-full">
        <Carousel
          opts={{ loop: true }}
          className="group"
        >
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                  <video
                    src='/media/hero-video.MP4'
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4 bg-black/60">
                    <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">{item.type}</Badge>
                    <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
                      {item.title}
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow">
                      {item.description}
                    </p>
                    <div className="mt-8 flex gap-4">
                      <Button asChild size="lg">
                        <Link href={item.href}>
                          {item.buttonText} <ArrowRight className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Carousel>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="w-full h-64 object-cover"
                    data-ai-hint={product.hint}
                  />
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-lg font-semibold text-primary mt-2">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/shop/${product.id}`}>View Product</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-lg">
                <Link href="/shop">Explore All Products <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">A Glimpse Into Our World</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              See our bees in action and learn what makes our apiary special. Watch our story.
            </p>
          </div>
           <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-4xl mx-auto group"
          >
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem key={index}>
                   <div className="aspect-video bg-black rounded-lg relative overflow-hidden shadow-2xl group">
                     <Image
                        src={video.src}
                        alt={video.alt}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={video.hint}
                        className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <PlayCircle className="h-20 w-20 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-white font-bold text-lg drop-shadow-md">{video.title}</h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Carousel>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">From Our Bee-loved Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="ml-4 font-bold">{testimonial.name}</p>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tip Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold font-headline mb-4">
              AI-Powered Beekeeping Wisdom <Sparkles className="inline-block text-accent h-8 w-8" />
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Get instant, helpful tips generated by our AI assistant. Whether you're a novice or a seasoned beekeeper, there's always something new to learn.
            </p>
            <BeekeepingTip section="Home Page" topic="General Beekeeping" />
          </div>
          <div className="w-full md:w-1/2">
             <Image
                src="https://placehold.co/600x400.png"
                alt="Stylized graphic of a bee and a microchip"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="bee microchip"
             />
          </div>
        </div>
      </section>

    </div>
  );
}
