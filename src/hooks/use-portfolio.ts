import { useQuery } from "@tanstack/react-query";
import { profile, skills, experience, projects, uses } from "@/lib/static-data";

// ============================================
// PROFILE
// ============================================
export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => profile,
  });
}

// ============================================
// SKILLS
// ============================================
export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: async () => skills,
  });
}

// ============================================
// EXPERIENCE
// ============================================
export function useExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: async () => experience,
  });
}

// ============================================
// PROJECTS
// ============================================
export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => projects,
  });
}

export function useProject(id: number) {
  return useQuery({
    queryKey: ["projects", id],
    queryFn: async () => projects.find(p => p.id === id),
    enabled: !!id,
  });
}

// ============================================
// USES (TOOLS)
// ============================================
export function useUses() {
  return useQuery({
    queryKey: ["uses"],
    queryFn: async () => uses,
  });
}
