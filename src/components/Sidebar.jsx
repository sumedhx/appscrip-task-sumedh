"use client";

import { useState } from "react";

const filters = [
  { title: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
  { title: "OCCASION", options: ["Casual", "Formal"] },
  { title: "WORK", options: ["Office", "Outdoor"] },
  { title: "FABRIC", options: ["Cotton", "Silk", "Wool"] },
];

export default function Sidebar({ selectedFilters, setSelectedFilters }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const toggleFilter = (option) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
  };

  return (
        <aside className="sidebar">
          {filters.map((filter, index) => {
            const selectedInSection = filter.options.filter((option) =>
              selectedFilters.includes(option),
            );

            return (
              <div key={index} className="filterSection">
                <div
                  className="filterHeader"
                  onClick={() => toggleSection(index)}
                >
                  <span className="filterTitle">{filter.title}</span>
                  <span className="chevron">
                    {openSection === index ? "˄" : "˅"}
                  </span>
                </div>

                {/* Show All OR Selected */}
                {selectedInSection.length === 0 ? (
                  <p className="filterAll">All</p>
                ) : (
                  <p className="filterSelected">
                    {selectedInSection.join(", ")}
                  </p>
                )}

                <div
                  className={`filterOptions ${
                    openSection === index ? "open" : ""
                  }`}
                >
                  {filter.options.map((option, i) => (
                    <label key={i} className="customCheckbox">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(option)}
                        onChange={() => toggleFilter(option)}
                      />
                      <span className="checkmark"></span>
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Clear All Button */}
          {selectedFilters.length > 0 && (
            <button className="clearFiltersBtn" onClick={clearAllFilters}>
              Clear All
            </button>
          )}
        </aside>
  );
}
