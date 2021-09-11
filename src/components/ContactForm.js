import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
    font-family: 'Klee One', cursive;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.5;
  }
`;

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bt1qu97',
        'template_u2jsw4l',
        e.target,
        'user_feZjYF2bLOlSJBUqFnhT1'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert('Message sent successfully!!');
  }
  return (
    <div onSubmit={sendEmail}>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              required="required"
              id="name"
              name="name"
              placeholder="Please enter you name"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              required="required"
              id="email"
              name="email"
              placeholder="Please enter your email"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              required="required"
              id="message"
              name="message"
              placeholder="Please enter your message"
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </FormStyle>
    </div>
  );
}
