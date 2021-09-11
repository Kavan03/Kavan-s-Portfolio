import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styled from 'styled-components';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import PText from './PText';
import testimonials from '../assets/data/testimonials';

const Styles = styled.div`
  padding: 8rem 0;
  text-align: center;
  .testimonial__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial__desc {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: 'Architects Daughter', cursive;
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-family: 'Patrick Hand', cursive;
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
    .next:hover,
    .prev:hover {
      opacity: 0.6;
    }
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: 250ms ease-in opacity;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: 250ms ease-in opacity;
  }
`;

export default function AppreciationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];
  function handlePrev() {
    if (activeIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  function handleNext() {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  return (
    <Styles>
      <div className="container">
        <SectionTitle
          subheading="See My Achievements, Appreciations & Certificates"
          heading="Appreciations"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonial__info">
                <div className="testimonial__desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="testimonial__name">{activeSlide.name}</h2>
                <p className="testimonial__title">
                  {activeSlide.title}, <br />
                  {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </Styles>
  );
}
