import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import SectionTitle from './SectionTitle';
import Button from './Button';
import Img from '../assets/images/about-sec-img.png';

const Style = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    margin-top: -80px;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .img_css {
    height: 700px;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
export default function AboutSection() {
  return (
    <Style>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let Me Introduce Myself"
            heading="About Me"
          />
          <PText>
            My name is Kavan Patel, and I am 24 years old, positive,
            enthusiastic and competent Web Developer who, over the years, has
            built up a diverse range of skills, qualities and attributes that
            guarantee I will perform highly in this role. I have experience
            working both alone and as part of a team on often time-sensitive,
            challenging web development projects that require outstanding
            creative and technical capabilities and the ability to ensure all
            work is optimized across a wide range of platforms.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnlink="/projects" btntext="Works" />
            <Button btnlink="/about" btntext="Read More" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="img_css" src={Img} alt="" />
        </div>
      </div>
    </Style>
  );
}
