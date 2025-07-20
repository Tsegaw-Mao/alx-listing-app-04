import Header from "./Header";
import Footer from "./Footer";
import React, { ReactNode } from "react";
import FilterSection from "./FilterSection"; // adjust path as needed


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children } : LayoutProps) => {
  return (
    <>
      <Header />
      <FilterSection />
      <main className="min-h-screen w-[calc(100%-7rem)] mx-14">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

