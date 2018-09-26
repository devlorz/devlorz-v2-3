/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';

import Layout from '../../components/Layout';
import { Container } from '../../components/Style';

const Header = styled('header')`
  ${tw`flex`};
`;

const NameSection = styled('div')`
  ${tw`flex flex-col mb-2`};
`;

const Title = styled('h3')`
  ${tw`mb-0 text-4xl leading-tight font-medium text-teal`};
`;

const Link = styled('a')`
  ${tw`text-grey-darker no-underline`};
`;

const PersonalInfo = styled('div')`
  ${tw`flex flex-col flex-1 justify-end items-end`};
`;

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

const List = styled('ul')`
  ${tw`mt-0 mb-4 pl-6`};
`;

const visualSmall = css`
  ${tw`md:hidden`};
`;

const visualLarge = css`
  ${tw`hidden md:block`};
`;

export default () => (
  <Layout>
    <Container>
      <Header>
        <NameSection>
          <Title>Nutti Saelor</Title>
          <Link href="http://devlorz.github.io">devlorz.github.io</Link>
          <Link className={visualSmall} ref="mailto:nuttisaelor@gmail.com">
            nuttisaelor@gmail.com
          </Link>
          <Link className={visualSmall} href="https://github.com/devlorz">
            github.com/devlorz
          </Link>
        </NameSection>
        <div className="spacer" />
        <PersonalInfo>
          <Link className={visualLarge} ref="mailto:nuttisaelor@gmail.com">
            nuttisaelor@gmail.com
          </Link>
          <Link className={visualLarge} href="https://github.com/devlorz">
            github.com/devlorz
          </Link>
        </PersonalInfo>
      </Header>

      <Section>
        <SectionHeader>
          <SectionTitle>Work Experience</SectionTitle>
        </SectionHeader>
        <SubSection>
          <SectionHeader>
            <HeaderLeft>
              <SubSectionTitle>Vertice International</SubSectionTitle>
              <div>Bangkok, Thailand</div>
            </HeaderLeft>
            <HeaderRight>
              <SubSectionInfo>January 2017 - Present</SubSectionInfo>
            </HeaderRight>
          </SectionHeader>
          <div>
            <div className="job-title">Front End Team Lead</div>
            <List>
              <li>
                Coordinate with Japanese developers and Thai developers for
                smooth workflow
              </li>
              <li>
                Built new web application projects called Extreme Cloud that
                implemented by Angular
              </li>
            </List>
          </div>
        </SubSection>
        <SubSection>
          <SectionHeader>
            <HeaderLeft>
              <SubSectionTitle>Vertice International</SubSectionTitle>
              <div>Bangkok, Thailand</div>
            </HeaderLeft>
            <HeaderRight>
              <SubSectionInfo>January 2016 - December 2016</SubSectionInfo>
            </HeaderRight>
          </SectionHeader>
          <div>
            <div className="job-title">Lead Software Developer</div>
            <List>
              <li>
                Coordinate with Japanese developers and Thai developers for
                smooth workflow
              </li>
              <li>
                Worked with VB.NET to build Windows application called Extreme
                (Car Management System)
              </li>
            </List>
          </div>
        </SubSection>
        <SubSection>
          <SectionHeader>
            <HeaderLeft>
              <SubSectionTitle>Vertice International</SubSectionTitle>
              <div>Bangkok, Thailand</div>
            </HeaderLeft>
            <HeaderRight>
              <SubSectionInfo>December 2014 - December 2015</SubSectionInfo>
            </HeaderRight>
          </SectionHeader>
          <div className="section-body">
            <div className="job-title">Software Developer</div>
            <List>
              <li>
                Worked with VB.NET to build Windows application called Extreme
                (Car Management System)
              </li>
            </List>
          </div>
        </SubSection>
        <SubSection>
          <SectionHeader>
            <HeaderLeft>
              <SubSectionTitle>Evolix</SubSectionTitle>
              <div>Bangkok, Thailand</div>
            </HeaderLeft>
            <HeaderRight>
              <SubSectionInfo>February 2013 - April 2014</SubSectionInfo>
            </HeaderRight>
          </SectionHeader>
          <div className="section-body">
            <div className="job-title">Software Developer</div>
            <List>
              <li>Built Android application that connected to Microsoft CRM</li>
              <li>
                Worked with C# and ASP.NET to implement web service that
                connected to Microsoft CRM and Android App
              </li>
            </List>
          </div>
        </SubSection>
      </Section>
      <Section>
        <SectionHeader>
          <SectionTitle>Side Projects</SectionTitle>
        </SectionHeader>
        <SubSection>
          <SectionHeader>
            <HeaderLeft>
              <SubSectionTitle>
                <Link
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.leeway.moneysimple"
                >
                  Money Simple
                </Link>
              </SubSectionTitle>
              <div>Android, Java, Kotlin</div>
            </HeaderLeft>
            <HeaderRight>
              <SubSectionInfo />
            </HeaderRight>
          </SectionHeader>
          <div className="section-body">
            <List>
              <li>A simple money management application</li>
              <li>
                Track income and outcome transactions with monthly overview
              </li>
            </List>
          </div>
        </SubSection>
        <SubSection>
          <SectionHeader>
            <HeaderLeft>
              <SubSectionTitle>
                <Link
                  target="_blank"
                  href="https://github.com/devlorz/android-kotlin-mvp"
                >
                  Android Kotlin MVP
                </Link>
              </SubSectionTitle>
              <div>Android, Kotlin</div>
            </HeaderLeft>
            <HeaderRight>
              <SubSectionInfo />
            </HeaderRight>
          </SectionHeader>
          <div className="section-body">
            <List>
              <li>
                A boilerplate project starter for Android MVP built with kotlin
              </li>
            </List>
          </div>
        </SubSection>
      </Section>
      <Section>
        <SectionHeader>
          <SectionTitle>Education</SectionTitle>
        </SectionHeader>
        <SubSection>
          <SectionHeader>
            <HeaderLeft>
              <SubSectionTitle>Ramkhamhaeng University</SubSectionTitle>
              <div>Bangkok, Thailand</div>
            </HeaderLeft>
            <HeaderRight>
              <SubSectionInfo>Graduation: 2013</SubSectionInfo>
            </HeaderRight>
          </SectionHeader>
          <div className="section-body">
            <List>
              <li>Bachelor of Science (B.S.), Computer Science</li>
            </List>
          </div>
        </SubSection>
      </Section>
      <Section>
        <SectionHeader>
          <SectionTitle>Technical Skills</SectionTitle>
        </SectionHeader>
        <SubSection>
          <List>
            <li>
              TypeScript, JavaScript(ES6), Angular, React, RxJS, NGRX, Redux,
              Git
            </li>
            <li>Java, Kotlin, C#, VB.net, Android, Firebase</li>
          </List>
        </SubSection>
      </Section>
    </Container>
  </Layout>
);
