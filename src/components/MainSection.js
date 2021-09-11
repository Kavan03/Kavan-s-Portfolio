import React from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDown from '../assets/images/scroll-down-arrow.svg';

const Styles = styled.div`
  .typed {
    font-size: 4.5rem;
    color: aliceblue;
    margin-bottom: -4rem;
    position: relative;
    font-family: 'Varela Round', sans-serif;
  }
  @media only screen and (max-width: 768px) {
    .typed {
      font-size: 2.5rem;
    }
  }
  .typed_text {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .hero {
    height: 100vh;
    min-height: 700px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__img {
    height: 450px;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
  }
  .hero__info {
    margin-top: -24rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function MainSection() {
  return (
    <Styles>
      <div className="hero">
        <div className="container">
          <div className="typed_text">
            <Typed
              className="typed"
              strings={[
                'Hey!!',
                'Welcome:)',
                "I'm Kavan Patel",
                'Web Developer',
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </div>
          <div className="hero__img">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="hero__info">
            <PText>
              A reliable and detailed-oriented individual desirous of working as
              developer benefiting the organization, leading towards growth of
              the organisation that I serve and to succeed in an environment of
              excellence with a satisfactory career and self-recognition.
            </PText>
            <Button btnlink="/projects" btntext="See My Work" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="mailto:kavanp193@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GM
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kavan-patel-77a945143"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDown} alt="" />
          </div>
        </div>
      </div>
    </Styles>
  );
}
