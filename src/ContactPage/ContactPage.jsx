import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from './ContactForm/ContactForm'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <Container
      className="p-5 mt-4 mb-4 w-75"
      id="contact"
      style={{ borderRadius: '25px' }}
    >
      <Row style={{ alignItems: 'center' }}>
        <Col className="p-5 col-5 contact-info">
          <div className="mb-5">
            <h1
              style={{ fontSize: '3rem' }}
              className="text-capitalize contact-header mb-4"
            >
              for more details contact us
            </h1>
            <div
              style={{
                backgroundColor: '#0d6efd',
                height: '10px',
                width: '40%',
                borderRadius: '25px',
              }}
            ></div>
          </div>
          <p className="mb-5">
            Send us a message with your questions, and we will get back to you
            as soon as possible. We are pretty responsive and will try to
            respond in a few hours!
          </p>
          <address className="text-muted contact-address">
            Jazeera Properties Ltd. <br />
            Dubai Marina, Dubai, UAE <br />
            Line <br />
            Email <br />
            Phone number <br />
          </address>
        </Col>
        <Col className="p-4">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  )
}

export default ContactPage
