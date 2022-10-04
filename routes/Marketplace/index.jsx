import styles from "../../styles/Marketplace.module.css";
import { useState, useEffect } from "react";
import ItemCard from "../../components/ItemCard";
import SmallCard from "../../components/ItemCard/SmallCard";
import { getMarketplaceItems } from "../../services/getMarketplaceItems";
import MultiplierCard from "../../components/MultiplierCard";
import Modal from "../../components/Modal";
import ConfirmationModal from "../../components/CheckoutModal/ConfirmationModal";

const Index = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getMarketplaceItems({
      cbSuccess: ({ data }) => {
        setItems(...data);
      },
      cbFailure: (err) => console.log(err),
    });
  }, []);

  return (
    <>
      <img
        src="/images/bhs-marketplace-header-v1.png"
        width={"100%"}
        alt="marketplace-banner"
      />
      <div className="flex flex justify-center mt-5">
        <div className="text-left mx-24 mt-6">
          <div className="border-t-2 border-slate w-80"></div>
          <div className="font-minecraft-bold text-lg opacity-90 my-3">
            LEAGUE
          </div>
          <div className="mt-3 flex space-x-4">
            <SmallCard flag="bhl" />
            <SmallCard flag="bba" />
          </div>
        </div>
        <div className="flex flex-wrap text-center">
          {items?.map((item) => {
            return <MultiplierCard item={item} />;
          })}
        </div>
      </div>
      <Modal />
      <ConfirmationModal />
    </>
  );
};

export default Index;
