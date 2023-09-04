import "./App.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7mwe949', 'template_ceny7ia', form.current, 'SztlHLUYmZx5S2DNB')
      .then((result) => {
          alert(result.text);
      }, (error) => {
          alert(error.text);
      });
  };
  return (
    <main className="px-7 pt-7 sm:px-16 h-screen bg-white text-neutral-900 flex items-center flex-col">
      <h1 className="font-semibold text-3xl md:text-4xl mb-5">Contact Form</h1>
      <form
        action=""
        className="bg-neutral-900 w-full md:w-[550px] rounded-lg text-white p-5 flex flex-col"
        ref={form} 
        onSubmit={sendEmail}
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col flex-1">
            <label htmlFor="" className="font-semibold p-1">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="rounded-md px-2 py-1 outline-none border-0 text-zinc-900 font-medium"
              placeholder="Your Name"
              required
              autoFocus
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="" className="font-semibold p-1">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="rounded-md px-2 py-1 outline-none border-0 text-zinc-900 font-medium"
              placeholder="Your Email Address"
              required
            />
          </div>
        </div>
        <label htmlFor="" className="mt-5 font-semibold p-1">
          Message
        </label>
        <textarea
          required
          placeholder="Write Your Message"
          name="message"
          cols="30"
          rows="10"
          className="h-[25vh] resize-none outline-none border-0 rounded-md px-2 py-1 text-neutral-900 font-medium"
        ></textarea>
        <input type="submit" value="Send"/>
      </form>
      <p className=" absolute right-0 bottom-0 p-4 font-semibold">By KHALIL ANDOLSI </p>
    </main>
  );
}

export default App;
