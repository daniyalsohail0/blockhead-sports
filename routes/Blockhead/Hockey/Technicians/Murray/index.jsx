import styles from "../../../../../styles/Technicians.module.css";
import { useRouter } from "next/router";

const Murray = () => {
  const router = useRouter();
  const handleRoutes = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <>
      <div className="flex justify-center mt-16">
        <a className={styles.statsButton} href="">
          STAT + HIGHLIGHTS COMING SOON!
        </a>
      </div>
      <div className="flex justify-center mt-12 items-center">
        <img src="/images/teams/hockey/technicians/murray-meta.png" alt="" />
        {/* <div className={`${styles.statsBlock}`}>
          <div className="my-6 space-y-5">
            <p className={styles.statHeader}>
              BRAXTON MURRAY <br /> NFTs:
            </p>
            <div>
              <a className={`${styles.nftButton1} ${styles.btn}`} href="">
                view on opensea
              </a>
            </div>
            <div>
              <a className={`${styles.nftButton2} ${styles.btn}`} href="">
                view on opensea
              </a>
            </div>
            <div>
              <a className={`${styles.nftButton3} ${styles.btn}`} href="">
                view on opensea
              </a>
            </div>
            <div>
              <a className={`${styles.nftButton4} ${styles.btn}`} href="">
                view on opensea
              </a>
            </div>
            <div>
              <a className={`${styles.nftButton5} ${styles.btn}`} href="">
                view on opensea
              </a>
            </div>
            <div>
              <a className={`${styles.nftButton6} ${styles.btn}`} href="">
                view on opensea
              </a>
            </div>
            <div>
              <a className={`${styles.nftButton7} ${styles.btn}`} href="">
                view on opensea
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <div className="flex justify-center my-12">
        <a
          className={styles.backToRosterButton}
          onClick={(e) => handleRoutes(e, "/blockhead-hockey/technicians")}
        >
          BACK TO TECHNICIANS ROSTER
        </a>
      </div>
    </>
  );
};

export default Murray;
