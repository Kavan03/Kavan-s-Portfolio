import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const Styles = styled.div`
  padding: 8rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;
export default function ServiceSection() {
  return (
    <Styles>
      <div className="container">
        <SectionTitle subheading="What I will do for you" heading="Services" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            Text="I do UI/UX design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            Text="I also develop the websites, create high performance websites within given time limit with full efficiency and commitment."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Custom & Open Source Development"
            Text="Develop websites according to client's requirement to meet their expectations."
          />
        </div>
      </div>
    </Styles>
  );
}
