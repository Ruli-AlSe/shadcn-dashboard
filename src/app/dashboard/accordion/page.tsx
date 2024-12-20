import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
  {
    id: 'item-1',
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    id: 'item-2',
    question: 'How do I get started?',
    answer:
      'You can start by reading the documentation to learn more about the components and how to use them.',
  },
  {
    id: 'item-3',
    question: 'Can I use it on multiple projects?',
    answer: 'Yes. It is licened under the MIT license. You can use it on multiple projects.',
  },
];

export default function AccordionPage() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
