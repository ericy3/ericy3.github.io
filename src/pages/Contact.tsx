import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const service_id: string = process.env.REACT_APP_SERVICE_ID ?? '';
const template_id: string = process.env.REACT_APP_TEMPLATE_ID ?? '';

const Header = () => {
    return (
        <div className="mb-4">
            Let's get in touch!
        </div>
    )
}


const Contact = () => {
    const form = useRef(null);



    const sendEmail = (e: any) => {
        e.preventDefault();
        const currentForm: any = form.current !== null ? form.current : null;
        console.log(template_id)
        emailjs.sendForm(service_id, template_id, currentForm, '9iAJQoxbd1Ku9l7OY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <div className="bg-rose-100 p-12 font-bold text-4xl">
            <Header />
            <div>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 items-center"> 
                    <div className='md:flex md:flex-row'>
                        <input className='p-2' type="text" placeholder="Name" name="user_name" required/>
                        <input className='p-2' type="email" placeholder="Email" name="user_email" required/>
                    </div>
                    <input className='p-2' type="subject" placeholder="Subject" name="subject" required/>
                    <textarea name="message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;