import React from "react";

const caseStudies = [
  {
    id: 1,
    subtitle: "engineering",
    title: "Will Javascript Take Over the World? | Brian Kernighan and Lex Fridman",
    img: "Brian",
    link: "https://www.youtube.com/watch?v=AB60_uUetJs",
  },
  {
    id: 2,
    subtitle: "engineering",
    title: "Jack Dorsey: Square, Cryptocurrency, and Artificial Intelligence | AI Podcast",
    img: "jack",
    link: "https://www.youtube.com/watch?v=60KJz1BVTyU",
  },
  {
    id: 3,
    subtitle: "engineering",
    title: "Jim Keller: Moore's Law, Microprocessors, Abstractions, and First Principles | AI Podcast",
    img: "jim",
    link: "https://www.youtube.com/watch?v=Nb2tebYAaOA",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              
              <a href={caseItem.link} target="_blank">
                <div className="case-details">
                  <span>{caseItem.subtitle}</span>
                  <h2>{caseItem.title}</h2>
                </div>
                <div className="case-image">
                  <img
                    src={require(`../assets/${caseItem.img}.png`)}
                    alt={caseItem.title}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
