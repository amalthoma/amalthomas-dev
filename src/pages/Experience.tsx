import { useExperience } from "@/hooks/use-portfolio";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const { data: experience, isLoading } = useExperience();

  if (isLoading) return <div className="p-8"><Skeleton className="h-96 w-full" /></div>;

  return (
    <div className="max-w-4xl">
      <PageHeader 
        title="Professional Journey" 
        description="My career timeline and key achievements in the industry."
      />

      <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-12 py-4">
        {experience?.map((role, idx) => (
          <motion.div 
            key={role.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_0_4px_rgba(var(--background),1)] z-10" />

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{role.role}</h3>
                  <div className="flex items-center gap-2 text-primary font-medium mt-1">
                    <Briefcase className="w-4 h-4" />
                    {role.company}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-3 h-3" />
                  {role.period}
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {role.description}
              </p>

              {role.achievements && role.achievements.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {role.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground group">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 group-hover:bg-primary transition-colors" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
