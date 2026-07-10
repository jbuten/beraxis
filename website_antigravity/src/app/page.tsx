import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Trust from "@/components/Trust";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Header />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Section with interactive network graph */}
        <Hero />

        {/* Product Showcases (NexCoopCore, VeriDoc360, URUPOS) */}
        <Products />

        {/* 10 core B2B services */}
        <Services />

        {/* Operational Methodology timeline */}
        <Methodology />

        {/* Trust indicators & live system logger mockup */}
        <Trust />

        {/* About BERAXIS & corporate values */}
        <About />

        {/* CTA & strategic contact form */}
        <CTA />
      </main>

      {/* System Footer */}
      <Footer />
    </>
  );
}
