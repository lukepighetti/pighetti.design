import * as React from "react";
import * as firebase from "firebase/app";
import "firebase/database";

type Props = {
  children: (latestData: LatestData) => React.ReactNode;
};

type State = {
  latestData?: LatestData;
};

export default class LatestDataContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDSb7CJlXlzJjQPE9IRVRTZpCjeJwAgk54",
      databaseURL: "https://pigeoncoin-api.firebaseio.com",
      projectId: "pigeoncoin-api"
    };

    firebase.initializeApp(config, "pigeoncoin");
  }

  componentDidMount() {
    firebase
      .app("pigeoncoin")
      .database()
      .ref("latestData")
      .on("value", snap => {
        if (snap) {
          const latestData: LatestData = snap.val();
          this.setState({ latestData });
        }
      });
  }

  render() {
    const { latestData } = this.state;

    if (latestData) {
      return this.props.children(latestData);
    }

    return null;
  }
}

/**
 * Response types
 */

interface LatestData {
  chain: {
    blockTime: number;
    difficulty: number;
    hashrate: number;
    height: number;
    lastHash: "00000000005bd49e0217ebbd7d26cb1549d333c606869a09bf30c2805a43ce0f";
    supply: number;
    timestamp: number;
  };
  market: {
    marketCapBtc: number;
    marketCapUsd: number;
    priceBtc: number;
    priceUsd: number;
    timestamp: number;
    volumeBtc: number;
    volumeUsd: number;
  };
  pool: {
    dailyBlocks: number;
    hashrate: number;
    lastBlock: number;
    lastBlockTime: number;
    miners: number;
    timeToFind: number;
    timestamp: number;
  };
}
