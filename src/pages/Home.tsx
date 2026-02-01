import { useProjects, useProfile } from "@/hooks/use-portfolio";
import { Link } from "wouter";
import { ArrowRight, Code, Database, Layers, GitBranch, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: profile, isLoading: profileLoading } = useProfile();

  const featuredProjects = projects?.filter(p => p.featured).slice(0, 3) || [];


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (profileLoading) return <div className="p-8"><Skeleton className="h-12 w-64 mb-4" /><Skeleton className="h-4 w-96" /></div>;

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-secondary/30 border border-primary/10 p-8 md:p-12">
        <div className="relative z-10 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Open to Work
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            Building scalable <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Fullstack Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Hi, I'm <span className="text-foreground font-semibold">{profile?.name}</span>. 
            I engineer modern web applications with Python, Django, React, and Next.js.
            Focused on performance, clean code, and user experience.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 hover:-translate-y-0.5 transition-all">
              Contact Me
            </Link>
          </div>
        </div>
        
        {/* Abstract Decorative Elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Terminal, label: "Backend", value: "Django/Python" },
          { icon: Code, label: "Frontend", value: "React/Next.js" },
          { icon: Database, label: "Database", value: "PostgreSQL" },
          { icon: GitBranch, label: "DevOps", value: "Docker/AWS" },
        ].map((stat, idx) => (
          <motion.div variants={item} key={idx} className="bg-card/50 p-6 rounded-2xl border border-border/50 flex items-center gap-4 hover:border-primary/50 transition-colors">
            <div className="p-3 bg-secondary rounded-xl text-primary">
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="font-bold text-foreground">{stat.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold font-display">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-primary hover:underline">View All</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsLoading ? (
             [1, 2, 3].map(i => <Skeleton key={i} className="h-64 rounded-2xl" />)
          ) : (
            featuredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <motion.div 
                  variants={item}
                  className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="aspect-video bg-secondary overflow-hidden">
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
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex gap-2 mb-3">
                      <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/10">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack?.slice(0, 3).map(tech => (
                        <span key={tech} className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.techStack && project.techStack.length > 3 && (
                        <span className="text-xs font-mono text-muted-foreground px-1 py-1">+</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))
          )}
        </div>
      </section>
    </motion.div>
  );
}
