import { useUses } from "@/hooks/use-portfolio";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Laptop, Code, Monitor, Keyboard } from "lucide-react";

export default function Uses() {
  const { data: uses, isLoading } = useUses();

  if (isLoading) return <div className="p-8"><Skeleton className="h-96 w-full" /></div>;

  const getIcon = (cat: string) => {
    switch(cat.toLowerCase()) {
      case 'hardware': return <Monitor className="w-5 h-5 text-primary" />;
      case 'software': return <Laptop className="w-5 h-5 text-primary" />;
      case 'editor': return <Code className="w-5 h-5 text-primary" />;
      default: return <Keyboard className="w-5 h-5 text-primary" />;
    }
  };

  const groupedUses = uses?.reduce((acc, use) => {
    if (!acc[use.category]) acc[use.category] = [];
    acc[use.category].push(use);
    return acc;
  }, {} as Record<string, typeof uses>);

  return (
    <div className="max-w-4xl">
      <PageHeader 
        title="Uses" 
        description="Software I use, gadgets I love, and other things I recommend."
      />

      <div className="space-y-12">
        {groupedUses && Object.entries(groupedUses).map(([category, items], idx) => (
          <motion.section 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h2 className="text-xl font-bold font-display mb-6 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-secondary">
                {getIcon(category)}
              </span>
              {category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item) => (
                <div key={item.id} className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors">
                  <h3 className="font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
