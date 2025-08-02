const education = {
    school: "Government Engineering College, Bhavnagar",
    university: "Gujarat Technological University",
    period: "Oct 2021 - June 2025",
    degree: "Bachelor of Engineering, Computer Engineering",
    cgpa: "8.67/10.0 CGPA",
    hsc: "P. P. Savani Chaitanya Vidhya Sankul",
    hsc_period: "June 2020 - May 2021",
    hsc_stream: "Higher Secondary Certificate – Science Stream",
    hsc_percentage: "87.6 %"
};

const experiences = [
  {
    role: "Machine Learning using Python Developer Intern",
    company: "Codespeedy Technology Private Limited",
    period: "Jan 2025 - Apr 2025",
    description: "Gained hands-on experience in Machine Learning by working on real-world datasets. Performed data preprocessing using pandas and NumPy, and strengthened problem-solving skills through debugging ML models.",
  },
];

export function ExperienceSection() {
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
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start mb-12">
              <div className="w-1/2 pr-8 text-right">
                <div className="p-4 rounded-lg bg-card shadow-md border">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="font-semibold text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  <p className="text-muted-foreground mt-2 text-left">{exp.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-4 -translate-x-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
          ))}
           <div className="relative flex items-start mb-12">
            <div className="w-1/2 pl-8 text-left">
                <div className="p-4 rounded-lg bg-card shadow-md border">
                    <h3 className="text-xl font-bold">{education.degree}</h3>
                    <p className="font-semibold text-primary">{education.school}</p>
                    <p className="text-sm text-muted-foreground mt-1">{education.period}</p>
                    <p className="text-muted-foreground mt-2">{education.cgpa}</p>
                </div>
              </div>
               <div className="absolute left-1/2 top-4 -translate-x-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
              <div className="w-1/2 pr-8"></div>
            </div>
             <div className="relative flex items-start mb-12">
              <div className="w-1/2 pr-8 text-right">
                <div className="p-4 rounded-lg bg-card shadow-md border">
                  <h3 className="text-xl font-bold">{education.hsc_stream}</h3>
                  <p className="font-semibold text-primary">{education.hsc}</p>
                   <p className="text-sm text-muted-foreground mt-1">{education.hsc_period}</p>
                   <p className="text-muted-foreground mt-2">{education.hsc_percentage}</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-4 -translate-x-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
        </div>
      </div>
    </section>
  );
}
