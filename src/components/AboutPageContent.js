import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import ProfileImg from '../assets/images/ProfileImg.jpg';
import AboutInfoItem from './AboutInfoItem';
import Resume from '../assets/data/Kavan_Resume.pdf';

const Style = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  a {
    font-size: 4rem;
    font-family: 'Patrick Hand', cursive;
    text-decoration: underline;
    color: var(--gray-1);
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    font-family: 'Architects Daughter', cursive;
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    font-family: 'Patrick Hand', cursive;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    margin-top: 10rem;
    font-family: 'Fredoka One', cursive;
  }
  @media only screen and (max-width: 768px) {
    a {
      font-size: 2.5rem;
    }
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function AboutPageContent() {
  return (
    <Style>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">Hi I'm Kavan Patel</p>
            <h2 className="about__heading">A Web Developer</h2>
            <div className="about__info">
              <PText>
                My name is Kavan Patel, and I am 24 years old, positive,
                enthusiastic and competent Web Developer who, over the years,
                has built up a diverse range of skills, qualities and attributes
                that guarantee I will perform highly in this role. I have
                extensive experience working both alone and as part of a team on
                often time-sensitive, challenging web development projects that
                require outstanding creative and technical capabilities and the
                ability to ensure all work is optimized across a wide range of
                platforms. <br />
                <br />
                I started working as an intern at Silverwing Technologies
                Private Limited to gain an experience of corporate world, where
                I worked for 1 year in technologies like Angular 6+. Adding to
                my portfolio, I worked for 2 years at well-known MNC Tata
                Consultancy Services, where I worked as an Assistant System
                Engineer from August 2019- June 2021. I have come in touch with
                many technologies here; which helped me decide the future domain
                specialization I am interested in. <br />
                <br />I enjoyed the integrated nature of using technology,
                analyzing the data, understanding and using it and coming up
                with a solution. This is one of the major reasons I want to
                build my career in this field. Moving forward, I hope to expand
                my experience across different industries.
              </PText>
            </div>
            <a href={Resume} download="Kavan_Resume.pdf">
              Download Resume
            </a>
          </div>
          <div className="right">
            <img src={ProfileImg} alt="Profile_Img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about_info_item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School Class X"
              items={['Ambe Vidyalaya, Gujarat, India', 'Percentage : 85.50%']}
            />
            <AboutInfoItem
              title="School Class XII"
              items={[
                'Bright English Medium School, Gujarat, India',
                'Percentage : 80%',
              ]}
            />
            <br />
            <AboutInfoItem
              title="Collage Bachelors"
              items={[
                'Government Engineering College, Gandhinagar, India',
                'Course : Information Technology',
                'CGPA : 8.50',
              ]}
            />
            <br />
            <AboutInfoItem
              title="University Masters"
              items={[
                'Dalhousie University, Nova Scotia, Canada',
                'Course : Master of Applied Computer Science',
              ]}
            />
          </div>
          <div className="about_info_item">
            <h1 className="about__info__heading">Technical Skills</h1>
            <AboutInfoItem
              title="Languages"
              items={['C', 'C++', 'Java', 'Python', 'SQL']}
            />
            <br />
            <AboutInfoItem
              title="Web Technologies"
              items={['HTML5', 'CSS3', 'Bootstrap', 'JavaScript']}
            />
            <br />
            <AboutInfoItem
              items={['jQuery', 'ReactJS', 'Embedded JavaScript']}
            />
            <br />
            <br />
            <br />
            <AboutInfoItem
              title="Tools"
              items={['Visual Studio', 'Net Beans-IDE', 'Xampp', 'WinSCP']}
            />
            <br />
            <AboutInfoItem
              items={['Postman', 'GIT', 'GitHUB', 'npm', 'Atom', 'Express.js']}
            />
            <br />
            <br />
            <br />
            <AboutInfoItem
              title="Database"
              items={['MySQL', 'MongoDB with Mongoose']}
            />
          </div>
          <div className="about_info_item">
            <h1 className="about__info__heading">Soft Skills</h1>
            <AboutInfoItem
              title="Skills"
              items={[
                'Quick Learner',
                'Good Communication Skills',
                'Team Work',
                'Adaptability',
              ]}
            />
            <br />
            <AboutInfoItem
              items={[
                'Problem Solver',
                'Good Analytics Skills',
                'Time Management',
              ]}
            />
          </div>
        </div>
      </div>
    </Style>
  );
}
