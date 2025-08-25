'use client';

import { useEffect, useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, RefreshCw } from 'lucide-react';

export function BeekeepingTipClient({ getNewTip }: { getNewTip: () => Promise<string> }) {
  const [tip, setTip] = useState('Cargando tu consejo apícola...');
  const [isPending, startTransition] = useTransition();

  const handleRefresh = () => {
    startTransition(async () => {
      const newTip = await getNewTip();
      setTip(newTip);
    });
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <Card className="bg-primary/5 border-primary/20 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Lightbulb className="text-primary h-6 w-6" />
          <span>Consejo Apícola AI</span>
        </CardTitle>
        <CardDescription>Un consejo útil de nuestro asistente de IA</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 min-h-[60px]">{tip}</p>
        <Button onClick={handleRefresh} disabled={isPending} size="sm" variant="secondary">
          <RefreshCw className={`mr-2 h-4 w-4 ${isPending ? 'animate-spin' : ''}`} />
          {isPending ? 'Generando...' : 'Obtener otro consejo'}
        </Button>
      </CardContent>
    </Card>
  );
}
