import AboutSection from "@/components/About";
import AchievementsSection from "@/components/AchievementsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsMain";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="flex min-h-screen pt-20 flex-col bg-[#121212]">
      <NavBar />
      <div className="container mx-auto px-12 py-4">

        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />

      </div>
      <Footer />
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </main>
  );
}
