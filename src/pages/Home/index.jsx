import Header from "../../containers/Header";
import About from "../../containers/About";
import Projects from "../../containers/Projects";
import Parcours from "../../containers/Parcours";

const Home = () => {
  return (
    <>
      <Header />
      <main>
      <About />
      <Projects />
      <Parcours />
      </main>
    </>
  );
};

export default Home;
