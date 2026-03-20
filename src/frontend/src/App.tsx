import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import { useActor } from "./hooks/useActor";

const queryClient = new QueryClient();

function AppContent() {
  const { actor, isFetching } = useActor();

  useEffect(() => {
    if (actor && !isFetching) {
      actor.initializeData().catch(() => {
        // ignore — data may already be initialized
      });
    }
  }, [actor, isFetching]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
