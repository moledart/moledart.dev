import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import { TProject } from "@/data";

export default function ProjectCard({ project }: { project: TProject }) {
  return (
    <article className="border border-muted rounded p-4">
      <header className="flex justify-between items-center">
        <h3 className="text-xl">{project.title}</h3>
        <Link
          href={project.href}
          target="_blank"
          className={`${buttonVariants({
            variant: "link",
          })} gap-2 px-0 py-0 text-muted-foreground h-fit`}
        >
          <span className="text-muted-foreground">go to site</span>
        </Link>
      </header>
      <Badge variant="outline">{project.type}</Badge>
      <div>
        <p className="text-sm mt-4 text-muted-foreground">
          {project.description}
        </p>
        <div className="flex gap-1 flex-wrap mt-4">
          {project.stack.map((tech) => (
            <Badge
              variant="secondary"
              key={tech}
              className="text-muted-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
