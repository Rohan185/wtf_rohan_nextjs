import Hero from "@/components/Hero";
import Tracks from "@/components/Tracks";
import Prizes from "@/components/Prizes";
import Rules from "@/components/Rules";
import Judging from "@/components/Judging";
import Registration from "@/components/Registration";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans">
      <Hero />

      <Tracks />

      <Prizes />

      <Rules />

      <Judging />

      <Registration />

      <Community />

      <Contact />

      <Footer />
    </div>
  );
}
