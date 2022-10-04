import styles from "../../styles/Faq.module.css";
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


export const Data = [
  {
    question: 'If you are big in the NFT space, why get into BlockHeadSports?',
    answer: 'When you earn a BlockHead, your BlockHead is always accumulating BlockHeadCoin. When you buy a BlockHead, you are buying an asset that quite literally makes you passive income as the BlockHeadCoin has the ability to be exchanged in our private marketplace.'
  },
  {
    question: 'Why should I own a BlockHead and how can I control how much BlockHeadCoin I earn?',
    answer: 'BlockHeads passively accumulate BlockHeadCoin during games. Coin accumulation can be multiplied from multiplier tokens in which each category (goals, assists, saves, hits) can be multiplied at the expense of BlockHeadCoin.'
  },
  {
    question: 'What is a quick example of living lavishly through BlockHeadSports?',
    answer: 'Through minting a BlockHead you have the ability to exchange your BlockHeadCoin for prizes way beyond the value of your initial investment. Keep in mind, the goal is to accumulate as much BlockHeadCoin as possible.'
  }
];

export const Data2 = [
    {
      question: 'How do you purchase a BlockHead?',
      answer: 'In order to mint a BlockHead, you must have the appropriate amount of ETH in your METAMASK. Ethereum can be purchased directly on the METAMASK application or transferred to your METAMASK through any BlockChain wallet. Following doing that, check out the #mint-tutorial section of the discord for an in-depth video walk through of how to mint.'
    },
    {
      question: 'What is the mint price of a BlockHead?',
      answer: 'Each BlockHead right now is minting at .125 ETH.'
    },
    {
      question: 'How many NFTs are there in Season 1?',
      answer: 'There are 252 total BlockHeadSports NFTs. 6 players on each team, 6 teams in our league and 7 forms of each player. '
    },
    {
      question: 'What are some examples of ways you could make your NFT personalized?',
      answer: 'In terms of NFT personalization, there’s a bunch of avenues we are looking to explore, first and foremost you will have the ability to use BHC to rename your player card in future seasons under his original name. The decentralization of your player is something we want to emphasize going forward.'
    }
];

export const Data3 = [
    {
      question: 'HOW DO THESE SIMULATED LEAGUES WORK?',
      answer: 'The first BlockHead Hockey season will commence in February 2022. The league will begin with 6 franchises, each featuring rosters of 6 players that cannot get injured nor fatigued. Every team will play a 14-game, Twitch-broadcasted regular season schedule. The top teams from each conference will then compete in the very first Ether Cup Finals. Playoffs will be implemented as more franchises are added. After the first champions are crowned and Blockhead Hockey Season One is in the books, it will be time for the first traditional BlockHead Sports offseason. After every season, the worst performing player from each team is replaced by a newly-minted rookie. These mini-whitelists or “Mint Drafts” will add a variety of new Player NFTs into circulation after the completion of each season. BlockHead holders will be able to bid their hard-earned BHC for picks in the seasonal BlockHead Mint Draft. The higher their bid, the more likely it is for that holder to secure a valuable new rookie Player NFT. For the holders of the Player NFTs that get released or retire, their NFT is out of the league and will no longer be eligible for game payouts. These owners then have the option to “burn” their NFT out of circulation for a BHC reward based on their player’s career performance. Players that retire (reach the maximum number of 12 seasons played) after achieving certain statistical milestones may be eligible to earn each of their holders one new Mint Draft spot. Upon retirement, legendary or notable Player NFTs will be purchased and featured in the BlockHead Sports Hall of Fame Museum; virtually constructed in the BlockHead community’s metaverse of choice.'
    },
    {
      question: 'How does the actual game work?',
      answer: '6v6 Hockey 5 minute periods. NFT player cards are uploaded into the NHL game, each one is a customized player with respects to their name and attributes. There is no affiliation with the NHL whatsoever. Simulations are run by the computer,  so there is no ability to control your player.'
    },
    {
      question: 'Can you back other players that are not your own NFTs? Can you bet on other players?',
      answer: "As of right now, there is no gambling on game outcomes, or other players' performance. The legality here makes this tough at the moment. "
    },
    {
      question: 'Who is controlling my player? I control my NFT but he’s tied to somebody else who is controlling an avatar player?',
      answer: 'Holders have no control of their players actual performance, only the BlockHeadCoin they accumulate, which is ultimately how you purchase anything in our private marketplace.'
    },
    {
      question: 'When can you buy a multiplier? If you have a bad player how can you participate and still do well?',
      answer: 'Multipliers can be bought as soon as your player acquires enough BlockHeadCoin to purchase one. This allows holders with cards of various skill sets to all have the ability to acquire the most BlockHeadCoin. '
    }
];

