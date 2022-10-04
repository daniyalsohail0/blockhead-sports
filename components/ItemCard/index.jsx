import styles from "../../styles/Marketplace.module.css";

const ItemCard = ({ level, type, flag, cost }) => {
  if (level === "bronze") {
    return (
      <div
        className={`w-72 h-96 m-6 border-3 border-bronze rounded cursor-pointer drop-shadow-lg ${styles.itemCard}`}
        id={`${styles["item-card"]}`}
      >
        <span className="flex justify-center space-x-16 mt-3">
          <div className="font-minecraft-bold text-bold">BHL</div>
          <div></div>
          <div className={`flex`}>
            <img
              className={`object-contain`}
              width={20}
              src="/images/bronze-star.png"
              alt=""
            />
            <div className="ml-3">Bronze</div>
          </div>
        </span>
        <div className={`flex flex-col space-y-6 w-1/2 mx-auto mt-9 `}>
          <div id={`${styles["item-image"]}`}>
            <img
              src={`/images/r1-deliverables/2x ${type} bronze item.svg`}
              alt="bronze-item"
            />
          </div>
          <img
            src="/images/r1-deliverables/Shadows/saves and goals/shadow-assists.svg"
            alt=""
          />
        </div>
        <div className="mt-6 text-left ml-6">
          2x {type.charAt(0).toUpperCase() + type.slice(1)} Multiplier
        </div>
        <div className="ml-6 mt-3 flex items-center">
          <img
            width={33}
            classSName="object-contain"
            src="/images/bhc-logo.png"
            alt=""
          />
          <div className="font-minecraft-bold ml-3">20 BHC</div>
        </div>
      </div>
    );
  } else if (level === "silver") {
    return (
      <div
        className={`w-72 h-96 m-6 border-3 border-silver rounded cursor-pointer drop-shadow-lg ${styles.itemCard}`}
        id={`${styles["item-card"]}`}
      >
        <span className="flex justify-center space-x-16 mt-3">
          <div className="font-minecraft-bold text-bold">BHL</div>
          <div></div>
          <div className="flex">
            <img
              className="object-contain"
              width={30}
              src="/images/silver-stars.png"
              alt=""
            />
            <div className="ml-3">Silver</div>
          </div>
        </span>
        <div className="flex flex-col space-y-6 w-1/2 mx-auto mt-9">
          <div id={`${styles["item-image"]}`}>
            <img
              src={`/images/r1-deliverables/4x ${type} silver item.svg`}
              alt=""
            />
          </div>
          <img
            src="/images/r1-deliverables/Shadows/saves and goals/shadow-assists.svg"
            alt=""
          />
        </div>
        <div className="mt-6 text-left ml-6">
          4x {type.charAt(0).toUpperCase() + type.slice(1)} Multiplier
        </div>
        <div className="ml-6 mt-3 flex items-center">
          <img
            width={33}
            classSName="object-contain"
            src="/images/bhc-logo.png"
            alt=""
          />
          <div className="font-minecraft-bold ml-3">40 BHC</div>
        </div>
      </div>
    );
  } else if (level === "gold") {
    return (
      <div
        className={`w-72 h-96 m-6 border-3 border-gold rounded cursor-pointer drop-shadow-lg ${styles.itemCard}`}
        id={`${styles["item-card"]}`}
      >
        <span className="flex justify-center space-x-16 mt-3">
          <div className="font-minecraft-bold text-bold">BHL</div>
          <div></div>
          <div className="flex">
            <img
              className="object-contain"
              width={40}
              src="/images/gold-stars.png"
              alt=""
            />
            <div className="ml-3">Gold</div>
          </div>
        </span>
        <div className="flex flex-col space-y-6 w-1/2 mx-auto mt-9">
          <div id={`${styles["item-image"]}`}>
            <img
              src={`/images/r1-deliverables/8x ${type} gold item.svg`}
              alt=""
            />
          </div>
          <img
            src="/images/r1-deliverables/Shadows/saves and goals/shadow-assists.svg"
            alt=""
          />
        </div>
        <div className="mt-6 text-left ml-6">
          8x {type.charAt(0).toUpperCase() + type.slice(1)} Multiplier
        </div>
        <div className="ml-6 mt-3 flex items-center">
          <img
            width={33}
            classSName="object-contain"
            src="/images/bhc-logo.png"
            alt=""
          />
          <div className="font-minecraft-bold ml-3">120 BHC</div>
        </div>
      </div>
    );
  } else if (level === "diamond") {
    if (flag === "a") {
      return (
        <div
          className="w-72 h-96 m-6 border-3 border-black rounded cursor-pointer"
          id={`${styles["item-card"]}`}
        >
          <span className="flex justify-center space-x-16 mt-3">
            <div className="font-minecraft-bold text-bold">BHL</div>
            <div></div>
            <div className="flex">
              <img
                className="object-contain"
                width={20}
                src="/images/black-diamond-star.png"
                alt=""
              />
              <div className="ml-3">Diamond</div>
            </div>
          </span>
          <div className="flex flex-col space-y-6 w-1/2 mx-auto mt-9">
            <div id={`${styles["item-image"]}`}>
              <img
                src={`/images/r1-deliverables/diamond ${type} 12x item.svg`}
                alt=""
              />
              <img
                src="/images/r1-deliverables/Shadows/saves and goals/shadow-assists.svg"
                alt=""
              />
            </div>
          </div>
          <div className="mt-6 text-left ml-6">
            12x {type.charAt(0).toUpperCase() + type.slice(1)} Multiplier
          </div>
          <div className="ml-6 mt-3 flex items-center">
            <img
              width={33}
              classSName="object-contain"
              src="/images/bhc-logo.png"
              alt=""
            />
            <div className="font-minecraft-bold ml-3">120 BHC</div>
          </div>
        </div>
      );
    } else if (flag === "b") {
      return (
        <div
          className="w-72 h-96 m-6 border-3 border-black rounded cursor-pointer"
          id={`${styles["item-card"]}`}
        >
          <span className="flex justify-center space-x-16 mt-3">
            <div className="font-minecraft-bold text-bold">BHL</div>
            <div></div>
            <div className="flex">
              <img
                className="object-contain"
                width={20}
                src="/images/black-diamond-star.png"
                alt=""
              />
              <div className="ml-3">Diamond</div>
            </div>
          </span>
          <div className="flex flex-col space-y-6 w-1/2 mx-auto mt-9">
            <div id={`${styles["item-image"]}`}>
              <img
                src={`/images/r1-deliverables/diamond ${type} 20x item.svg`}
                alt=""
              />
            </div>
            <img
              src="/images/r1-deliverables/Shadows/saves and goals/shadow-assists.svg"
              alt=""
            />
          </div>
          <div className="mt-6 text-left ml-6">
            20x {type.charAt(0).toUpperCase() + type.slice(1)} Multiplier
          </div>
          <div className="ml-6 mt-3 flex items-center">
            <img
              width={33}
              classSName="object-contain"
              src="/images/bhc-logo.png"
              alt=""
            />
            <div className="font-minecraft-bold ml-3">120 BHC</div>
          </div>
        </div>
      );
    }
  } else {
    return <></>;
  }
};

export default ItemCard;
