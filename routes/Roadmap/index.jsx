import styles from "../../styles/Roadmap.module.css";

export default function Roadmap() {
    return(
        <div>
            <div className={styles.card}>
                <h1 className={styles.cardHeading}>BHL Roadmap</h1>
                <p className={styles.cardText}>At <span style={{color: "red"}}>BLOCKHEAD SPORTS</span> we aim to manufacture the world's first self-functioning NFT sports leagues. Each player in our digital leagues are represented by NFTs. Throughout month-long seasons, these players and teams will battle and their performance will be rewarded in our utility token: <span style={{color: "red"}}>BlockHeadCoin</span>. Between seasons, BlockHead holders will be able to spend their earnings on new Player NFTs, real-life items, performance multipliers, and more via the <span style={{color: "red"}}>BlockHead Marketplace</span>. We plan to one day sell out digital stadiums and have our BlockHead franchises represent the revolutionary new cities of the metaverse.</p>
            </div>
            <div className={styles.headerImage}>
                <img className={styles.bannerImage} src="/images/roadmap-banner-image.png" alt="" />
            </div>
            
            <div className={`${styles.roadmapBlock} flex justify-center grid grid-cols-1 gap-2`}>
                <div className={styles.vl}></div>
                <div className={styles.circle1}><h1 className='text-center text-6xl text-white italic font-bold pt-2'>1</h1></div>
                <div className={styles.circle2}><h1 className='text-center text-6xl text-white italic font-bold pt-2'>2</h1></div>
                <div className={styles.circle3}><h1 className='text-center text-6xl text-white italic font-bold pt-2'>3</h1></div>
                <div className={styles.circle4}><h1 className='text-center text-6xl text-white italic font-bold pt-2'>4</h1></div>
                <div className={styles.circle5}><h1 className='text-center text-6xl text-white italic font-bold pt-2'>5</h1></div>
                <div>
                    <div className={styles.box1}>
                        <h1 className={`${styles.head1} pl-16`}>Blockhead Hockey's Debut Season</h1>
                        <p className="pl-16">On February 1, 2022 <span style={{color: "#BC0016"}}>252 BlockHead Hockey</span> NFTs became available for public minting. On February 14th, the BlockHead Hockey regular season will commence with <span style={{color: "#BC0016"}}>6 franchises</span> battling throughout a 14-game regular season. After every game, our holders will be rewarded with a sum of BHC determined by the performance of their NFT's corresponding player. Through the Marketplace, holders will have the opportunity to purchase a temporary <span style={{color: "#BC0016"}}>BHC multiplier</span> to enhance the coin accumulation multiplier on each BlockHeadPlayer that they own. These tokens will be separated by category of performance and the price for each will correspond. </p>
                        <div>
                            <h2 className="font-extrabold pl-16 pt-4">Season 1 Rewards</h2>
                        </div>
                        <div className="pl-16 pt-4">
                            <table>
                                <thead>
                                    <tr className="border-4 border-black">
                                        <th className="pl-8 pr-8">GOAL</th>
                                        <th className="pl-8 pr-8">ASSIST</th>
                                        <th className="pl-8 pr-8">HIT</th>
                                        <th className="pl-8 pr-8">SAVE</th>
                                        <th className="pl-8 pr-8">WIN</th>
                                        <th className="pl-8 pr-8">GOALS ALLOWED</th>
                                        <th className="pl-8 pr-8">ETHER CUP</th>
                                    </tr>
                                    <tr className="border-4 border-black">
                                        <td className="pl-8 pr-8">40 BHC<img className={styles.textlogo} src="/images/bhc-coin2.png" alt="" /></td>
                                        <td className="pl-8 pr-8">20 BHC<img className={styles.textlogo} src="/images/bhc-coin2.png" alt="" /></td>
                                        <td className="pl-8 pr-8">10 BHC<img className={styles.textlogo} src="/images/bhc-coin2.png" alt="" /></td>
                                        <td className="pl-8 pr-8">3 BHC<img className={styles.textlogo} src="/images/bhc-coin2.png" alt="" /></td>
                                        <td className="pl-8 pr-8">50 BHC<img className={styles.textlogo} src="/images/bhc-coin2.png" alt="" /></td>
                                        <td className="pl-8 pr-8">-8 BHC<img className={styles.textlogo} src="/images/bhc-coin2.png" alt="" /></td>
                                        <td className="pl-8 pr-8">500 BHC<img className={styles.textlogo} src="/images/bhc-coin2.png" alt="" /></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h1 className={`${styles.head1} pl-16 pt-20`}>Blockhead Market Expands</h1>
                        <p className="pl-16 pt-6">After BlockHead Hockey's first champion is crowned in Spring 2022, the first <span style={{color: "#BC0016"}}>BlockHead Sports offseason</span> is upon us. During this time our season one holders will have more opportunities to spend their hard-earned BHC on <span style={{color: "#BC0016"}}>real-life items</span> and bid for <span style={{color: "#BC0016"}}>Mint Draft positions</span> that will be added to the Marketplace during our first offseason. </p>
                    </div>
                    <div>
                        <h1 className={`${styles.head1} pl-16 pt-20`}>Mint Draft & Hocket Expansion</h1>
                        <p className="pl-16 pt-6">Following our exclusive initial mint and inaugural season, it will be time to expand our BlockHead community. The highest BHC bidders will be able to mint BlockHeadSports top new rookies by the order of their bid amounts. In addition, BlockHead Hockey is planning on adding <span style={{color: "#BC0016"}}>6 new franchises</span> for its second season. This creates <span style={{color: "#BC0016"}}>210 new expansion Player NFTs</span> that will be available for public mint. After every traditional season, the lowest BHC-accumulating player on each team is released; you can <span style={{color: "#BC0016"}}>read our whitepaper</span> for more information on our Player NFT lifecycle. However, with this looming  expansion, <span style={{color: "#BC0016"}}>every player released after season one will be given a second chance with a random expansion team in season two.</span> At this point, the color of your player card will begin to matter.  </p>
                    </div>
                    <div>
                        <h1 className={`${styles.head1} pl-16 pt-20`}>Blockhead Hocket Season Two & Market Expansion Two</h1>
                        <p className="pl-16 pt-16">BlockHead Hockey season two is sure to be a spectacle as twice the amount of teams and Player NFTs will be battling on the virtual ice for the Ether Cup. The color on your BlockHeadSports player will now hold value. It will also be an interesting time for our holders because we plan on unveiling <span style={{color: "#BC0016"}}>Player NFT add-ons.</span> These add-ons will permanently multiply the amount of BHC generated by a Player NFT in a specific statistical category when applied. Equipment add-ons are separated by category of coin accumulation and rarity of equipment. Rarity will have a direct reflection on BlockHeadCoin accumulation multipliers. These will be <span style={{color: "#BC0016"}}>available for purchase within the BlockHead Marketplace</span> for season two. </p>
                    </div>
                    <div>
                        <h1 className={`${styles.head1} pl-16 pt-20`}>Blockhead Basketball & Future</h1>
                        <p className="pl-16 pt-6">After the two integral beginning seasons of BlockHead Hockey, it will be time to expand our supply of Player NFTs even further with the launch of <span style={{color: "#BC0016"}}>BlockHead Basketball.</span> Using the same core principles and format of BlockHead Hockey, we will begin to simultaneously run and broadcast BlockHead Basketball seasons. </p>
                        <p className="pl-16 pt-4">As time progresses we look to explore features such as introducing <span style={{color: "#BC0016"}}>rare Player NFTs</span> and <span style={{color: "#BC0016"}}>interactive BlockHead experiences</span>. This growth culminates in our eventual <span style={{color: "#BC0016"}}>merging with the metaverse</span> where we look to integrate simulation technology with live virtual reality experience and casino-like wagering.</p>
                        <p className="pl-16 pt-4">The least we can say is: the <span style={{color: "#BC0016"}}>future looks bright at BlockHeadSports</span></p>
                    </div>
                </div>
                <div className={styles.hl}></div>
                <div className={styles.thank}>
                    <h1>Thank You</h1>
                </div>
                <div className={styles.bhclogo}><img src="/logo.png" alt=""/></div>
            </div>
        </div>
    );
}