import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { useProfile } from "@/hooks/use-portfolio";
import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

// 1. Define the Form State Type
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}


export default function Contact() {
  const { data: profile } = useProfile();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. State Management
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Inside your handleSubmit function
      const templateParams = {
        from_name: formData.name,      // Maps to {{from_name}}
        from_email: formData.email,    // Maps to {{from_email}}
        subject: formData.subject,      // Maps to {{subject}}
        message: formData.message,      // Maps to {{message}}
        to_email: 'amalthomasktyr@gmail.com'
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams, // Pass the mapped object here
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

    if (result.status === 200) {
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  } catch (error) {
    toast.error("Failed to send message. Please try again.");
    console.error("EmailJS Error:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="max-w-5xl">
      <PageHeader 
        title="Get in Touch" 
        description="Have a project in mind or want to discuss a job opportunity?"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="prose prose-invert">
             <p className="text-xl text-muted-foreground">
              I'm currently available for freelance work and full-time positions. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-4">
            <a 
              href={`mailto:${profile?.email}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all group"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email Me</div>
                <div className="font-bold text-lg">{profile?.email}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="p-3 rounded-full bg-secondary text-foreground">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Call Me</div>
                <div className="font-bold text-lg">{profile?.phone}</div>
              </div>
            </div>

             <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="p-3 rounded-full bg-secondary text-foreground">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-bold text-lg">{profile?.location}</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href={profile?.linkedin || "#"} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 py-3 rounded-xl bg-[#0077b5] text-white font-bold text-center hover:bg-[#0077b5]/90 transition-colors flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a 
              href={profile?.github || "#"} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 py-3 rounded-xl bg-[#333] text-white font-bold text-center hover:bg-[#333]/90 transition-colors flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 border-border bg-card/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 font-display">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Project Inquiry" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your project..." 
                  className="min-h-[150px]" 
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-bold h-12 hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                {isSubmitting ? "Sending..." : "Send Message"} 
                {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
