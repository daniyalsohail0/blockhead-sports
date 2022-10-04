import styles from "../../../../styles/Gondolas.module.css";
import { useRouter } from "next/router";

export default function Gondolas() {
  const router = useRouter();

  const handleRoutes = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <>
      <div className={`${styles.header} mt-16`}>
        <p>
          DENVER
          <br />
          GONDOLAS
        </p>
      </div>
      <div className="flex justify-center">
        <div className={`${styles.textBox} mt-9`}>
          The Blockhead Hockey team with the most explosive offense is the{" "}
          <strong>Denver Gondolas</strong>. All-star wing Tanner Keene is the
          catalyst of the Gondys' deadly attack.
          <br />
          <br />
          Denver fans are hoping their squad can roll their way to a
          championship in Blockhead Hockey's inaugural season.
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
              handleRoutes(e, "/blockhead-hockey/gondolas/hickey")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/gondolas/gondolas-hickey.png"
            alt=""
          />
          <img
            onClick={(e) => handleRoutes(e, "/blockhead-hockey/gondolas/jones")}
            className={styles.rosterImage}
            src="/images/teams/hockey/gondolas/gondolas-jones.png"
            alt=""
          />
        </div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/gondolas/kaufmann")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/gondolas/gondolas-kaufmann.png"
            alt=""
          />
          <img
            onClick={(e) => handleRoutes(e, "/blockhead-hockey/gondolas/keene")}
            className={styles.rosterImage}
            src="/images/teams/hockey/gondolas/gondolas-keene.png"
            alt=""
          />
        </div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/gondolas/oshaughnessy")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/gondolas/gondolas-oshaughnessy.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/gondolas/preston")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/gondolas/gondolas-preston.png"
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
