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
    <section className="border-t border-gray-200 px-6 py-16 dark:border-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl dark:text-white">
            Our team
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member) => (
            <li key={member.name} className="group">
              <div className="overflow-hidden">
                <img
                  alt=""
                  src={member.imageUrl}
                  className="aspect-[3/2] w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="mt-4">
                  <h3 className="text-foreground text-lg font-medium dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {member.role}
                  </p>
                  <div className="mt-3 flex gap-4">
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-purple-400"
                      >
                        <Twitter className="size-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-purple-400"
                      >
                        <Linkedin className="size-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
