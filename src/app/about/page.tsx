import Image from 'next/image';
import { Target, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function BeehiveIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 2l8 4.5v9l-8 4.5-8-4.5v-9L12 2z"></path>
      <path d="M12 22v-9"></path>
      <path d="M4 6.5l8 4.5 8-4.5"></path>
      <path d="M4 15.5l8-4.5 8 4.5"></path>
      <path d="M12 2v4.5"></path>
    </svg>
  );
}


export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">About Cabaña Hoffer</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the passion, people, and purpose behind our hive.
        </p>
      </header>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Cabaña Hoffer started not as a business, but as a backyard hobby. Our founder, an avid gardener, became fascinated with the vital role bees play in our ecosystem. What began with a single hive soon blossomed into a full-blown passion for apiculture and a desire to share the joy and wonder of beekeeping with others.
            </p>
            <p className="text-muted-foreground">
              We realized there was a need for accessible, high-quality beekeeping supplies and, more importantly, reliable education. That’s when Cabaña Hoffer was born—to support aspiring and experienced beekeepers alike on their journey, providing the tools and knowledge to help their colonies thrive.
            </p>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="The founding team of Cabaña Hoffer smiling in an apiary"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="team photo beekeeping"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>
              <BeehiveIcon className="h-12 w-12 mx-auto text-primary" />
              <CardTitle className="mt-4">Our Apiary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We manage over 50 hives, focusing on sustainable practices that prioritize bee health and natural honey production.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Target className="h-12 w-12 mx-auto text-primary" />
              <CardTitle className="mt-4">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">To empower beekeepers with top-tier products and education, fostering a community that respects and protects these vital pollinators.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-primary" />
              <CardTitle className="mt-4">Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">A dedicated group of passionate beekeepers, educators, and customer support experts committed to your success.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <div className="text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We're a small team with a big love for bees. Get to know the faces behind Cabaña Hoffer.
            </p>
            <div className="flex justify-center flex-wrap gap-8">
                <div className="flex flex-col items-center">
                    <Image src="https://placehold.co/150x150.png" data-ai-hint="woman portrait smiling" alt="Founder" width={150} height={150} className="rounded-full shadow-md" />
                    <h3 className="mt-4 font-bold">Alex Johnson</h3>
                    <p className="text-sm text-muted-foreground">Founder & Head Beekeeper</p>
                </div>
                 <div className="flex flex-col items-center">
                    <Image src="https://placehold.co/150x150.png" data-ai-hint="man portrait smiling" alt="Educator" width={150} height={150} className="rounded-full shadow-md" />
                    <h3 className="mt-4 font-bold">Ben Carter</h3>
                    <p className="text-sm text-muted-foreground">Lead Educator</p>
                </div>
                 <div className="flex flex-col items-center">
                    <Image src="https://placehold.co/150x150.png" data-ai-hint="woman portrait friendly" alt="Customer Support" width={150} height={150} className="rounded-full shadow-md" />
                    <h3 className="mt-4 font-bold">Casey Lee</h3>
                    <p className="text-sm text-muted-foreground">Customer Happiness</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
