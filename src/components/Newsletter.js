import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iletpzl', 'template_4rg6tpr', e.target, '7NcepCIFvyacScwRD')
      .then((result) => {
        console.log(result.text);
        onValidated({
          EMAIL: email
        });
        clearFields(); // Clear the email input after successful submission
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col xs={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>
            {status === 'sending' && <Alert variant="success">Success...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col xs={12} md={6} xl={7}>
            <form onSubmit={sendEmail}>
              <div className="new-email-bx">
                <div className="input-group">
                  <input
                    value={email}
                    type="email"
                    name="user_email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-custom-small">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};