export const Data4 = [
    {
      question: 'How does my NFT acquire BlockHeadCoin?',
      answer: 'NFTs acquire BlockHeadCoin based off of their in game performance (assists, hits, saves, goals)'
    },
    {
      question: 'Must you own a BlockHead NFT to accumulate BlockHeadCoin?',
      answer: 'The only way to accumulate BlockHeadCoin is through holding a BlockHeadSports NFT'
    },
    {
      question: 'What happens to my coin at the end of the season?',
      answer: 'At the end of the season you retain whatever coin you have accumulated.'
    },
    {
      question: 'Is the BlockHeadCoin only good in the BlockHead ecosystem?',
      answer: 'As of right now, BlockHeadCoin is only exchangeable within the BlockHeadSports marketplace. BHC will be completely interoperable between all BHS leagues and there will be one common marketplace. In the future we plan to make BlockHeadCoin work outside of just the BlockHead ecosystem. Our ceiling is truly untapped. '
    },
    {
      question: 'How much BlockHeadCoin do I receive and how is it accumulated?',
      answer: 'BlockHeadCoin is accumulated based on player performance within the simulation. The BlockHeadCoin you accumulate comes from each BlockHead that you own. The flat rate for BlockHeadCoin accumulation goes as follows: Goal=40 BHC Assist=20 BHC Hit=10 BHC Save= 4 BHC'
    }
];

export const Data5 = [
    {
      question: 'What will the marketplace look like?',
      answer: 'Our BlockHeadSports private marketplace will consist of both Web3 and tangible rewards all of which can be purchased through BlockHeadCoin.'
    },
    {
      question: 'How Do ‘Special’ prizes work in the marketplace?',
      answer: 'Special prizes are prizes separate from our Web3 and Hockey related prizes. Each wallet can attain a maximum of one special prize each from the marketplace per season. However, once a special prize is exchanged for, it is no longer up for grabs. Accumulate your coin fast or be left out. '
    },
    {
      question: 'What are some tangible examples of what people could win?',
      answer: 'Prizes vary from future whitelist spots, mints to hockey memorabilia, various amounts of crypto currency, tickets to sports games and much more, we have the ability to introduce whatever we desire into the marketplace as we please. Our priority is to always put our holders first and provide you with a great ability to have a real opportunity at a solid return of investment.'
    },
    {
      question: 'What does the expansion of the BHS marketplace Season 2 look like outside of tangible prizes?',
      answer: 'In Season 2 we will introduce player card add ons. Player card add-ons come in 3 different rarities (Bronze, Gold, Platinum) and can be minted as NFTs. These will be virtual pieces of equipment you can add to your player card that will serve as a multiplier without having to risk your BlockHeadCoin. These pieces of equipment will include Gloves (Saves), Sticks (Goals) Helmet (Hits) and Skates (Assists) multiplier amounts will be 1.5x 2x and 3x the baseline coin accumulation for each category.'
    }
];

