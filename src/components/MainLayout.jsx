"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";
import ProductControls from "./ProductControls";

export default function MainLayout() {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const [sortOption, setSortOption] = useState("recommended");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [displayProducts, setDisplayProducts] = useState(products);

  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setDisplayProducts(data);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    }

    fetchProducts();
  }, []);

  
  useEffect(() => {
    let filtered = [...products];

    // 🔹 Filter Logic
    if (selectedFilters.length > 0) {
      filtered = filtered.filter((product) =>
        selectedFilters.some((filter) =>
          product.category.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }

    // 🔹 Sorting Logic
    switch (sortOption) {
      case "priceLow":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "priceHigh":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;

      default:
        break;
    }

    setDisplayProducts(filtered);
  }, [selectedFilters, sortOption, products]);

  return (
    <>
      <ProductControls
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      <main className="container">
        <div className={`layout ${!showFilter ? "fullWidth" : ""}`}>
          {showFilter && (
            <Sidebar
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          )}
          <ProductGrid products={displayProducts} />
        </div>
      </main>
      
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
