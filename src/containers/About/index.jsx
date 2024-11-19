import { memo } from 'react';

const About = () => {
  return (
    <section 
      className="a_propos-container" 
      id="a-propos"
      aria-labelledby="title-about"
    >
      <h2 id="title-about" className="about-title">À propos de moi</h2>
      <div className="content">
        <div 
          className="description"
          role="region"
          aria-label="Présentation personnelle"
        >
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
        <div 
          className="picture"
          role="region"
          aria-label="Photo et identité"
        >
          <figure>
            <picture>
              <source
                type="image/webp"
                srcSet="
                  ./profile-pic-s.webp 200w, 
                  ./profile-pic-m.webp 300w, 
                  ./profile-pic-l.webp 394w"
                sizes="(max-width: 600px) 200px,
                       (max-width: 900px) 300px,
                       394px"
              />
              <source
                type="image/png"
                srcSet="
                  ./profile-pic-s.png 200w, 
                  ./profile-pic-m.png 300w, 
                  ./profile-pic-l.png 394w"
                sizes="(max-width: 600px) 200px,
                       (max-width: 900px) 300px,
                       394px"
              />
              <img
                src="./profile-pic-m.webp"
                alt="Photo de Charles BOURGAULT, Développeur Web"
                width="300"
                height="300"
                loading="eager"
                fetchpriority="high"
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
  );
};

export default memo(About);