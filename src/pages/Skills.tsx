import { useSkills } from "@/hooks/use-portfolio";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Database, Layout, Wrench } from "lucide-react";

export default function Skills() {
  const { data: skills, isLoading } = useSkills();

  if (isLoading) return <div className="p-8"><Skeleton className="h-96 w-full" /></div>;

  const categories = Array.from(new Set(skills?.map(s => s.category) || []));

  const getIcon = (cat: string) => {
    switch(cat.toLowerCase()) {
      case 'frontend': return <Layout className="w-4 h-4 mr-2" />;
      case 'backend': return <Code2 className="w-4 h-4 mr-2" />;
      case 'database': return <Database className="w-4 h-4 mr-2" />;
      default: return <Wrench className="w-4 h-4 mr-2" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <PageHeader 
        title="Technical Arsenal" 
        description="A comprehensive overview of my technical skills and proficiency levels."
        stats={[
          { label: "Total Skills", value: String(skills?.length || 0) },
          { label: "Categories", value: String(categories.length) }
        ]}
      />

      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="mb-8 p-1 h-auto bg-card border border-border/50 rounded-xl">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 w-full">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="px-3 py-2.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all text-sm justify-center items-center min-h-[44px]"
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  {getIcon(category)}
                  <span className="text-xs sm:text-sm">{category}</span>
                </div>
              </TabsTrigger>
            ))}
          </div>
        </TabsList>

        {categories.map(category => (
          <TabsContent key={category} value={category} className="mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {skills?.filter(s => s.category === category).map((skill, idx) => (
                <motion.div 
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <h3 className="font-bold text-base sm:text-lg">{skill.name}</h3>
                    <span className="text-xl sm:text-2xl font-mono font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                      {skill.proficiency}%
                    </span>
                  </div>
                  
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
