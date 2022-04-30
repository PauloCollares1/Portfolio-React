import React from 'react';
import './Formulario.css';
//-------------------------------------//
import emailjs from '@emailjs/browser';

export const formulario = () => {

  const templateParams = {
      name: 'James',
      notes: 'Check this out!'
  };

  const sendEmail = (e) => {

    e.preventDefault();
      // Função para enviar email, via emailjs. Não vou utilizar pois não faz sentido mandar email por dentro
      emailjs.send('service_p5bvnim','template_lbob8mu', templateParams, 'Pda6LMDmFpGLFw1fV')
        .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
        });
  };

  return (
    <section className='section3'> 
        <h1>Me manda um E-mail</h1>
        <form className='Formulario' onSubmit={sendEmail}>
            <input type="text" placeholder='Seu e-mail para que eu consiga responder' name="from_name"/>
            <textarea className='textarea' name="message"/>
            <button onClick={sendEmail}>Enviar E-mail</button>
        </form>
    </section>
  )
}
