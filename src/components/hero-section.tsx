import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-3.5rem)] flex items-center justify-center">
       <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-700/40"></div>
      <div className="container px-4 md:px-6 text-center z-10">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground">
            Hi, I'm Vivek
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A passionate software developer specializing in building modern, responsive, and user-friendly web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce z-10">
         <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6 text-muted-foreground transition-transform hover:scale-125" />
         </a>
      </div>
    </section>
  );
}
