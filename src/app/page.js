import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import MainLayout from "@/components/MainLayout";


export default async function Home() {

  return (
    <>
      <AnnouncementBar />
      <Header />
      <Navbar />
      <HeroSection />

      <MainLayout />

      <Footer />
      

    </>
  );
}
