import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <main className="*:*:max-w-screen-xl *:*:mx-auto *:*:px-4 *:*:md:px-10 *:*:lg:px-20 *:*:py-5 *:*:md:py-14">
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
