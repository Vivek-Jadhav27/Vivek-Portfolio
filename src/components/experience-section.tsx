const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Innovate Inc.",
    period: "Jan 2021 - Present",
    description: "Leading the development of a scalable e-commerce platform using Next.js and TypeScript. Mentoring junior developers and implementing best practices for code quality and performance.",
  },
  {
    role: "Software Engineer",
    company: "Tech Solutions",
    period: "Jun 2018 - Dec 2020",
    description: "Developed and maintained several client-facing web applications with React and Redux. Collaborated with designers and product managers to deliver high-quality features.",
  },
  {
    role: "Web Developer Intern",
    company: "Digital Creations",
    period: "May 2017 - Aug 2017",
    description: "Assisted the development team in building and testing new features for a content management system. Gained hands-on experience with HTML, CSS, and JavaScript.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Experience</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Professional History</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My career path and professional growth over the years.
          </p>
        </div>
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center mb-12">
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="p-4 rounded-lg bg-card shadow-md border">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="font-semibold text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
