"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";
import ProductControls from "./ProductControls";

export default function MainLayout({ products }) {
  const [showFilter, setShowFilter] = useState(true);
  const [sortOption, setSortOption] = useState("recommended");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [displayProducts, setDisplayProducts] = useState(products);

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
    </>
  );
}
