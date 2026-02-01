import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-border bg-card shadow-2xl">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h1 className="text-2xl font-bold font-display text-foreground">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-muted-foreground text-sm">
            The page you are looking for does not exist. It might have been moved or deleted.
          </p>

          <div className="mt-6 flex justify-end">
             <Link href="/" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Return Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
