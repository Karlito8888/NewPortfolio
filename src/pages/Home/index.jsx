import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skills from "../../containers/Skills";

const Home = () => {
  return (
    <>
      <section className="accueil-container" id="accueil">
        <div className="content">
          <div className="name">
            <h2>
              Salut,
              <br />
              moi c&apos;est <span>Charles...</span>
            </h2>
          </div>
          <div className="description">
            <p>
              Je suis passionné de Développement Web, toujours curieux
              d&apos;explorer de nouvelles technologies et d&apos;améliorer mes
              compétences.
              <br />
              <br />
              Mon cœur balance entre le front-end et le back-end, ce qui me
              permet de créer des applications complètes et fonctionnelles.
              <br />
              <br />
              J&apos;aime concevoir des interfaces attrayantes tout en ayant une
              bonne compréhension de ce qui se passe derrière le rideau.
              <br />
              <br />
              Je m&apos;intéresse également à la Data et à la manière dont elle
              peut transformer nos projets. Analyser et manipuler des données me
              fascine, et j&apos;aime trouver des solutions innovantes pour les
              intégrer dans mes créations.
            </p>
          </div>
          <a
            href="./CV_Charles_BOURGAULT.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mon CV <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
        <div className="picture">
          <img src="./profile-pic.png" alt="Photo de Charles BOURGAULT" />
        </div>
      </section>
      <Skills />
    </>
  );
};

export default Home;