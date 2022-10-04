import { useEffect, useState } from "react";
import styles from "../../styles/Marketplace.module.css";

const MultiplierCard = ({ item }) => {
  const { cost, description, id, imgTag, multiplier, title, type } = item;
  const [tier, setTier] = useState("");
  const [starTag, setStarTag] = useState("");
  const [starSize, setStarSize] = useState(0);
  const [borderColor, setBorderColor] = useState("");
  const [headerMargin, setHeaderMargin] = useState(0);
  const [isInfo, setIsInfo] = useState(false);

  useEffect(() => {
    if (id.startsWith("bronze")) {
      setTier("Bronze");
      setStarTag("bronze-star");
      setStarSize(20);
      setBorderColor("bronze");
      setHeaderMargin(16);
    } else if (id.startsWith("silver")) {
      setTier("Silver");
      setStarTag("silver-stars");
      setStarSize(30);
      setBorderColor("silver");
      setHeaderMargin(16);
    } else if (id.startsWith("gold")) {
      setTier("Gold");
      setStarTag("gold-stars");
      setStarSize(40);
      setBorderColor("gold");
      setHeaderMargin(16);
    } else if (id.startsWith("diamond")) {
      setTier("Diamond");
      setStarTag("black-diamonds");
      setStarSize(40);
      setBorderColor("black");
      setHeaderMargin(12);
    }
  }, []);

  const toggleInfo = () => {
    setIsInfo(!isInfo);
  };

  return (
    <div
      className={`w-72 h-96 m-6 border-3 border-${borderColor} rounded cursor-pointer drop-shadow-lg ${styles.itemCard} relative`}
      id={`${styles["item-card"]}`}
      multiplier={multiplier}
      type={type}
      description={description}
    >
      <span className={`flex justify-center space-x-${headerMargin} mt-3`}>
        <div className="font-minecraft-bold text-bold">BHL</div>
        <div></div>
        <div className={`flex`}>
          <img
            className={`object-contain`}
            width={starSize}
            src={`/images/${starTag}.png`}
            alt=""
          />
          <div className="ml-3">{tier}</div>
        </div>
      </span>
      <div className={`flex flex-col space-y-6 w-1/2 mx-auto mt-9 `}>
        <div id={`${styles["item-image"]}`}>
          <img src={`/images/multipliers/${imgTag}.png`} alt={imgTag} />
        </div>
        <img
          src="/images/r1-deliverables/Shadows/saves and goals/shadow-assists.svg"
          alt=""
        />
      </div>
      <div className="mt-6 text-left ml-6">{title}</div>
      <div className="ml-6 mt-3 flex items-center">
        <img
          width={33}
          classSName="object-contain"
          src="/images/bhc-logo.png"
          alt=""
        />
        <div className="font-minecraft-bold ml-3">{cost} BHC</div>
      </div>
      <div
        className="flex justify-end mr-3 mt-3 cursor-pointer"
        onClick={toggleInfo}
      >
        <img
          width={20}
          src="/images/multipliers/bhs-info-hover-v1.png"
          alt="more info"
        />
      </div>
      {isInfo && (
        <div
          className={`absolute bg-ash w-72 h-80 top-16 rounded ${
            styles.detailCard 
          }`}
        >
          <div
            className="flex float-right m-3 cursor-pointer"
            onClick={toggleInfo}
          >
            <img
              width={20}
              src="/images/multipliers/bhs-info-hover-v1.png"
              alt="more info"
            />
          </div>
          <div className="text-pastel text-lg mt-3 text-left mx-6">{title}</div>
          <div className="text-pastel text-md mt-3 text-left mx-6">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiplierCard;
