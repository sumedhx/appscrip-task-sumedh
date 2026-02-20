import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import MainLayout from "@/components/MainLayout";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <AnnouncementBar />
      <Header />
      <Navbar />
      <HeroSection />

      <MainLayout products={products} />

      <Footer />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: product.image,
              name: product.title,
            })),
          }),
        }}
      />

    </>
  );
}
