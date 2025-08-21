'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Course } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { CheckCircle, PlayCircle, ArrowLeft, ArrowRight, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { QuizCard } from './quiz-card';

export function CourseLearnClientPage({ course }: { course: Course }) {
  const [activeLesson, setActiveLesson] = useState(0);
  
  const currentContent = course.curriculum[activeLesson];
  const progress = ((activeLesson + 1) / course.curriculum.length) * 100;

  const handleNext = () => {
      setActiveLesson(prev => Math.min(course.curriculum.length - 1, prev + 1));
  }

  const handlePrev = () => {
    setActiveLesson(prev => Math.max(0, prev - 1));
  }

  const isQuiz = typeof currentContent !== 'string';

  return (
    <div className="flex min-h-screen bg-muted/40">
      <aside className="hidden md:flex flex-col w-80 border-r bg-background">
        <div className="p-4 border-b">
          <Link href="/account/courses" className="flex items-center gap-2 text-sm font-semibold mb-4">
             <ArrowLeft className="h-4 w-4" /> Back to My Courses
          </Link>
          <h1 className="text-xl font-bold font-headline">{course.title}</h1>
          <Progress value={progress} className="mt-2 h-2" />
          <p className="text-xs text-muted-foreground mt-1">{Math.round(progress)}% Complete</p>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {course.curriculum.map((lesson, index) => {
              const isLessonQuiz = typeof lesson !== 'string';
              const Icon = isLessonQuiz ? Lightbulb : CheckCircle;
              const title = isLessonQuiz ? lesson.title : lesson;

              return (
              <li key={index}>
                <button
                  onClick={() => setActiveLesson(index)}
                  className={cn(
                    'w-full text-left flex items-start gap-3 p-3 rounded-md transition-colors',
                    activeLesson === index
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'hover:bg-muted'
                  )}
                >
                  <Icon className={cn("h-5 w-5 mt-0.5 flex-shrink-0", activeLesson > index ? 'text-primary' : 'text-muted-foreground/50')} />
                  <span>{title}</span>
                </button>
              </li>
            )})}
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
            <header className="mb-8">
                <p className="text-sm text-muted-foreground">
                    {isQuiz ? 'Quiz' : `Lesson ${activeLesson + 1}`} of {course.curriculum.length}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mt-1">
                    {isQuiz ? (currentContent as any).title : currentContent}
                </h2>
            </header>
            
            {isQuiz ? (
                <QuizCard quiz={(currentContent as any)} onCompleted={handleNext} />
            ) : (
                <>
                <div className="aspect-video bg-black rounded-lg mb-8 relative overflow-hidden shadow-lg">
                    <Image
                        src="https://placehold.co/1280x720.png"
                        alt="Video placeholder"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="lesson video"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <PlayCircle className="h-16 w-16 text-white/70" />
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p>This is placeholder content for the lesson: <strong>{currentContent}</strong>. Replace this with the actual lesson content, including text, images, and other resources.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
                    <p>Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.</p>
                </div>
                </>
            )}

            <div className="mt-12 flex justify-between">
                <Button 
                    variant="outline"
                    onClick={handlePrev}
                    disabled={activeLesson === 0}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                </Button>
                 <Button
                    onClick={handleNext}
                    disabled={activeLesson === course.curriculum.length - 1}
                 >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
      </main>
    </div>
  );
}
