import styles from "../../../../styles/Technicians.module.css";
import { useRouter } from "next/router";

export default function Technicians() {
  const router = useRouter();

  const handleRoutes = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <>
      <div className={`${styles.header} mt-16`}>
        <p>
          TEMPA BAY
          <br />
          TECHNICIANS
        </p>
      </div>
      <div className="flex justify-center">
        <div className={`${styles.textBox} mt-9`}>
          No Blockhead Hockey team has technique quite like the{" "}
          <strong>Tampa Bay Technicians</strong>. They feature the League's top
          rookie, Braxton Murray, and the one of it's most feared enforcers,
          Ivan Rasputin.
          <br />
          <br />
          Can the Technicians shock the metaverse this season and bring the
          Ether Cup down south?
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
              handleRoutes(e, "/blockhead-hockey/technicians/adams")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/technicians/technicians-adams.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/technicians/carlson")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/technicians/technicians-carlson.png"
            alt=""
          />
        </div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/technicians/murray")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/technicians/technicians-murray.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/technicians/rasputin")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/technicians/technicians-rasputin.png"
            alt=""
          />
        </div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/technicians/ross")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/technicians/technicians-ross.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/technicians/wilson")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/technicians/technicians-wilson.png"
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
