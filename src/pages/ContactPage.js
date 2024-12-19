import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
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

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-gray-100 p-8 rounded shadow-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Your Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Your Message</label>
          <textarea
            name="message"
            rows="5"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accent"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
