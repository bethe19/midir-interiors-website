import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">
            Oops! Page not found
          </p>
          <p className="mb-8 text-muted-foreground">
            The page you requested could not be found.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

