import { getExperience, Experience, Education } from '@/lib/data';

function isWork(item: Experience | Education): item is Experience {
    return item.type === 'work';
}

export async function ExperienceSection() {
    const items = await getExperience();
    
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Experience & Education</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Journey</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A timeline of my professional experience and academic background.
          </p>
        </div>
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {items.map((item, index) => (
            <div key={item.id} className="relative flex items-start mb-12">
                {isWork(item) ? (
                    <>
                        <div className="w-1/2 pr-8 text-right">
                            <div className="p-4 rounded-lg bg-card shadow-md border">
                            <h3 className="text-xl font-bold">{item.role}</h3>
                            <p className="font-semibold text-primary">{item.company}</p>
                            <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                            <p className="text-muted-foreground mt-2 text-left">{item.description}</p>
                            </div>
                        </div>
                        <div className="absolute left-1/2 top-4 -translate-x-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
                        <div className="w-1/2 pl-8"></div>
                    </>
                ) : (
                    <>
                        <div className="w-1/2 pr-8"></div>
                        <div className="absolute left-1/2 top-4 -translate-x-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
                        <div className="w-1/2 pl-8 text-left">
                            <div className="p-4 rounded-lg bg-card shadow-md border">
                                <h3 className="text-xl font-bold">{item.degree}</h3>
                                <p className="font-semibold text-primary">{item.school}</p>
                                <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                                <p className="text-muted-foreground mt-2">{item.details}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
