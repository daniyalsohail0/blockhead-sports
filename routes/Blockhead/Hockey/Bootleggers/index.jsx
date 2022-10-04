import styles from "../../../../styles/Bootleggers.module.css";
import { useRouter } from "next/router";

export default function Bootleggers() {
  const router = useRouter();

  const handleRoutes = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <>
      <div className={`${styles.header} mt-16`}>
        <p>
          BOSTON
          <br />
          BOOTLEGGERS
        </p>
      </div>
      <div className="flex justify-center">
        <div className={`${styles.textBox} mt-9`}>
          The <strong>Boston Bootleggers</strong> are one of the BHL's most
          traditional and hard-nosed franchises. Captained by the aging
          superstar Scott Reaves, their roster is loaded with a mixture of young
          talent and veterans on each end.
          <br />
          <br />
          Needless to say the whole city of Boston is eyeing a championship run
          for their Bootleggers in the BHL's debut season.
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
              handleRoutes(e, "/blockhead-hockey/bootleggers/clifton")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/bootleggers/bootleggers-clifton.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/bootleggers/jackson")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/bootleggers/bootleggers-jackson.png"
            alt=""
          />
        </div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/bootleggers/kellogg")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/bootleggers/bootleggers-kellogg.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/bootleggers/lewis")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/bootleggers/bootleggers-lewis.png"
            alt=""
          />
        </div>
        <div className="flex justify-center space-x-6 my-9">
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/bootleggers/reaves")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/bootleggers/bootleggers-reaves.png"
            alt=""
          />
          <img
            onClick={(e) =>
              handleRoutes(e, "/blockhead-hockey/bootleggers/stix")
            }
            className={styles.rosterImage}
            src="/images/teams/hockey/bootleggers/bootleggers-stix.png"
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
