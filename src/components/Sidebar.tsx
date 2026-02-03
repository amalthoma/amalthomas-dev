import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  User, 
  Code2, 
  Briefcase, 
  FolderGit2, 
  Wrench, 
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  FileText,
  Sun,
  Moon
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/" },
  { icon: User, label: "About", href: "/about" },
  { icon: Code2, label: "Skills", href: "/skills" },
  { icon: Briefcase, label: "Experience", href: "/experience" },
  { icon: FolderGit2, label: "Projects", href: "/projects" },
  { icon: Wrench, label: "Uses", href: "/uses" },
  { icon: Mail, label: "Contact", href: "/contact" },
];

export function Sidebar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-card/95 backdrop-blur-md border-r border-border shadow-2xl">
      <div className="p-6 border-b border-border/50">
        <h1 className="text-2xl font-bold font-display bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          Amal<span className="text-primary">.Dev</span>
        </h1>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location === item.href || (item.href !== '/' && location.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href} className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
              isActive 
                ? "bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20" 
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}>
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
              )} />
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border/50">
        <div className="flex items-center justify-between mb-4 px-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Theme</p>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-secondary/50 text-foreground hover:bg-secondary transition-colors border border-border/50"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              AT
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Amal Thomas</p>
              <p className="text-xs text-muted-foreground">Fullstack Developer</p>
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            <a href="https://github.com/amalthoma" target="_blank" rel="noopener noreferrer" 
              className="p-2 rounded-lg hover:bg-background text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/amal-thomas-67aa0a263" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-background text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <button className="p-2 rounded-lg hover:bg-background text-muted-foreground hover:text-foreground transition-colors" title="Resume">
              <FileText className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between p-4 bg-background/80 backdrop-blur-md border-b border-border">
        <h1 className="text-lg font-bold font-display">Amal.Dev</h1>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-secondary text-foreground"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 fixed inset-y-0 left-0 z-20">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 left-0 w-[80%] max-w-sm z-50 lg:hidden transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        )}
      >
        <SidebarContent />
      </div>
    </>
  );
}
