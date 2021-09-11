import React from 'react';
import styled from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import experience from '../assets/data/experience';
import SectionTitle from './SectionTitle';
import 'react-vertical-timeline-component/style.min.css';

const Styles = styled.div`
  padding: 8rem 0;
  .vertical {
    margin-top: 4rem;
  }
  .vertical-timeline-element-content {
    background-color: var(--gray-2);
  }
  .vertical-timeline-element-date {
    font-size: 1.9rem !important;
    font-family: 'Patrick Hand', cursive;
  }
  .vertical-timeline-element-title {
    font-family: 'Patrick Hand', cursive;
    font-size: 2.5rem;
  }
  .vertical-timeline-element-subtitle {
    font-family: 'Patrick Hand', cursive;
    font-size: 1.5rem;
  }
  #description {
    font-family: 'Caveat', cursive;
    font-size: 1.9rem;
  }
  @media only screen and (max-width: 768px) {
    .vertical-timeline-element-date {
      font-size: 1.5rem !important;
    }
    .vertical-timeline-element-title {
      font-size: 2rem;
    }
    .vertical-timeline-element-subtitle {
      font-size: 1rem;
    }
    #description {
      font-size: 1rem;
    }
  }
`;
export default function ExperienceSection() {
  const workStyle = { background: 'var(--gray-1)' };
  return (
    <Styles>
      <div className="container">
        <SectionTitle heading="Experience" subheading="Let Us See My" />
        <VerticalTimeline className="vertical">
          {experience.map((element) => (
            <VerticalTimelineElement
              className="vertical-element"
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={workStyle}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </Styles>
  );
}
