import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
    .servicesItem__title {
      font-size: 2.5rem;
      font-family: 'Patrick Hand', cursive;
    }
    .para {
      margin-top: 2rem;
    }
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  Text = 'Hello',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">
        {icon}
        <div className="servicesItem__title">{title}</div>
        <PText>{Text}</PText>
      </div>
    </ItemStyles>
  );
}
