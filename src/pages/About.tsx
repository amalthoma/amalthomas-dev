import { useProfile } from "@/hooks/use-portfolio";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Mail, Phone } from "lucide-react";

export default function About() {
  const { data: profile, isLoading } = useProfile();

  if (isLoading) return <div className="p-8"><Skeleton className="h-96 w-full" /></div>;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
      <PageHeader 
        title="About Me" 
        description="My journey, my mission, and what drives me as a developer."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <motion.div variants={item} className="md:col-span-1">
          <div className="bg-card border border-border rounded-2xl p-6 sticky top-8">
            {/* Profile Image / Fallback Section */}
            <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 mb-6 flex items-center justify-center text-4xl font-display text-white/20 overflow-hidden shadow-inner">
              {profile?.imageUrl ? (
                <img 
                  src={profile.imageUrl} 
                  alt={profile.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              ) : (
                <span>{profile?.name.charAt(0)}</span>
              )}
            </div>
            <h3 className="text-xl font-bold mb-1">{profile?.name}</h3>
            <p className="text-primary font-medium mb-6">{profile?.role}</p>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" /> {profile?.location}
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" /> {profile?.email}
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" /> {profile?.phone}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <a 
                href={profile?.resumeUrl || "#"} 
                className="block w-full py-2.5 rounded-lg bg-foreground text-background font-bold text-center hover:bg-foreground/90 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="md:col-span-2 space-y-8">
          <motion.section variants={item}>
            <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Objective
            </h2>
            <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50 text-lg leading-relaxed text-muted-foreground">
              {profile?.bio}
            </div>
          </motion.section>

          <motion.section variants={item}>
            <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Background
            </h2>
            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>
                As a passionate Fullstack Developer, I've spent the last few years mastering the art of building scalable web applications. 
                My journey began with Python and quickly evolved into a deep appreciation for the entire web stack.
              </p>
              <p className="mt-4">
                I specialize in the Django ecosystem for robust backend architectures and React/Next.js for creating interactive, responsive frontends. 
                My philosophy is simple: write clean code, solve real problems, and never stop learning.
              </p>
              <p className="mt-4">
                Currently, I'm focused on cloud-native architectures and exploring the potential of AI integration in modern web apps.
              </p>
            </div>
          </motion.section>

          <motion.section variants={item}>
             <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              What I Do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Web Development", desc: "Building responsive, accessible web apps." },
                { title: "Backend Systems", desc: "Designing scalable APIs and database schemas." },
                { title: "UI/UX Implementation", desc: "Translating designs into pixel-perfect code." },
                { title: "Cloud Deployment", desc: "CI/CD pipelines, Docker, and AWS management." }
              ].map((service, i) => (
                <div key={i} className="bg-card border border-border p-4 rounded-xl hover:border-primary/50 transition-colors">
                  <h3 className="font-bold text-foreground mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
}
