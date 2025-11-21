import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Residential from "./pages/Residential";
import Grassroots from "./pages/Grassroots";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Program from "./pages/Program";
import ContactForm from "./components/ContactForm";
import FloatingBall from "./components/FloatingBall";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="hidden lg:block">
        <FloatingBall />
      </div>
      <header className="fixed top-0 left-0 w-full z-50">
        <Header />
      </header>

      <main className="flex-grow pt-20">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/grassroots" element={<Grassroots />} />
          <Route path="/program" element={<Program />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactform" element={<ContactForm />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
