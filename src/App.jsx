import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen *:*:max-w-screen-xl *:*:mx-auto *:*:px-4 *:*:md:px-10 *:*:lg:px-20 *:*:py-10 *:*:md:pt-14">
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

export default App;
