function About() {
  return (
    <section id="about">
      <div>
        <h1 className="text-3xl md:text-4xl py-5 mb-5 font-semibold text-center">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row md:gap-10 md:max-h-[540px]">
          <div className="flex-1/2 *:max-h-full ">
            <img src="/Personal-pic_rec_web.png" alt="Gerges Naguib" />
          </div>
          <div className="md:flex-3/3 lg:flex-1/2 py-5 pt-10 xl:mt-16">
            <div className="mb-5">
              <h5 className="text-2xl font-semibold mb-3">Who Am I</h5>
              <p className="mb-4 text-justify text-(--neutral)">
                I'm a frontend developer passionate about crafting clean,
                responsive, and accessible user interfaces using modern tools
                like React.js and Tailwind CSS. While I'm still studying
                Computer Science at Thebes Academy (2023-2027), I've been
                consistently building real-world projects, learning best
                practices, and staying up to date with modern development
                trends.
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
