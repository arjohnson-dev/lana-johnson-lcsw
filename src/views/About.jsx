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
            After completing my graduate studies, I was employed by the
            Department of Human Services. I later served as the Director of
            Youth Programs at Family Services and as the Director of the Elkhart
            County Women's Shelter. For the past ten years, I have worked at
            Oaklawn Psychiatric Center.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
