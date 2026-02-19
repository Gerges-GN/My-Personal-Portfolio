function About() {
  return (
    <section id="about">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl py-5 mb-5 font-semibold text-center">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row md:gap-10 md:max-h-[540px]">
          <div className="flex-1/2 *:max-h-full ">
            <img src="/about-me.webp" loading="lazy" alt="Gerges Naguib" />
          </div>
          <div className="md:flex-3/3 lg:flex-1/2 py-5 pt-10 xl:mt-16">
            <div className="mb-5">
              <h3 className="text-2xl font-semibold mb-3">Who Am I</h3>
              <p className="mb-4 text-justify text-(--neutral)">
                Passionate Front-End Developer with hands-on experience building
                responsive and accessible web applications using React.js,
                JavaScript (ES6+), HTML5, CSS3/SASS, and modern UI libraries
                such as Tailwind CSS and Bootstrap. Has developed multiple
                real-world projects, including personal portfolios and
                API-integrated applications, with a strong focus on performance,
                usability, and clean UI/UX. He enjoys working in Agile
                environments and contributing to Git-based workflows, pair
                programming, and code reviews.
              </p>
              <p className="text-justify text-(--neutral)">
                I focus on writing clean code, building pixel-perfect layouts,
                and creating user-friendly experiences. Whether I'm building a
                portfolio project or experimenting with new tools, I treat every
                project as a chance to grow and push my skills further.
              </p>
            </div>
            <div>
              <h5 className="text-2xl font-semibold mb-3">Education</h5>
              <div className="flex flex-wrap justify-between text-(--neutral)">
                <p>B.Sc. in Computer Science - Thebes Academy</p>
                <p>2023 - 2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
