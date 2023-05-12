import { useState } from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';


function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fqh3ljq', 'template_8tgwyri', e.target, 'qVoYy-0BtnD7Swlr2')
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        setMessage('Email enviado com sucesso!');
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        setMessage('Houve um erro ao enviar o email. Tente novamente mais tarde.');
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    sendEmail(e);
  }

  // return (
  //   <Col lg={12}>
  //     <div className="newsletter-bx wow slideInUp">
  //       <Row>
  //         <Col lg={12} md={6} xl={5}>
  //           <h3>Deixe seu email <br /> e nunca perca as atualizações</h3>
  //           {status === 'sending' && <Alert>Enviando...</Alert>}
  //           {status === 'error' && <Alert variant="danger">{message}</Alert>}
  //           {status === 'success' && <Alert variant="success">{message}</Alert>}
  //         </Col>
  //         <Col md={6} xl={7}>
  //           <form onSubmit={handleSubmit}>
  //             <div className="new-email-bx">
  //               <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Endereço de Email" />
  //               <button type="submit">Enviar</button>
  //             </div>
  //           </form>
  //         </Col>
  //       </Row>
  //     </div>
  //   </Col>
  // );
}

export default Newsletter;

