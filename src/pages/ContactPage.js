
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import useImagePreloader from "../hooks/useImagePreloader";
import ImagePreloader from "../components/ImagePreloader";

const ContactPage = () => {
  const form = useRef();

  // Image URLs to preload
  const imageUrls = [
    `${process.env.PUBLIC_URL}/assets/PR02_COE_PERSON1.jpg`
  ];

  // Use image preloader hook
  const { imagesLoaded, loadingProgress } = useImagePreloader(imageUrls);

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yee57nk", // Replace with your EmailJS Service ID
        "template_p3f4xri", // Replace with your EmailJS Template ID
        form.current,
        "pIXTfrmTyGQkWVEMI" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("An error occurred. Please try again later.");
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  // Show loading spinner until all images are loaded
  if (!imagesLoaded) {
    return <ImagePreloader loadingProgress={loadingProgress} />;
  }

  return (
    <div className="bg-black min-h-screen py-24 flex flex-col justify-center items-center lg:space-y-8">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16">
        {/* Image Section */}
        <img
          ref={imageRef}
          src={`${process.env.PUBLIC_URL}/assets/PR02_COE_PERSON1.jpg`}
          alt="Contact"
          className={`hidden lg:block w-3/4 lg:w-2/3 max-w-2xl transform transition-all duration-[2000ms] ease-in-out ${
            imageInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        />

        <div className="flex flex-col items-center lg:items-start">
          {/* Header Section */}
          <div
            ref={headerRef}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-copperAccent transform transition-all duration-[2000ms] ease-in-out ${
              headerInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            } mb-4 text-center lg:text-left`}
          >
            Contact
          </div>

          {/* Form Section */}
          <form
            ref={(el) => {
              form.current = el;
              formRef(el);
            }}
            onSubmit={sendEmail}
            className={`w-full max-w-2xl transform transition-all duration-[2000ms] ease-in-out ${
              formInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <div className="mb-4">
              <label className="block text-white font-bold mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-white bg-black text-white"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-white font-bold mb-2">Message</label>
              <textarea
                name="message"
                rows="10"
                className="w-full px-4 py-6 border rounded focus:outline-none focus:ring-2 focus:ring-white bg-black text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded hover:bg-burgundy hover:text-white w-full transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