export default function Faq() {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
      if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
      }

      setClicked(index);
    };

    const [clicked2, setClicked2] = useState(false);

    const toggle2 = index => {
      if (clicked2 === index) {
      //if clicked question is already active, then close it
      return setClicked2(null);
      }

      setClicked2(index);
    };

    const [clicked3, setClicked3] = useState(false);

    const toggle3 = index => {
      if (clicked3 === index) {
      //if clicked question is already active, then close it
      return setClicked3(null);
      }

      setClicked3(index);
    };

    const [clicked4, setClicked4] = useState(false);

    const toggle4 = index => {
      if (clicked4 === index) {
      //if clicked question is already active, then close it
      return setClicked4(null);
      }

      setClicked4(index);
    };

    const [clicked5, setClicked5] = useState(false);

    const toggle5 = index => {
      if (clicked5 === index) {
      //if clicked question is already active, then close it
      return setClicked5(null);
      }

      setClicked5(index);
    };

    return(
      <div>
        <div className={styles.faq}>
          <div className={styles.header}>FAQS</div>
          <div id="why">
            <h1 className={styles.heading}>The Why?</h1>
            <div className={styles.wrapper}>
              <div className={styles.accordion}>
                {Data.map((item, i) => {
                  return(
                    <div className={styles.item}>
                      <div className={styles.title} onClick={() => toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>
                          {clicked == i ? <img className={styles.polygon} src="/images/Polygon 1.png" alt="" /> : <img src="/images/Polygon 1.png" alt="" />}
                        </span>
                      </div>
                      <div className={clicked == i ? styles.contentShow : styles.content}>
                        <br/>
                        <hr className="p-2 border-black"/>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div id="blockhead">
            <h1 className={styles.heading}>BlockHead NFTs</h1>
            <div className={styles.wrapper}>
              <div className={styles.accordion}>
                {Data2.map((item, i) => {
                  return(
                    <div className={styles.item}>
                      <div className={styles.title} onClick={() => toggle2(i)}>
                        <h2>{item.question}</h2>
                        <span>
                          {clicked2 == i ? <img className={styles.polygon} src="/images/Polygon 1.png" alt="" /> : <img src="/images/Polygon 1.png" alt="" />}
                        </span>
                      </div>
                      <div className={clicked2 == i ? styles.contentShow : styles.content}>
                        <br/>
                        <hr className="p-2 border-black"/>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div id="game">
            <h1 className={styles.heading}>The Game</h1>
            <div className={styles.wrapper}>
              <div className={styles.accordion}>
                {Data3.map((item, i) => {
                  return(
                    <div className={styles.item}>
                      <div className={styles.title} onClick={() => toggle3(i)}>
                        <h2>{item.question}</h2>
                        <span>
                          {clicked3 == i ? <img className={styles.polygon} src="/images/Polygon 1.png" alt="" /> : <img src="/images/Polygon 1.png" alt="" />}
                        </span>
                      </div>
                      <div className={clicked3 == i ? styles.contentShow : styles.content}>
                        <br/>
                        <hr className="p-2 border-black"/>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div id="blockheadcoin">
            <h1 className={styles.heading}>BlockHeadCoin</h1>
            <div className={styles.wrapper}>
              <div className={styles.accordion}>
                {Data4.map((item, i) => {
                  return(
                    <div className={styles.item}>
                      <div className={styles.title} onClick={() => toggle4(i)}>
                        <h2>{item.question}</h2>
                        <span>
                          {clicked4 == i ? <img className={styles.polygon} src="/images/Polygon 1.png" alt="" /> : <img src="/images/Polygon 1.png" alt="" />}
                        </span>
                      </div>
                      <div className={clicked4 == i ? styles.contentShow : styles.content}>
                        <br/>
                        <hr className="p-2 border-black"/>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div id="marketplace">
            <h1 className={styles.heading}>Marketplace</h1>
            <div className={styles.wrapper}>
              <div className={styles.accordion}>
                {Data5.map((item, i) => {
                  return(
                    <div className={styles.item}>
                      <div className={styles.title} onClick={() => toggle5(i)}>
                        <h2>{item.question}</h2>
                        <span>
                          {clicked5 == i ? <img className={styles.polygon} src="/images/Polygon 1.png" alt="" /> : <img src="/images/Polygon 1.png" alt="" />}
                        </span>
                      </div>
                      <div className={clicked5 == i ? styles.contentShow : styles.content}>
                        <br/>
                        <hr className="p-2 border-black"/>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.quicknav} `}>
          <a className={styles.navtext} href='#why'>The Why</a>
          <a className={styles.navtext} href='#blockhead'>Blockhead NFTs</a>
          <a className={styles.navtext} href='#game'>The Game</a>
          <a className={styles.navtext} href='#blockheadcoin'>BlockHeadCoin</a>
          <a className={styles.navtext} href='#marketplace'>Marketplace</a>
        </div>

      </div>
    );
}