import servicesImage from "/office.jpg";
import expertiseImage from "/consultations.jpg";

const serviceSections = [
  {
    title: "Areas of Expertise",
    image: servicesImage,
    rows: [
      {
        name: "I am a member of the National Association of Social Workers and have clinical expertise in helping individuals who experience anxiety, depression, and trauma/PTSD.",
      },
      {
        name: "I also treat individuals experiencing ADHD, behavioral issues, bipolar disorder, domestic violence, grief and loss, parenting, and sexual abuse.",
      },
      {
        name: "My preferred treatment approaches include: Cognitive Behavioral Therapy (CBT), Trauma-Focused Cognitive Behavioral Therapy (TF-CBT), Eye Movement Desensitization and Reprocessing (EMDR), emotional and mindfulness-based approaches, motivational interviewing, brief solution-focused therapy, and crisis intervention.",
      },
      {
        name: "I enjoy working with children, adolescents, adults, and families. I prefer working with clients age six and older.",
      },
    ],
  },
  {
    title: "Consultations",
    image: expertiseImage,
    rows: [
      { name: "Initial Assessment", price: "$170" },
      { name: "Ongoing Sessions", price: "$150" },
      {
        name: "Most insurance plans are accepted. Please contact your insurance provider for details regarding provider in network, coverage, and possible copay.",
      },
    ],
  },
];

function Services() {
  return (
    <section className="services-page" aria-label="Services">
      <div className="services-cards">
        {serviceSections.map((section) => (
          <article key={section.title} className="service-card">
            <img
              src={section.image}
              alt=""
              className="service-card__media"
              aria-hidden="true"
            />
            <div className="service-card__overlay" aria-hidden="true" />

            <div className="service-card__content">
              <h2 className="service-card__title">{section.title}</h2>

              <dl className="service-card__list">
                {section.rows.map((row) => (
                  <div
                    key={row.name}
                    className={`service-card__row ${row.price ? "" : "service-card__row--single"}`}
                  >
                    <dt>{row.name}</dt>
                    {row.price ? <dd>{row.price}</dd> : null}
                  </div>
                ))}
              </dl>

              {section.note ? (
                <p className="service-card__note">{section.note}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
