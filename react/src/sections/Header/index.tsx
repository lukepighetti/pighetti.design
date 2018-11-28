import * as React from "react";
import styled from "styled-components";

export default class HeaderSection extends React.Component {
  render() {
    return (
      <Section>
        <Grid rotated>
          <Title>
            the
            <br />
            experimental
            <br />
            designs
          </Title>
          <Vertical>of luke pighetti</Vertical>
          <Aside>startup hack</Aside>
          <List>
            <ListItem>Reactive programmer</ListItem>
            <ListItem>Accidental altcoin founder</ListItem>
            <ListItem>
              TypeScript, Firebase, Flutter, React, and Oxford Comma lover
            </ListItem>
            <ListItem>Ex-Headphone Designer</ListItem>
          </List>
          <Footer>
            Contact{" "}
            <a href="https://twitter.com/pighettidesign">@PIGHETTIDESIGN</a> on
            Twitter if you want to chat about your software, hardware, or
            ecommerce startup, or to discuss availability.
          </Footer>
        </Grid>
      </Section>
    );
  }
}

/**
 * Styled Components
 */

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--background-color);

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  overflow: hidden;
`;

type GridProps = {
  rotated?: boolean;
};

const Grid = styled.div`
  width: 66vw;
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr 0.5fr;
  grid-template-rows: auto 1fr 1fr auto auto;
  grid-gap: 1rem;

  ${({ rotated }: GridProps) =>
    rotated && "transform: translate(-40px, -100px) rotate(-45deg);"}
`;

const Title = styled.h1`
  grid-column: 2 / 4;
  text-align: right;
`;

const Aside = styled.h2`
  font-size: 1.4rem;
  text-align: left;
  grid-column: 4/6;
  grid-row: 3;
  border-top: 0.4rem solid var(--border-color);
  border-bottom: 0.4rem solid var(--border-color);
  padding-top: 0.14rem;
  align-self: end;
`;

const Vertical = styled.h1`
  font-size: 2.8rem;
  color: var(--accent-color);
  writing-mode: vertical-rl;
  grid-column: 3/4;
  grid-row: 2 / 5;
  /*   justify-self: end; */
  margin-top: -10px;
  margin-right: -10px;
`;

const List = styled.div`
  grid-column: 1 / 3;
  grid-row: 4 / span 2;
  font-weight: 700;
  line-height: 1.2;
  /*   align-self: end; */
  /*   background-color: pink; */
`;

const ListItem = styled.li`
  font-weight: 700;
  list-style-type: none;
  border-bottom: 0.4rem solid var(--border-color);
  margin-top: 0.14rem;
`;

const Footer = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: none;
  grid-column: 3 / 6;
  grid-row: 5;
  border-bottom: 1.4rem solid var(--accent-color);
  padding-bottom: 0.14rem;

  a {
    color: var(--text-color);
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
  }
`;