import Header from "../containers/Header";
import About from "../containers/About";
import Projects from "../containers/Projects";
import Parcours from "../containers/Parcours";
import Contact from "../containers/Contact";
import Footer from "../containers/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Parcours />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
