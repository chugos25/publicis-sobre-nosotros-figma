import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import PhilosophySection from "@/components/PhilosophySection";
import CommitmentSection from "@/components/CommitmentSection";
import InternationalPresenceSection from "@/components/InternationalPresenceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AboutSection />
        <PhilosophySection />
        <CommitmentSection />
        <InternationalPresenceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;