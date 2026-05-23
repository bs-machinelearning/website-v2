import { Linkedin, Twitter } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  twitter?: string;
  linkedin?: string;
};

const Team = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  return (
    <div className="mx-auto max-w-6xl">
      <ul
        role="list"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {teamMembers.map((member) => (
          <li
            key={member.name}
            className="group border-border bg-card hover:border-primary/50 hover:shadow-primary/10 relative overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                alt=""
                src={member.imageUrl}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="bg-card relative p-6">
              <div className="to-card/80 absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent" />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-primary mt-1 text-sm font-medium">
                {member.role}
              </p>
              <div className="mt-4 flex gap-4">
                {member.twitter && (
                  <a
                    href={member.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="size-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="size-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
