'use server';
/**
 * @fileOverview A beekeeping tip generation AI agent.
 *
 * - generateBeekeepingTip - A function that handles the generation of beekeeping tips.
 * - GenerateBeekeepingTipInput - The input type for the generateBeekeepingTip function.
 * - GenerateBeekeepingTipOutput - The return type for the generateBeekeepingTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBeekeepingTipInputSchema = z.object({
  section: z
    .string()
    .describe(
      'The section of the website for which the beekeeping tip is being generated (e.g., Home Page, Online Shop, Online Courses, Blog, Contact, About Us).'
    ),
  topic: z.string().describe('The specific topic of the beekeeping tip.'),
  style: z
    .string()
    .optional()
    .describe(
      'The desired style of the beekeeping tip (e.g., informative, humorous, cautionary).'
    ),
});
export type GenerateBeekeepingTipInput = z.infer<typeof GenerateBeekeepingTipInputSchema>;

const GenerateBeekeepingTipOutputSchema = z.object({
  tip: z.string().describe('The generated beekeeping tip.'),
});
export type GenerateBeekeepingTipOutput = z.infer<typeof GenerateBeekeepingTipOutputSchema>;

export async function generateBeekeepingTip(input: GenerateBeekeepingTipInput): Promise<GenerateBeekeepingTipOutput> {
  return generateBeekeepingTipFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBeekeepingTipPrompt',
  input: {schema: GenerateBeekeepingTipInputSchema},
  output: {schema: GenerateBeekeepingTipOutputSchema},
  prompt: `You are an expert beekeeper and content creator. Generate a beekeeping tip for the following section of a website:

Section: {{{section}}}
Topic: {{{topic}}}
Style: {{{style}}}

Tip:`, // Changed prompt to align with the instructions.
});

const generateBeekeepingTipFlow = ai.defineFlow(
  {
    name: 'generateBeekeepingTipFlow',
    inputSchema: GenerateBeekeepingTipInputSchema,
    outputSchema: GenerateBeekeepingTipOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
