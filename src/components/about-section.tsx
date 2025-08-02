import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            About Me
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">My Journey</h2>
           <div className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed space-y-4">
            <p>
              I’m a recent Computer Engineering graduate who discovered that coding is a lot like life—you break things, fix them, and then act like you knew what you were doing all along 😅. My journey has been a mix of late-night debugging marathons, tiny victories that felt huge, and learning that caffeine and curiosity are a developer’s best friends.
            </p>
            <p>
              🌱 Over time, I realized that growth isn’t just about writing better code but also about building consistency, habits, and communities. From mentoring peers to experimenting with new ideas, I’ve enjoyed turning challenges into stepping stones.
            </p>
            <p>
             ✨ Today, I see myself as someone who loves solving problems, learning fast, and adding a little creativity (and sometimes humor) into everything I do. My next adventure? Joining a dynamic team where I can keep growing—without breaking too many things on production.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
            <Image
              src="https://lh3.googleusercontent.com/d/1M97qAPvC1XObU1yocN9St5s5P5LezIiH"
              alt="Vivek Jadhav's Portrait"
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
