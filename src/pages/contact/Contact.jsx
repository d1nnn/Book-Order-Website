import React from "react";
import ContactForm from "../../components/Contact/ContactForm";
import Information from "../../components/Contact/Information";


const Contact = () => {
  function submit(e) {
    e.preventDefault()
    alert("Gửi thành công")
}

  return ( <div className="contact-us">
  <div className="banner-title">
      <div className="wrapper">
          <h2>Contact Us</h2>
          <ul className="breadcrumb">
              <li className="item"><a href=" ">Home</a> <span>&nbsp;<i className="fa-solid fa-angle-right Question "></i>&nbsp;</span></li>
              <li className="item"><span>Contact </span></li>
          </ul>
      </div>
  </div>
  <div className="content py-5">
      <div className="container">
          <div className="row">
              <div className="col-12 col-md-4">
                  <div className="wrapper d-flex flex-column gap-3">
                      <Information />
                  </div>
                  <hr />
                  <div className="contact-form">
                      <h5>Contact Us</h5>

                      <ContactForm submit={submit} />
                  </div>
              </div>
              <div className="col-12 col-md-8 px-4 mt-4 mt-md-0">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15672.924961103905!2d106.8030541!3d10.8700089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1702141153978!5m2!1svi!2s" width="100%" height="500" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              
              </div>
          </div>
      </div>
  </div>
</div>
);
};

export default Contact;
