import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h3>Contact Us</h3>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
