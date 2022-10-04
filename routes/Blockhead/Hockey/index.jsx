import styles from "../../../styles/BlockheadHockey.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { countDownTimer } from "../../../helpers";
import { getUpcomingGameDate } from "../../../services/getUpcomingGameDate";

export default function index() {
  const router = useRouter();
  const [twitchImage, setTwitchImage] = useState("/images/twitch-button.png");
  const [timeObject, setTimeObject] = useState({});
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setFetching(true);
    getUpcomingGameDate({
      flag: "hockey",
      cbSuccess: ({ data }) => {
        countDownTimer(data.date, setTimeObject);
        setTimeout(() => {
          setFetching(false);
        }, 3000);
      },
      cbFailure: (error) => console.log(error),
    });
  }, []);

  const handleRoutes = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  const changeTwitchImage = (flag) => {
    if (flag) {
      setTwitchImage("/images/twitch-button-alt.png");
    } else {
      setTwitchImage("/images/twitch-button.png");
    }
  };

  return (
    <>
      <div className="flex justify-center mb-6 mt-16">
        <img className={styles.hero} src="/images/bhh-hero.gif" alt="" />
      </div>
      <div className={`flex justify-center mx-6`}>
        <div className={styles.textBox}>
          <p>
            In 2022, the Blockhead Hockey League formed from the depths of the
            Ethereum blockchain. Thousands of Blockhead athletes were generated
            . . .<br />
            <br />
            Only 36 players made the cut.
            <br />
            <br />
            This winter, all six Blockhead Hockey franchises will battle
            throughout a rigorous, month-long simulated season. Each BHL player
            has only one dream: To hoist the Ether Cup at season's end.
          </p>
        </div>
      </div>
      {/* <div className="hidden md:flex justify-center mt-16 mx-6">
        <div style={{ position: "relative" }}>
          <img width={630} src="/images/Timer.png" alt="" />
          <p className={styles.timerTitle}>GAME START</p>
          {timeObject.distance < 0 &&
            !fetching(
              <p className={styles.timerTime}>
                00&nbsp;:nbsp;00&nbsp;:nbsp;00&nbsp;:nbsp;00
              </p>
            )}

          {timeObject.distance > 0 && !fetching && (
            <p className={styles.timerTime}>
              {timeObject.days.toString().padStart(2, "0")}&nbsp;:&nbsp;
              {timeObject.hours.toString().padStart(2, "0")}&nbsp;:&nbsp;
              {timeObject.minutes.toString().padStart(2, "0")}&nbsp;:&nbsp;
              {timeObject.seconds.toString().padStart(2, "0")}
            </p>
          )}
          {fetching && (
            <img className={styles.loader} src="/images/bhh-loading.gif" />
          )}
          {!fetching && (
            <p className={styles.timerHeading}>
              Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Min&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Secs
            </p>
          )}
        </div>
      </div> */}
      <a
        href="https://Twitch.tv/blockheadsports"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center mt-9 mb-16 mx-6">
          <img
            width={630}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => changeTwitchImage(true)}
            onMouseLeave={() => changeTwitchImage(false)}
            className="object-contain"
            src={twitchImage}
            alt=""
          />
        </div>
      </a>
      <div className={`${styles.header} my-9 ml-auto mr-auto  text-center`}>
        <p className="text-5xl lg:text-7xl mx-6">MEET THE BLOCKHEADS</p>
      </div>
      <div className="mb-16">
        <div className="hidden lg:flex justify-center space-x-3 my-3">
          <a
            className={styles.buttonBoston}
            onClick={(e) => handleRoutes(e, "/blockhead-hockey/bootleggers")}
          >
            BOSTON
            <br />
            BOOTLEGGERS
          </a>
          <a
            className={styles.buttonChicago}
            onClick={(e) => handleRoutes(e, "/blockhead-hockey/chundys")}
          >
            CHICAGO
            <br />
            CHUNDYS
          </a>
        </div>
        <div className="hidden lg:flex justify-center space-x-3 my-3">
          <a
            className={styles.buttonTempaBay}
            onClick={(e) => handleRoutes(e, "/blockhead-hockey/technicians")}
          >
            TAMPA BAY
            <br />
            TECHNICIANS
          </a>
          <a
            className={styles.buttonDenver}
            onClick={(e) => handleRoutes(e, "/blockhead-hockey/gondolas")}
          >
            DENVER
            <br />
            GONDOLAS
          </a>
        </div>
        <div className="hidden lg:flex justify-center space-x-3 my-3">
          <a
            className={styles.buttonToronto}
            onClick={(e) => handleRoutes(e, "/blockhead-hockey/greenbacks")}
          >
            TORONTO
            <br />
            GREENBACKS
          </a>
          <a
            className={styles.buttonMinnesota}
            onClick={(e) => handleRoutes(e, "/blockhead-hockey/muckshows")}
          >
            MINNESOTA
            <br />
            MUCKSHOWS
          </a>
        </div>
      </div>
    </>
  );
}
