import * as React from "react";
import styled from "styled-components";
// import * as icon from "./icon.svg";
import LatestDataContainer from "./service";
import { x16s } from "./utils";

export default class AltcoinSection extends React.Component {
  render() {
    return (
      <Section>
        <Grid>
          <Title>
            <span>X16S</span>
            <br />
            algorithm
            <br />
            shuffle
          </Title>
          <Subtitle>debuted in pigeoncoin</Subtitle>
          <Table>
            <LatestDataContainer>
              {({ chain }) =>
                x16s(chain.lastHash).map(({ hex, algorithm }) => (
                  <li key={hex}>{algorithm}</li>
                ))
              }
            </LatestDataContainer>
          </Table>

          {/* <Logo src={icon} /> */}
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
  background: linear-gradient(135deg, #2f71ff, #3aefff);

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);

  overflow: hidden;
`;

const Grid = styled.div`
  width: 80vw;
  height: 80vh;
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr 0.5fr;
  grid-template-rows: auto 1fr 1fr auto auto;
  grid-gap: 1rem;
  /* transform: rotate(-90deg); */
`;

/**
 * Grid Items
 */

// const Logo = styled.img`
//   max-height: 12rem;
//   max-width: 12rem;

//   grid-column: 1;
//   grid-row: 6;
// `;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 500;
  grid-column: 1/6;
  grid-row: 1;
  text-align: right;

  span {
    font-weight: 700;
    font-size: 4rem;
  }
`;

const Subtitle = styled.h2`
  font-weight: 300;
  grid-column: 6;
  grid-row: 1;

  font-size: 2rem;

  margin-top: 0.6rem;

  writing-mode: vertical-rl;
`;

const Table = styled.ul`
  grid-column: 1/2;
  grid-row: 2/6;

  list-style-type: none;
  line-height: 1.2;

  transform: rotate(-45deg) translate(40px, 40px);

  li {
    font-weight: 700;
    margin-top: 0.14rem;

    border-bottom: 0.4rem solid rgba(255, 255, 255, 0.8);
  }
`;
