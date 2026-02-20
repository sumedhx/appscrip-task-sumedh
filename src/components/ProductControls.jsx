"use client";

import { useState, useRef, useEffect } from "react";

export default function ProductControls({
  showFilter,
  setShowFilter,
  sortOption,
  setSortOption,
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { label: "RECOMMENDED", value: "recommended" },
    { label: "NEWEST FIRST", value: "newest" },
    { label: "PRICE: LOW TO HIGH", value: "priceLow" },
    { label: "PRICE: HIGH TO LOW", value: "priceHigh" },
  ];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="container controls">
      <div className="left">
        <span>3425 ITEMS</span>

        <button
          className="filterToggle"
          onClick={() => setShowFilter(!showFilter)}
        >
          {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      <div className="right" ref={dropdownRef}>
        <div
          className="sortTrigger"
          onClick={() => setOpen(!open)}
        >
          {options.find((o) => o.value === sortOption)?.label}
          <span className={`arrow ${open ? "rotate" : ""}`}>▾</span>
        </div>

        {open && (
          <div className="sortDropdownMenu">
            {options.map((option) => (
              <div
                key={option.value}
                className={`dropdownItem ${
                  sortOption === option.value ? "active" : ""
                }`}
                onClick={() => {
                  setSortOption(option.value);
                  setOpen(false);
                }}
              >
                {sortOption === option.value && (
                  <span className="check">✓</span>
                )}
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
