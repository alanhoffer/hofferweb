import Image from 'next/image';
import { notFound } from 'next/navigation';
import { allCourses } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BarChart } from 'lucide-react';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = allCourses.find((c) => c.id === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-2">
          <Badge variant="secondary" className="mb-2 bg-accent text-accent-foreground">{course.level}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">{course.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
          
          <div className="mb-8">
            <Image
              src={course.image}
              alt={course.title}
              width={800}
              height={450}
              className="w-full rounded-lg shadow-lg"
              data-ai-hint={course.hint}
              priority
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold font-headline mb-4">What You'll Learn</h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {course.curriculum.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24 shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-4xl font-bold text-primary">{course.price}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button size="lg" className="w-full">Buy Course</Button>
              <div className="text-sm text-muted-foreground space-y-2">
                 <div className="flex items-center gap-2">
                    <BarChart className="h-4 w-4" />
                    <span>Level: {course.level}</span>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
