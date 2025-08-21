import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { myCourses } from '@/lib/placeholder-data';
import { Separator } from '@/components/ui/separator';
import { Award, PlayCircle } from 'lucide-react';

export default function MyCoursesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold font-headline">My Courses</h1>
        <p className="text-muted-foreground">Continue your learning journey and access your certificates.</p>
      </header>
      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myCourses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader className="flex-row gap-4 items-start p-4">
              <Image
                src={course.image}
                alt={course.title}
                width={120}
                height={80}
                className="rounded-md object-cover"
                data-ai-hint={course.hint}
              />
              <div className="flex-grow">
                <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                <CardDescription className="text-sm mt-1">{course.level}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4 pt-0">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} aria-label={`${course.progress}% complete`} />
              </div>
            </CardContent>
            <CardFooter className="p-4 bg-muted/50 flex justify-between">
              <Button asChild>
                <Link href={`/courses/${course.id}`}>
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Continue Learning
                </Link>
              </Button>
              {course.certificateUrl && (
                <Button asChild variant="outline">
                  <Link href={course.certificateUrl}>
                    <Award className="mr-2 h-4 w-4" />
                    Certificate
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      {myCourses.length === 0 && (
        <Card className="text-center py-12">
            <CardContent>
                <h3 className="text-xl font-semibold">No Courses Yet!</h3>
                <p className="text-muted-foreground mt-2 mb-4">You haven't enrolled in any courses. Time to start learning!</p>
                <Button asChild>
                    <Link href="/courses">Browse Courses</Link>
                </Button>
            </CardContent>
        </Card>
      )}
    </div>
  );
}
