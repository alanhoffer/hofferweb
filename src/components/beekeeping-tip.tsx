import { generateBeekeepingTip } from '@/ai/flows/generate-beekeeping-tip';
import { BeekeepingTipClient } from './beekeeping-tip-client';

export default async function BeekeepingTip({ section, topic }: { section: string; topic: string }) {

  async function getNewTipAction() {
    'use server';
    try {
        const newTipData = await generateBeekeepingTip({ section, topic, style: 'informative' });
        return newTipData.tip;
    } catch (error) {
        console.error("Error generating new tip:", error);
        return "Sorry, we couldn't buzz up a new tip right now. Please try again later.";
    }
  }
  
  return <BeekeepingTipClient getNewTip={getNewTipAction} />;
}
