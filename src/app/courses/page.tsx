import Image from 'next/image';
import Link from 'next/link';
import { allCourses } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, BarChart } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Online Beekeeping Academy</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          From novice to expert, our courses are designed to help you succeed in your beekeeping journey.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allCourses.map((course) => (
          <Card key={course.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/courses/${course.id}`} className="block">
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={course.hint}
              />
            </Link>
            <CardHeader>
              <div className="flex justify-between items-center">
                <Badge variant={course.level === 'Beginner' ? 'default' : course.level === 'Intermediate' ? 'secondary' : 'destructive'} className="bg-accent text-accent-foreground">{course.level}</Badge>
                <p className="text-xl font-bold text-primary">{course.price}</p>
              </div>
              <CardTitle className="mt-2 text-xl leading-snug">
                <Link href={`/courses/${course.id}`} className="hover:text-primary transition-colors">{course.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{course.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/courses/${course.id}`}>View Course Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
