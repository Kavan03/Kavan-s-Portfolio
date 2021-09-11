import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
  a:hover {
    opacity: 0.6;
  }
`;
export default function ContactFooter({
  heading = 'Heading',
  Links = [
    {
      type: 'Links',
      title: 'Home',
      path: '/',
    },
    {
      type: 'Links',
      title: 'About',
      path: '/about',
    },
    {
      type: 'Links',
      title: 'Projects',
      path: '/projects',
    },
    {
      type: 'Links',
      title: 'Contact',
      path: '/contact',
    },
  ],
}) {
  return (
    <Styles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {Links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </Styles>
  );
}
