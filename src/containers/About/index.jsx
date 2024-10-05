const About = () => {
  return (
    <>
      <section className="a_propos-container" id="a-propos">
        <div className="content">
          {/* <div className="name">
            <h2>Charles BOURGAULT</h2>
            <h3>Développeur Web</h3>
          </div> */}
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
              peut transformer nos projets.
              <br />
              Analyser et manipuler des données me fascine, et j&apos;aime
              trouver des solutions innovantes pour les intégrer dans mes
              créations.
            </p>
          </div>
          {/* <a
            href="./CV_Charles_BOURGAULT.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mon CV <FontAwesomeIcon icon={faDownload} />
          </a> */}
        </div>
        <div className="picture">
          <figure>
            <img src="./profile-pic.png" alt="Photo de Charles BOURGAULT" />
            <figcaption>
              <h2>Charles BOURGAULT</h2>
              <h3>Développeur Web</h3>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

export default About;
