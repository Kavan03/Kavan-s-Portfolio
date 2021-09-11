import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Style = styled.div`
  padding: 14rem 0;
  .heading {
    font-size: 10rem;
    font-family: 'Fredoka One', cursive;
    text-align: center;
  }
  .paragraph {
    font-size: 5rem;
    font-family: 'Architects Daughter', cursive;
    text-align: center;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
  }
  @media only screen and (max-width: 768px) {
    .heading {
      font-size: 7rem;
    }
    .paragraph {
      font-size: 3rem;
    }
    .buttons {
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
export default function Error() {
  return (
    <Style>
      <div className="container">
        <p className="heading">404</p>
        <p className="paragraph">Page Not Found</p>
        <div className="buttons">
          <Button btnlink="/" btntext="Go Back" />
        </div>
      </div>
    </Style>
  );
}
