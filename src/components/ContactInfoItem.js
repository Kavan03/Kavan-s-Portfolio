import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .info {
    font-family: 'Klee One', cursive;
    font-size: 2rem;
  }
  svg {
    width: 3.5rem;
  }
  @media only screen and (max-width: 768px) {
    .info {
      font-size: 1.8rem;
    }
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">{text}</div>
    </ItemStyles>
  );
}
