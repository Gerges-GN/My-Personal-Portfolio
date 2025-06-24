import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../components/ui/Button";

function Hero() {
  return (
    <section className="min-h-[calc (100vh-64px)]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 py-5 md:py-14 flex flex-col-reverse md:flex-row gap-5 justify-between items-center">
        {/* left side */}
        <div className="max-w-lg h-[450px] lg:h-[550px] flex-1/2 flex flex-col justify-center">
          <div className="my-auto">
            <div className="text-2xl md:text-3xl md:leading-9 lg:text-4xl mb-5 lg:leading-12 font-light">
              <h1>
                Hello I am <span className="font-bold"> Gegres Naguib. </span>
              </h1>
              <h2 className="font-normal mt-2">Frontend Developer</h2>
            </div>
            <div>
              <p className="font-light text-neutral-700">
                I'm Gerges Naguib, a frontend developer who builds fast and
                modern websites using React JS. I care about clean design,
                smooth interactions, maintainable code. I'm always learning and
                improving to create better user experiences.
              </p>
            </div>
          </div>
          <div className="text-xl mt-10  md:mb-2">
            <Button secondary url="https://github.com/Gerges-GN/">
              <FontAwesomeIcon icon={faGithub} />
            </Button>
            <Button
              secondary
              url="https://www.linkedin.com/in/gerges-naguib-319987218/"
              className="ml-3"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Button>
          </div>
        </div>
        {/* Right side */}
        <div className="flex-1/2 md:max-h-[550px] max-h-72 w-full overflow-hidden flex justify-center md:justify-end flex-wrap">
          <img
            src="./Personal-pic-web.png"
            alt="Gerges Naguib"
            className="max-w-[420px] max-h-[400px] lg:max-h-full "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
