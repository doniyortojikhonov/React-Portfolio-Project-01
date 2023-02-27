import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>tojikhonov.doniyor@gmail.com</h5>
                        <a
                            target="_blank"
                            href="mailto:tojikhonov.doniyor@gmail.com"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>doniyor.tadjikhanov</h5>
                        <a
                            target="_blank"
                            href="https://m.me/doniyor.tadjikhanov"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>+123456789</h5>
                        <a
                            target="_blank"
                            href="https://api.whatsapp.com/send?phone=123456789"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                {/* End of Contact Option */}
                <form action="">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
