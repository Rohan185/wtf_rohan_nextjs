import Hero from "@/components/Hero";
import Tracks from "@/components/Tracks";
import Prizes from "@/components/Prizes";
import Rules from "@/components/Rules";
import RegistrationCommunity from "@/components/RegistrationCommunity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans">
      <Hero />

      {/* Negative margin to reduce space between Hero and Tracks */}
      <div className="-mt-20">
        <Tracks />
      </div>
      
      {/* Reduced spacing between Tracks and Prizes */}
      <div className="py-8"></div>

      <Prizes />

      <Rules />

      <RegistrationCommunity />

      <Footer />
    </div>
  );
}
