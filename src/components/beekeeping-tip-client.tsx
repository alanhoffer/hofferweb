'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, RefreshCw } from 'lucide-react';

export function BeekeepingTipClient({ initialTip, getNewTip }: { initialTip: string, getNewTip: () => Promise<string> }) {
  const [tip, setTip] = useState(initialTip);
  const [isPending, startTransition] = useTransition();

  const handleRefresh = () => {
    startTransition(async () => {
      const newTip = await getNewTip();
      setTip(newTip);
    });
  };

  return (
    <Card className="bg-primary/5 border-primary/20 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Lightbulb className="text-primary h-6 w-6" />
          <span>AI Beekeeping Tip</span>
        </CardTitle>
        <CardDescription>A helpful hint from our AI assistant</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 min-h-[60px]">{tip}</p>
        <Button onClick={handleRefresh} disabled={isPending} size="sm" variant="secondary">
          <RefreshCw className={`mr-2 h-4 w-4 ${isPending ? 'animate-spin' : ''}`} />
          {isPending ? 'Generating...' : 'Get another tip'}
        </Button>
      </CardContent>
    </Card>
  );
}
