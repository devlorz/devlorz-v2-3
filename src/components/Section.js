/* global tw */
import React from 'react';
import styled from 'react-emotion';

const Section = styled('section')`
  ${tw`block`};
`;

const SectionHeader = styled('div')`
  ${tw`flex flex-col md:flex-row font-light`};
`;

const SectionTitle = styled('div')`
  ${tw`text-2xl font-bold text-teal`};
`;

const SubSection = styled(Section)`
  ${tw`ml-4`};
`;

const HeaderLeft = styled('div')`
  ${tw`flex flex-1`};
`;

const SubSectionTitle = styled('div')`
  ${tw`text-grey-darker font-bold mr-2`};
`;

const SubSectionInfo = styled('div')`
  ${tw`text-teal font-medium`};
`;

const HeaderRight = styled('div')``;

const BodyTitle = styled('div')`
  ${tw`font-semibold text-grey-darker`};
`;

const List = styled('ul')`
  ${tw`mt-0 mb-4 pl-6`};
`;

export default ({ section }) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{section.title}</SectionTitle>
      </SectionHeader>
      {section.subSections.map(subsection => {
        return (
          <SubSection>
            {subsection.title && (
              <SectionHeader>
                <HeaderLeft>
                  <SubSectionTitle>{subsection.title}</SubSectionTitle>
                  <div>{subsection.subTitle}</div>
                </HeaderLeft>
                <HeaderRight>
                  <SubSectionInfo>{subsection.info}</SubSectionInfo>
                </HeaderRight>
              </SectionHeader>
            )}
            <div className="section-body">
              {subsection.bodyTitle && (
                <BodyTitle>{subsection.bodyTitle}</BodyTitle>
              )}
              <List>
                {subsection.bodyDetails.map(detail => (
                  <li>{detail}</li>
                ))}
              </List>
            </div>
          </SubSection>
        );
      })}
    </Section>
  );
};
