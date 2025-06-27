import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const socialButtons = [
    {
      url: "https://wa.me/201112644702",
      icon: faWhatsapp,
    },
    {
      url: "https://github.com/Gerges-GN/",
      icon: faGithub,
    },
    {
      url: "https://www.linkedin.com/in/gerges-naguib-319987218/",
      icon: faLinkedin,
    },
  ];

  return (
    <section id="contact">
      <div className="">
        <div className="max-w-[450px] md:max-w-full mx-auto flex flex-col-reverse md:flex-row gap-10 md:gap">
          <div className="flex-1/2 md:pr-10">
            {/* Form */}
            <form
              action="https://formsubmit.co/gerges7001@gmail.com"
              method="POST"
              className="max-w-[450px] mx-auto"
            >
              <Input
                type="text"
                name="userName"
                placeholder="Your Name"
                required
              />
              <Input
                type="email"
                name="userName"
                placeholder="Email"
                required
              />
              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.com/thanks"
              />

              <textarea
                name="message"
                id="message"
                placeholder="Type your message here"
                rows="5"
                className="rounded outline-2 px-5 py-3 mb-5 w-full focus:shadow-md/25 hover:bg-(--zinc-100) transition-all peer invalid:outline-(--error)"
              ></textarea>

              {/* Buttons */}

              <div className="flex flex-wrap gap-3 w-full">
                <Button className="grow">
                  <button className="mx-auto" type="submit">
                    Get in touch
                  </button>
                </Button>

                {socialButtons.map(({ url, icon }, index) => (
                  <Button key={index} secondary url={url}>
                    <FontAwesomeIcon icon={icon} className="text-xl" />
                  </Button>
                ))}
              </div>
            </form>
          </div>

          {/* Right Text */}

          <div className="flex-1/2 m-a">
            <h1 className="text-3xl leading-10 md:text-4xl font-bold md:leading-14 mb-3">
              Let's talk!
            </h1>
            <p className="text-(--neutral) mb-6 leading-6">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
            <span className="flex items-center gap-2 md:gap-3 leading-6 md:leading-8 text-md  md:text-lg text-(--neutral)">
              <FontAwesomeIcon icon={faEnvelope} />
              <h4>gerges7001@gmail.com</h4>
            </span>
            <span className="flex items-center gap-2 md:gap-3 leading-6 md:leading-8 text-md  md:text-lg text-(--neutral)">
              <FontAwesomeIcon icon={faPhone} />
              <h4>+20 111 264 4702</h4>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
