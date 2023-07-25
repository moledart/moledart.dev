import Icon from "@/components/icon";
import { contacts, employment, projects } from "@/data";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/projectCard";
import EmploymentCard from "@/components/jobCard";

export default function Home() {
  return (
    <main className="grid py-10 px-6">
      <section className="py-10 md:py-20">
        <div className="flex items-center text-base text-muted-foreground gap-2">
          <p>31 y.o.</p>
          &bull;
          <p>Tbilisi, Georgia</p>
        </div>
        <h1 className="text-5xl mb-4">
          Hello there <br />
          My name is <span className="text-muted-foreground">And</span>rew
        </h1>
        <p className="text-base max-w-prose text-muted-foreground mb-8">
          I am a frontend develoer with focus on simplicity, usability and
          performance.
        </p>
        <div className="flex gap-6">
          {contacts.map(({ href, icon, title }) => (
            <Link
              key={href}
              href={href}
              className="underline-offset-4 hover:underline px-0 flex gap-2 itmes-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name={icon} className="h-5 w-5 text-muted-foreground" />
              {title}
            </Link>
          ))}
        </div>
      </section>
      <section className="py-10 md:py-20">
        <h2 className="mb-6">Latest work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section className="py-10 md:py-20">
        <h2 className="mb-6">Employment history</h2>
        <div className="grid grid-cols-1 gap-6">
          {employment.map((job) => (
            <EmploymentCard key={job.company} job={job} />
          ))}
        </div>
      </section>
      <section className="py-10 md:py-20">
        <h2 className="mb-6">Education</h2>
        <span className="text-muted-foreground text-sm">09 - 14</span>
        <h3 className="text-xl">Bachelor of Economics</h3>
        <p className="text-sm mb-2 text-muted-foreground">Finance University</p>
      </section>
    </main>
  );
}
