import { useProject } from "@/hooks/use-portfolio";
import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Github, ExternalLink, Cpu, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export default function ProjectDetails() {
  const [match, params] = useRoute("/projects/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: project, isLoading, error } = useProject(id);

  if (isLoading) return <div className="p-8"><Skeleton className="h-96 w-full" /></div>;
  if (error || !project) return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
      <Link href="/projects" className="text-primary hover:underline">Return to Projects</Link>
    </div>
  );

  return (
    <div className="max-w-4xl">
      <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
      </Link>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            {project.title}
          </motion.h1>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-medium">
                Featured
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-semibold flex items-center gap-2 hover:bg-secondary/80 transition-colors"
            >
              <Github className="w-4 h-4" /> Code
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Demo
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-xl font-bold font-display mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.description}
            </p>
          </section>

          {project.problem && (
            <section>
              <h2 className="text-xl font-bold font-display mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </section>
          )}

          {project.solution && (
            <section>
              <h2 className="text-xl font-bold font-display mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-xl font-bold font-display mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 bg-secondary/20 rounded-xl border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 sticky top-8">
            <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-mono border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
