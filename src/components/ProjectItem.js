import React from 'react';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
    font-family: 'Patrick Hand', cursive;
  }
  .projectItem__duration {
    font-size: 1.5rem;
    font-family: 'Patrick Hand', cursive;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
    font-family: 'Architects Daughter', cursive;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 150px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  duration = 'Date',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
      <img className="projectItem__img" src={img} alt="project img" />
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>
        <h5 className="projectItem__duration">{duration}</h5>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
