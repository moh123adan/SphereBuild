import About from "./components/about";
import Hero from "./components/hero";
import Services from "./components/services";
import Team from "./components/team";
import Stats from "./components/stats";
import Projects from "./components/projects";
import Clients from "./components/clients";
import Contact from "./components/contact";
import Footer from "./components/footer";
// import Keyask from "./components/keyask";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Team />
      <Stats />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
      {/* <Keyask /> */}
    </main>

  );
}
