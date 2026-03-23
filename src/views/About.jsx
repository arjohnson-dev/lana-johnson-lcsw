function Home() {
  return (
    <section className="home-cards" aria-label="Site sections">
      <div className="about-intro">
        <img
          src="/lana.jpg"
          alt="Lana Johnson"
          className="about-intro__image"
        />
        <div className="about-intro__content">
          <p>
            I am a Licensed Clinical Social Worker (LCSW) with over 25 years of
            professional experience in the mental health field. I earned my
            Bachelor's degree in Social Work from Western Michigan University
            and my Master's degree in Social Work from Andrews University.
          </p>
          <p>
            After completing my graduate studies, my experiences have included:
            Foster Care Specialist with the Department of Human Services,
            Director of several youth programs with Family Services Bureau,
            Director of Elkhart County Women's Shelter, and a psychotherapist at
            Oaklawn Psychiatric Center. Since 2016, I've been in private
            practice.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
