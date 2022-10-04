import styles from "../../../../styles/Greenbacks.module.css";
import { useRouter } from "next/router";

export default function Greenbacks() {
  const router = useRouter();

  const handleRoutes = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <>
      <div className={`${styles.header} mt-16`}>
        <p>
          TORONTO
          <br />
          GREENBACKS
        </p>
      </div>
      <div className="flex justify-center">
        <div className={`${styles.textBox} mt-9`}>
          Can the <strong>Toronto Greenbacks</strong> bring the Ether Cup home
          to Canada? Word around the metaverse is that this could be their year.
          The 'Backs are achored by veteran Dale McDowell and Swedish phenom
          Lukas Sundberg.
          <br />
          <br />
          Toronto is ready to put the League on notice and defend the Great
          White North in the debut season of Blockhead Hockey.
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
              handleRoutes(e, "/blockhead-hockey/greenbacks/byrne")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/greenbacks/greenbacks-byrne.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/greenbacks/clarke")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/greenbacks/greenbacks-clarke.png"
            alt=""
          />
        </div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/greenbacks/mcdowell")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/greenbacks/greenbacks-mcdowell.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/greenbacks/mikhailov")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/greenbacks/greenbacks-mikhailov.png"
            alt=""
          />
        </div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/greenbacks/simmons")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/greenbacks/greenbacks-simmons.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/greenbacks/sundberg")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/greenbacks/greenbacks-sundberg.png"
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
