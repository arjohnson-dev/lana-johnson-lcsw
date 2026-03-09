import { Link } from "react-router-dom";
import servicesImage from "/services.jpg";
const contactImage = "/building.jpg";

const routeCards = [
  {
    title: "Services",
    to: "/services",
    media: servicesImage,
    labelClass: "home-card__label--feature",
  },
  {
    title: "CONTACT",
    to: "/contact",
    media: contactImage,
    labelClass: "home-card__label--feature",
  },
];

function Home() {
  return (
    <section className="home-cards" aria-label="Site sections">
      <div className="about-intro">
        <img
          src="/lana-headshot.jpg"
          alt="Lana Johnson"
          className="about-intro__image"
        />
        <div className="about-intro__content">
          <p>
            I am a Licensed Clinical Social Worker (LCSW) with over 20 years of
            professional experience in the mental health field. I earned my
            Bachelor's degree in Social Work from Western Michigan University
            and my Master's degree in Social Work from Andrews University.
          </p>
          <p>
            After completing my graduate studies, I was employed by the
            Department of Human Services. I later served as the Director of
            Youth Programs at Family Services and as the Director of the Elkhart
            County Women's Shelter. For the past ten years, I have worked at
            Oaklawn Psychiatric Center.
          </p>
        </div>
      </div>

      {routeCards.map((card) => (
        <Link key={card.to} to={card.to} className="home-card home-card--route">
          <img
            src={card.media}
            alt={`${card.title} preview`}
            className="home-card__media"
          />
          <span
            className={`home-card__label ${card.labelClass ? card.labelClass : ""}`}
          >
            {card.title}
          </span>
        </Link>
      ))}
    </section>
  );
}

export default Home;
