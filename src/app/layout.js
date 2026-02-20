import "./globals.css";

export const metadata = {
  title: "Discover Our Products | Appscrip",
  description:
    "Explore a wide range of premium products including clothing, electronics, and accessories. Filter and sort seamlessly.",
  keywords: [
    "ecommerce",
    "product listing",
    "fashion",
    "electronics",
    "appscrip task",
  ],
  openGraph: {
    title: "Discover Our Products",
    description:
      "Explore a wide range of premium products with filtering and sorting options.",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <div className="pageWrapper">
          {children}
         </div>
      </body>
    </html>
  );
}
