'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, Loader2, MailOpen } from 'lucide-react';

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline" capitalize>
        outline
      </Button>
      <Button variant="secondary" capitalize>
        secondary
      </Button>
      <Button disabled capitalize>
        disabled
      </Button>
      <Button onClick={() => console.log('Clicked!!')}>Click me!</Button>
      <Button onClick={() => console.log('Clicked!!')} variant="success">
        success
      </Button>

      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>

      <Button>
        <MailOpen /> Login with Email
      </Button>

      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
