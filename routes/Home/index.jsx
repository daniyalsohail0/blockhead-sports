import styles from "../../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [discordUrl, setDiscordUrl] = useState("/images/discord-button.png");
  const [twitterUrl, setTwitterUrl] = useState("/images/twitter-button.png");
  const [openseaUrl, setOpenseaUrl] = useState("/images/opensea-button.png");
  const [twitchImage, setTwitchImage] = useState("/images/twitch-button.png");

  const handleDiscordHover = (flag) => {
    if (flag) {
      setDiscordUrl("/images/discord-button-hover.png");
    } else {
      setDiscordUrl("/images/discord-button.png");
    }
  };

  const handleTwitterHover = (flag) => {
    if (flag) {
      setTwitterUrl("/images/twitter-button-hover.png");
    } else {
      setTwitterUrl("/images/twitter-button.png");
    }
  };

  const handleOpenseaHover = (flag) => {
    if (flag) {
      setOpenseaUrl("/images/opensea-button-hover.png");
    } else {
      setOpenseaUrl("/images/opensea-button.png");
    }
  };

  const changeTwitchImage = (flag) => {
    if (flag) {
      setTwitchImage("/images/twitch-button-alt.png");
    } else {
      setTwitchImage("/images/twitch-button.png");
    }
  };

  return (
    <div>
      <div className="mt-16 flex justify-center">
        <img src="/images/banner.gif" />
      </div>
      <div className="mt-5 mx-6 flex items-center justify-center">
        <div>
          <img src="/images/basketball.png" width="120px" alt="basketball" />
        </div>
        <div>
          <img width="500px" src="/images/hero-logo.png" />
        </div>
        <div>
          <img src="/images/hockey.png" width="120px" alt="hockey" />
        </div>
      </div>
      <div className="flex justify-center mx-6 mt-6">
        <p className={styles.textBlock}>
          BLOCKHEAD HOCKEY will be minting our 252 inaugural Player NFTs on
          02/01/2022
        </p>
      </div>
      <div
        className={`flex items-center content-center justify-center ml-auto mr-auto ${styles.header} mt-12 mx-6`}
      >
        <div>
          <p className="text-4xl lg:text-5xl mx-6">
            THE FUTURE OF SPORTS IS IN THE CHAIN
          </p>
        </div>
      </div>
      <div className="flex justify-center my-12 mx-6">
        <div className={`${styles.textBlock2} `}>
          Born from the Ethereum blockchain, every Blockhead Sports athlete is
          unique in both looks and skill set. Using well-known sports video
          games, we have developed a new way to simulate our fictional leagues
          and catalog in-game statistics. Every team in the Blockhead Sports
          universe participates in month-long simulated “seasons”. Simulations
          will be live broadcasted into the metaverse nightly and feature our
          custom-crafted teams and rosters.
        </div>
      </div>
      <div className="mb-44 mx-6">
        <a
          href="https://Twitch.tv/blockheadsports"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center mt-9 mb-10 mx-6">
            <img
              width={500}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => changeTwitchImage(true)}
              onMouseLeave={() => changeTwitchImage(false)}
              className="object-contain"
              src={twitchImage}
              alt=""
            />
          </div>
        </a>
        <a
          href="https://discord.gg/xEJKd4eD4g"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`flex justify-center mt-6 ${styles.button}  `}>
            <img
              onMouseEnter={() => handleDiscordHover(true)}
              onMouseLeave={() => handleDiscordHover(false)}
              src={discordUrl}
              alt=""
            />
          </div>
        </a>
        <a
          href="https://opensea.io/collection/blockhead-sports"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`flex justify-center my-3 ${styles.button}`}>
            <img
              onMouseEnter={() => handleOpenseaHover(true)}
              onMouseLeave={() => handleOpenseaHover(false)}
              src={openseaUrl}
              alt=""
            />
          </div>
        </a>
        <a
          href="https://twitter.com/BlockHeadSports"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`flex justify-center my-3 ${styles.button}`}>
            <img
              onMouseEnter={() => handleTwitterHover(true)}
              onMouseLeave={() => handleTwitterHover(false)}
              src={twitterUrl}
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
}
