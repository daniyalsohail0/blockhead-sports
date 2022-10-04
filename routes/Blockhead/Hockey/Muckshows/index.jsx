import styles from "../../../../styles/Muckshows.module.css";
import { useRouter } from "next/router";

export default function Muckshows() {
  const router = useRouter();

  const handleRoutes = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <>
      <div className={`${styles.header} mt-16`}>
        <p>
          MINNESOTA
          <br />
          MUCKSHOWS
        </p>
      </div>
      <div className="flex justify-center">
        <div className={`${styles.textBox} mt-9`}>
          Entering Blockhead Hockey's inaugural season, no team has generated
          more hype than the <strong>Minnesota Muckshows</strong>. Led by the
          legendary centre Brandon Beauty, the 'Shows boast the deadliest front
          line trio in the BHL.
          <br />
          <br />
          Each Blockhead Hockey match is totally unpredictable, but if any team
          has the best shot of raising the Cup this season. . . It's Minnesota.
        </div>
      </div>
      {/* <div className="flex justify-center mt-12">
        <a className={styles.viewTeamButton} href="">
          view team nft on opensea
        </a>
      </div> */}
      <div className="flex justify-center mt-12">
        <span className={styles.heading}>ROSTER</span>
      </div>
      <div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/muckshows/beauty")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/muckshows/muckshows-beauty.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/muckshows/gauthier")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/muckshows/muckshows-gauthier.png"
            alt=""
          />
        </div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/muckshows/kelley")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/muckshows/muckshows-kelley.png"
            alt=""
          />
          <img
            onClick={(e) => handleRoutes(e, "/blockhead-hockey/muckshows/reed")}
            className={styles.rosterImage}
            src="/images/teams/hockey/muckshows/muckshows-reed.png"
            alt=""
          />
        </div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/muckshows/richards")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/muckshows/muckshows-richards.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/muckshows/volkov")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/muckshows/muckshows-volkov.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center my-16">
        <a
          className={styles.backButton}
          onClick={(e) => handleRoutes(e, "/blockhead-hockey")}
        >
          BACK TO BLOCKHEAD HOCKEY
        </a>
      </div>
    </>
  );
}
