import React from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css'

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_email: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendEmail(event);
  }

  handleChange(event) {
    this.setState({
      user_name: event.target.user_name,
      user_email: event.target.user_email,
      message: event.target.user_message
    });
  }


  sendEmail(event) {
    emailjs.sendForm('service_lfhq5ei', 'template_93h7hud', event.target, 'user_sh7Azkp41AdxWpDOMYHGs')
      .then((result) => {
        console.log(result);
        window.alert('Tu mensaje fue enviado con éxito!');
        document.getElementById("contact-form").reset();
      })
      .catch(error => {
        console.log(error);
        alert('ERROR: Tu mensaje no pudo ser enviado!\nIntentalo más tarde.');
      });
  };

  render() {
    return (
      <div>
        <section class="contact" id="contact">
          <div class="max-width">
            <h2 class="title">Contáctame</h2>
            <div class="contact-content">
              <div class="column left">
                <div class="text">Contáctame</div>
                <p>Puedes enviarme un email a la direccion que indica debajo, o simplemente completar el formulario de la derecha.</p>
                <div class="icons">
                  <div class="row">
                    <i class="fas fa-user"></i>
                    <div class="info">
                      <div class="head">Nombre</div>
                      <div class="sub-title">Leandro Antúnez</div>
                    </div>
                  </div>
                  <div class="row">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="info">
                      <div class="head">Ubicación</div>
                      <div class="sub-title">Buenos Aires, Argentina</div>
                    </div>
                  </div>
                  <div class="row">
                    <i class="fas fa-envelope"></i>
                    <div class="info">
                      <div class="head">Email</div>
                      <div class="sub-title">leandro_antunez@outlook.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column right">
                <div class="text">Escribeme</div>
                <form onSubmit={this.handleSubmit} id="contact-form">
                  <div className='fields'>
                    <div className='field name'>
                      <input placeholder="Tu nombre" type="text" name="user_name" onChange={this.handleChange} value={this.state.user_name} required />
                    </div>
                    <div className='field email'>
                      <input placeholder="ejemplo.correo@email.com" type="email" name="user_email" onChange={this.handleChange} value={this.state.user_email} required />
                    </div>
                  </div>
                    <div className='field subject'>
                      <input type="text" placeholder='Asunto' />
                    </div>
                    <div className='field textarea'>
                      <textarea placeholder="Un mensaje" name="message" onChange={this.handleChange} value={this.state.message} required />
                    </div>
                    <div className='button'>
                      <button type="submit" value="Submit">Enviar mensaje</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </section >
      </div >
    );
  }

};
export default ContactMe;