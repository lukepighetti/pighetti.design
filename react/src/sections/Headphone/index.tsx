import * as React from "react";
import styled from "styled-components";

export default class HeadphoneSection extends React.Component {
  render() {
    return (
      <Section>
        <Grid>
          <UpperRight>text</UpperRight>
          <UpperLeft />
          <LowerLeft />
          <Title>Audiophile headphones.</Title>
          <Subtitle>
            designed for manufacturing. optimized for performance.
          </Subtitle>
        </Grid>
      </Section>
    );
  }
}

const red = "#e63f3f";

const Section = styled.div`
  position: relative;

  height: 100vh;
  width: 100vw;
  background: rgba(50, 50, 50, 0.9);

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);

  overflow: hidden;
`;

const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr auto 1fr auto 1fr;
  grid-template-rows: 2fr 2fr auto 1fr 1fr;
  grid-gap: 1rem;

  transform: rotate(-30deg);
`;

const UpperRight = styled.div`
  background-color: ${red};
  grid-column: 3/6;
  grid-row: 1/3;

  margin-top: -100vh;
  margin-right: -100vw;
`;

const UpperLeft = styled.div`
  background-color: ${red};
  grid-column: 1/2;
  grid-row: 1/3;

  margin-top: -100vh;
  margin-left: -100vw;
`;

const LowerLeft = styled.div`
  background-color: ${red};
  grid-column: 1/6;
  grid-row: 4/6;

  margin-bottom: -100vh;
  margin-left: -100vw;
  margin-right: -100vw;
`;

const Title = styled.div`
  font-size: 2rem;
  grid-column: 4;
  grid-row: 3;
`;

const Subtitle = styled.div`
  writing-mode: vertical-rl;
  font-weight: 300;
  text-align: end;
  grid-column: 2;
  grid-row: 2/3;
  align-self: center;
`;
