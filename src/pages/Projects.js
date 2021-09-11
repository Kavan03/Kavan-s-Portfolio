import React, { useState } from 'react';
import styled from 'styled-components';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';

const Styles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export default function Projects() {
  const [projectData, setProjectData] = useState(ProjectInfo);
  return (
    <Styles>
      <div className="container">
        <SectionTitle heading="Projects" subheading="Some Of My Recent Works" />
      </div>
      <div className="projects__allItems">
        {projectData.map((item) => (
          <ProjectItem
            key={item.id}
            title={item.name}
            duration={item.duration}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
      <ContactSection />
      <FooterSection />
    </Styles>
  );
}
