'use client';
import { useState } from 'react';
import type { QuizQuestion } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface QuizCardProps {
  quiz: QuizQuestion;
  onCompleted: () => void;
}

export function QuizCard({ quiz, onCompleted }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAnswer === null) return;
    
    setSubmitted(true);
    const correct = selectedAnswer === quiz.correctAnswer;
    setIsCorrect(correct);
  };

  const handleOptionChange = (value: string) => {
    setSelectedAnswer(parseInt(value));
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{quiz.question}</CardTitle>
        <CardDescription>Select the correct answer below.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <RadioGroup 
            onValueChange={handleOptionChange} 
            disabled={submitted}
            className="space-y-4"
          >
            {quiz.options.map((option, index) => {
              let indicatorColor = '';
              if (submitted) {
                if (index === quiz.correctAnswer) {
                  indicatorColor = 'bg-green-100 border-green-300 text-green-800';
                } else if (index === selectedAnswer) {
                  indicatorColor = 'bg-red-100 border-red-300 text-red-800';
                }
              }
              return (
                <Label 
                  key={index}
                  htmlFor={`option-${index}`}
                  className={cn(
                    "flex items-center space-x-3 p-4 border rounded-md cursor-pointer transition-colors",
                    "has-[:checked]:border-primary",
                    indicatorColor
                  )}
                >
                  <RadioGroupItem value={String(index)} id={`option-${index}`} />
                  <span>{option}</span>
                   {submitted && index === quiz.correctAnswer && <Check className="ml-auto h-5 w-5 text-green-600" />}
                   {submitted && index === selectedAnswer && index !== quiz.correctAnswer && <X className="ml-auto h-5 w-5 text-red-600" />}
                </Label>
              )
            })}
          </RadioGroup>

           {!submitted && <Button type="submit" className="mt-6" disabled={selectedAnswer === null}>Submit Answer</Button>}

        </form>
      </CardContent>
      {submitted && (
        <CardFooter className="flex flex-col items-start p-6 bg-muted/50 rounded-b-lg">
            {isCorrect ? (
                <div className="flex items-center gap-2 text-green-600">
                    <Check className="h-5 w-5" />
                    <p className="font-semibold">Correct! Well done.</p>
                </div>
            ) : (
                 <div className="flex items-center gap-2 text-red-600">
                    <X className="h-5 w-5" />
                    <p className="font-semibold">Not quite. The correct answer is: {quiz.options[quiz.correctAnswer]}</p>
                </div>
            )}
             <Button onClick={onCompleted} className="mt-4">
                Continue
            </Button>
        </CardFooter>
      )}
    </Card>
  );
}
