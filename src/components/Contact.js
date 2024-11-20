import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Modal, Button } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  const [isData, setIsData] = useState("");
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowFailureModal, setIsShowFailureModal] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setIsData(e.target.value);
    // console.log(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // setIsData(e.target.value);
    console.log(isData);

    emailjs
      .sendForm(
        "service_cjztn83",
        "template_ch550li",
        form.current,
        "nsA4HN3p4iZBhMPmL"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setIsShowSuccessModal(true);
        },
        (error) => {
          // console.log(error.text);
          setIsShowFailureModal(true);
        }
      );
  };

  console.log("useRef", form);

  return (
    <main>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Feel free to get in touch with me.</p>
          </div>

          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>
                   No.110,Kempegowda Circle,Andrahalli Main Road,Peenya 2nd
                    Stage,Bengaluru-560091
                  </p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>mailtosunilraj23@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91-8904349137</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.9262362980543!2d77.49662488189259!3d13.009549631929694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d04edd9fb93%3A0x670839c3a940a12f!2sChethan%20Circle!5e0!3m2!1sen!2sin!4v1704891200386!5m2!1sen!2sin"
                  width="400"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                ref={form}
                onSubmit={sendEmail}
                onChange={handleChange}
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="user_name">Your Name</label>
                    <input
                      type="text"
                      name="user_name"
                      className="form-control"
                      id="user_name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="user_email">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="user_email"
                      id="user_email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="user_subject">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="user_subject"
                    id="user_subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* {isShowSuccessModal ? (
          <Modal
            // {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button>Close</Button>
            </Modal.Footer>
          </Modal>
        ) : null}
        {isShowFailureModal ? (
          <Modal
            // {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button>Close</Button>
            </Modal.Footer>
          </Modal>
        ) : null} */}
      </section>
    </main>
  );
};

export default Contact;
