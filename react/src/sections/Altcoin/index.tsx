import * as React from "react";
import styled from "styled-components";
import LatestDataContainer from "./service";
import { x16s, x16sCycle } from "./utils";

export default class AltcoinSection extends React.Component {
  render() {
    return (
      <Section>
        <Grid>
          <Title>
            <span>X16S</span>
            <br />
            shuffle mining
            <br />
            algorithm
          </Title>
          <Subtitle>power & hashrate consistency</Subtitle>
          <Aside>debuted on pigeoncoin</Aside>

          <LatestDataContainer>
            {({ chain, market }) => (
              <>
                <Table>
                  {x16s(chain.lastHash).map(({ hex, algorithm }) => (
                    <li key={hex}>{algorithm}</li>
                  ))}
                </Table>
                <Stats>
                  <div>{(chain.hashrate / 20e6).toFixed(0)} miners</div>
                  <div>{chain.height.toFixed(0)} blocks</div>
                  <div>{market.marketCapUsd.toFixed(0)} dollars</div>
                  <h3>{x16sCycle(chain.lastHash)}</h3>
                </Stats>
              </>
            )}
          </LatestDataContainer>
        </Grid>
      </Section>
    );
  }
}

const border = `0.4rem solid rgba(255, 255, 255, 0.8)`;

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

const Aside = styled.h2`
  font-size: 1.4rem;
  text-align: right;

  grid-column: 2/6;
  grid-row: 1;

  border-top: ${border};
  border-bottom: ${border};

  padding: 0.14rem;
  align-self: end;
  transform: translateY(-10rem);

  max-width: 40rem;
`;

const Table = styled.ul`
  grid-column: 1/2;
  grid-row: 3/6;

  list-style-type: none;
  line-height: 1.2;
  align-self: end;

  li {
    font-weight: 700;
    margin-top: 0.14rem;

    border-bottom: ${border};
  }
`;

const Stats = styled.div`
  text-align: right;
  grid-column: 2/7;
  grid-row: 4/6;

  font-weight: 300;

  align-self: end;
  transform: translateY(0.2rem);
  word-break: break-all;
`;
