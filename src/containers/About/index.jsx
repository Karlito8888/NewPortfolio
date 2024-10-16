const About = () => {
  return (
    <>
      <section className="a_propos-container" id="a-propos">
        <h2 className="about-title">À propos de moi</h2>
        <div className="content">
          <div className="description">
            <p>
              Je suis passionné de Développement Web, toujours curieux
              d&apos;explorer de nouvelles technologies et d&apos;améliorer mes
              compétences.
              <br />
              <br />
              Mon cœur balance entre le Front-End et le Back-End, ce qui me
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
          <div className="picture">
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet="
                    ./profile-pic-s.webp 200w, 
                    ./profile-pic-m.webp 300w, 
                    ./profile-pic-l.webp 394w"
                />
                <source
                  type="image/png"
                  srcSet="
                    ./profile-pic-s.png 200w, 
                    ./profile-pic-m.png 300w, 
                    ./profile-pic-l.png 394w"
                />
                <img
                  src="./profile-pic-l.png"
                  alt="Photo de Charles BOURGAULT"
                />
              </picture>
              <figcaption>
                <h2>Charles BOURGAULT</h2>
                <h3>Développeur Web</h3>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;