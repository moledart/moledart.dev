import { TEmployment } from "@/data";

export default function EmploymentCard({ job }: { job: TEmployment }) {
  return (
    <div className={`${!job.isRelated && "opacity-60"}`}>
      <span className="text-muted-foreground text-sm">
        {job.startDate} - {job.endDate || ""}
      </span>
      <h3 className="text-xl">{job.position}</h3>
      <p className="text-sm mb-2">{job.company}</p>
      <p className="text-muted-foreground text-sm">{job.description}</p>
    </div>
  );
}
