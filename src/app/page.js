import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import MainLayout from "@/components/MainLayout";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API failed:", res.status);
      return [];
    }

    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      console.error("Not JSON response");
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
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
