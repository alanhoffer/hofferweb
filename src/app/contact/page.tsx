import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We'd love to hear from you! Whether you have a question about our products, courses, or just want to talk bees, we're here to help.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Question about an order" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." rows={6} />
              </div>
              <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:hello@beecommerce.com" className="text-muted-foreground hover:text-primary">hello@beecommerce.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">Apiary Location</h3>
                  <p className="text-muted-foreground">123 Honeycomb Lane,<br/>Beesville, USA 12345</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <CardHeader>
                <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <Image 
                    src="https://placehold.co/600x400.png"
                    alt="Map showing apiary location"
                    width={600}
                    height={400}
                    className="w-full"
                    data-ai-hint="map location"
                />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
