import { useProjects } from "@/hooks/use-portfolio";
import { PageHeader } from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Link } from "wouter";
import { ExternalLink, Github, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();
  const [filter, setFilter] = useState<string>("All");

  if (isLoading) return <div className="p-8"><Skeleton className="h-96 w-full" /></div>;

  const categories = ["All", ...Array.from(new Set(projects?.map(p => p.category) || []))];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects?.filter(p => p.category === filter);

  return (
    <div className="max-w-6xl">
      <PageHeader 
        title="Featured Projects" 
        description="A showcase of my best work, side projects, and open source contributions."
        stats={[
          { label: "Total Projects", value: String(projects?.length || 0) },
          { label: "Featured", value: String(projects?.filter(p => p.featured).length || 0) }
        ]}
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              filter === cat 
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects?.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                
                {/* IMAGE SECTION */}
                <div className="aspect-video bg-gradient-to-br from-secondary/50 to-background border-b border-border/50 relative overflow-hidden">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                      <Layers className="w-16 h-16 text-muted-foreground" />
                    </div>
                  )}
                  
                  {/* Hover Overlay with Links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform"
                        title="View Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-primary rounded-full text-white hover:scale-110 transition-transform"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors mb-4">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack?.slice(0, 4).map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/projects/${project.id}`}
                    className="w-full py-2.5 rounded-lg border border-border text-center text-sm font-semibold hover:bg-secondary transition-colors"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}