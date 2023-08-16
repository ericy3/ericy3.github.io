import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const service_id: string = process.env.REACT_APP_SERVICE_ID ?? '';
const template_id: string = process.env.REACT_APP_TEMPLATE_ID ?? '';

const Header = () => {
    return (
        //underline decoration-gray-600 decoration-4 decoration-solid underline-offset-8
        <div className="mb-10 w-96 p-2 font-quicksand text-4xl font-bold border-double border-8 border-gray-600">
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
        <div id="contact" className="flex flex-col items-center bg-rose-100 p-12 font-bold">
            <Header />
            <div>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 items-center"> 
                    <div className='md:flex md:flex-row'>
                        <input className='p-2 w-44 mr-8 border-2 p-2 border-gray-500 border-solid rounded-lg' type="text" placeholder="Name" name="user_name" required/>
                        <input className='p-2 w-44 border-2 p-2 border-gray-500 border-solid rounded-lg' type="email" placeholder="Email" name="user_email" required/>
                    </div>
                    <input className='p-2 w-96 border-2 p-2 border-gray-500 border-solid rounded-lg' type="subject" placeholder="Subject" name="subject" required/>
                    <textarea className='w-96 h-40 border-2 p-2 border-gray-500 border-solid rounded-lg' 
                        placeholder="Talk to me about anything!" name="message">
                    </textarea>
                    <button className='p-4 border-2 p-2 border-gray-500 border-solid rounded-lg' type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;