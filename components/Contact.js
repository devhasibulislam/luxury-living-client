import SectionHeader from "./SectionHeader";
import { inner_field } from "../styles/contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSentMessage = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      emailjs
        .sendForm(
          "service_dozo57k",
          "template_cn03kep",
          event.target,
          "zVtSQ7zi_vZn2K-mv"
        )
        .then(
          (result) => {
            console.log(result.text);
            event.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className="my-12" id="contact">
      <SectionHeader
        name={"Contact"}
        title={"Let us handle your project, professionally."}
      />
      <div className="lg:w-1/2 md:w-3/4 w-full lg:px-0 md:px-0 px-4 mx-auto">
        <div className="mt-16">
          <form className="grid gap-y-4" onSubmit={handleSentMessage}>
            <div className="grid lg:grid-cols-2 lg:gap-x-4 grid-cols-1  lg:gap-y-0 gap-y-4">
              <input
                className={`${inner_field} w-full h-[60px] rounded-md px-4`}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
              />
              <input
                className={`${inner_field} w-full h-[60px] rounded-md px-4`}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name"
              />
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-x-4 grid-cols-1 lg:gap-y-0 gap-y-4">
              <input
                className={`${inner_field} w-full h-[60px] rounded-md px-4`}
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
              <input
                className={`${inner_field} w-full h-[60px] rounded-md px-4`}
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone number"
              />
            </div>
            <textarea
              className={`${inner_field} w-full h-[157px] rounded-md p-4`}
              name="message"
              id="message"
              placeholder="Write your message"
            />
            <div className="text-center mt-8">
              <button type="submit" className="btn rounded px-12 bg-[#251D58]">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
