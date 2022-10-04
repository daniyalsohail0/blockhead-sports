import styles from "../../../../styles/Chundys.module.css";
import { useRouter } from "next/router";

export default function Chundys() {
  const router = useRouter();

  const handleRoutes = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <>
      <div className={`${styles.header} mt-16`}>
        <p>
          CHICAGO
          <br />
          CHUNDYS
        </p>
      </div>
      <div className="flex justify-center">
        <div className={`${styles.textBox} mt-9`}>
          The Windy City's beloved <strong>Chicago Chundys</strong> are loaded
          with veterans ready to bring home a 'ship. The Chundys' frontmen are
          centre Wyatt Shields and Marcus Dawson, the League's best defender.
          <br />
          <br />
          This stacked Chicago squad is a serious candidate to take home the
          very first Ether Cup this season.
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
            onClick={(e) => handleRoutes(e, "/blockhead-hockey/chundys/arbour")}
            className={styles.rosterImage}
            src="/images/teams/hockey/chundys/chundys-arbour.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/chundys/calabrese")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/chundys/chundys-calabrese.png"
            alt=""
          />
        </div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) => handleRoutes(e, "/blockhead-hockey/chundys/dawson")}
            className={styles.rosterImage}
            src="/images/teams/hockey/chundys/chundys-dawson.png"
            alt=""
          />
          <img
            onClick={(e) => handleRoutes(e, "/blockhead-hockey/chundys/reese")}
            className={styles.rosterImage}
            src="/images/teams/hockey/chundys/chundys-reese.png"
            alt=""
          />
        </div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/chundys/reynolds")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/chundys/chundys-reynolds.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/chundys/shields")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/chundys/chundys-shields.png"
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
