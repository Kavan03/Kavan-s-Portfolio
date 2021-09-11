import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';

const Styles = styled.div`
  padding: 8rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 3rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-family: 'Varela Round', sans-serif;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.5rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <Styles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Liked My Profile?</PText>
          <h3 className="contactBanner__heading">
            If Yes!! <br /> Do contact Me
          </h3>
          <Button btntext="Contact Now" btnlink="/contact" />
        </div>
      </div>
    </Styles>
  );
}
