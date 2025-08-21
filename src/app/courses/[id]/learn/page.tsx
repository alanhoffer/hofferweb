import { notFound } from 'next/navigation';
import { allCourses } from '@/lib/placeholder-data';
import { CourseLearnClientPage } from './course-learn-client-page';

export default function CourseLearnPage({ params }: { params: { id: string } }) {
  const course = allCourses.find((c) => c.id === params.id);

  if (!course) {
    notFound();
  }

  return <CourseLearnClientPage course={course} />;
}
