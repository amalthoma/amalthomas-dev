import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
  stats?: { label: string; value: string }[];
}

export function PageHeader({ title, description, stats }: PageHeaderProps) {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-2 max-w-2xl text-lg"
          >
            {description}
          </motion.p>
        </div>
        
        {stats && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 md:gap-8"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-card px-4 py-2 rounded-xl border border-border/50 shadow-sm">
                <div className="text-2xl font-bold font-mono text-primary">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
      <div className="h-px bg-gradient-to-r from-border to-transparent" />
    </div>
  );
}
