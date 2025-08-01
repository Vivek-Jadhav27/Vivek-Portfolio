import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            About Me
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">My Journey in Tech</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From a curious student to a professional developer, my journey has been fueled by a passion for solving problems and building beautiful things with code. I started with a strong foundation in computer science and have since specialized in modern web technologies. I thrive in collaborative environments and am always eager to learn and grow.
          </p>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My background in both design and development allows me to bridge the gap between aesthetics and functionality, creating seamless digital experiences.
          </p>
        </div>
        <div className="flex justify-center">
            <Image
              src="https://placehold.co/550x550.png"
              alt="Vivek's Portrait"
              width={550}
              height={550}
              className="rounded-full object-cover aspect-square shadow-2xl"
              data-ai-hint="man portrait"
            />
        </div>
      </div>
    </section>
  );
}
