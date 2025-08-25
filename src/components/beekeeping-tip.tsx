import { generateBeekeepingTip } from '@/ai/flows/generate-beekeeping-tip';
import { BeekeepingTipClient } from './beekeeping-tip-client';

export default async function BeekeepingTip({ section, topic }: { section: string; topic: string }) {

  async function getNewTipAction() {
    'use server';
    try {
        const newTipData = await generateBeekeepingTip({ section, topic, style: 'informative' });
        return newTipData.tip;
    } catch (error) {
        console.error("Error al generar un nuevo consejo:", error);
        return "Lo sentimos, no pudimos generar un nuevo consejo en este momento. Por favor, intentá nuevamente más tarde.";
    }
  }
  
  return <BeekeepingTipClient getNewTip={getNewTipAction} />;
}
