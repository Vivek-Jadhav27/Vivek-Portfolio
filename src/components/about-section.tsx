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
            I am a passionate Software Developer with expertise in Java, Python, SQL, and Flutter. I have hands-on experience in building ML-driven applications and RESTful APIs. I am interested in backend, data-intensive systems, and engineering solutions at scale. As a quick learner with a strong foundation in DSA and problem-solving, I am always eager to take on new challenges.
          </p>
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
