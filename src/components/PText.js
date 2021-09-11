import React from 'react';
import styled from 'styled-components';

const Pstyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 2.2rem;
  line-height: 1.3em;
  font-family: 'Caveat', cursive;
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
export default function PText({ children }) {
  return (
    <Pstyle className="para">
      <p>{children}</p>
    </Pstyle>
  );
}
