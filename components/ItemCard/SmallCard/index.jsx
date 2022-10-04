const SmallCard = ({ flag }) => {
  if (flag === "bhl") {
    return (
      <div className="rounded-lg border-3 border-ash w-36 h-44 cursor-pointer">
        <div className="flex flex-col m-3">
          <img
            className="object-contain"
            width={25}
            src="/images/filter-btn-selected.svg"
            alt=""
          />
          <div className="flex flex-col items-center mt-2">
            <img
              className="object-contain"
              width={70}
              src="/images/bhl-logo.png"
              alt=""
            />
            <div className="mx-1 text-ash opacity-50 text-lg">BHL</div>
          </div>
        </div>
      </div>
    );
  } else if (flag === "bba") {
    return (
      <div className="rounded-lg border-3 border-ash w-36 h-44 cursor-pointer opacity-30">
        <div className="flex flex-col m-3">
          <img
            className="object-contain"
            width={25}
            src="/images/filter-btn-no-select.png"
            alt=""
          />
          <div className="flex flex-col items-center mt-2">
            <img
              className="object-contain"
              width={70}
              src="/images/comingsoon.png"
              alt=""
            />
            <div className="mx-1 text-ash opacity-50 text-lg">BBA</div>
          </div>
        </div>
      </div>
    );
  }
};

export default SmallCard;
