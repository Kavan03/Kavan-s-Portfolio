import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
    font-family: 'Klee One', cursive;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 24rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    font-family: 'Klee One', cursive;
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
    .item {
      font-size: 1.2rem;
    }
  }
`;

export default function AboutInfoItem({ title = '', items = ['HTML', 'CSS'] }) {
  return (
    <Style>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </Style>
  );
}
