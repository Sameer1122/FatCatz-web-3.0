import React from "react";
import FaqList from "./FaqLisst.jsx";

const dummyData = [
  {
    id: 1,
    qustion: "What is Fat Catz?",
    answer:
      " Fat Catz is an exclusive NFT project featuring 9,999 catz algorithmically generated from more than 250 traits, backed by a special benefits and utilities for holders. ",
  },
  {
    id: 2,
    qustion: "When does the sale start?",
    answer:
      " The exact time and date will be revealed soon, make sure to follow our social media and join our discord. Help us build the strongest community in NFT space! ",
  },
  {
    id: 3,
    qustion: "How can i buy a Fat Catz?",
    answer:
      " Download the Metamask extension for Google Chrome. Buy Ethereum (ETH) on an exchange like Coinbase, Binance, PayPal, etc, and send it to your Metamask ETH Wallet Public Address. Connect your Metamask Wallet to our website by clicking on the Chrome extension icon at the top-right of the browser (it looks like a Fox) while on our website. Click “Buy Now” on our website and approve the transaction on Metamask. ",
  },
  {
    id: 4,
    qustion: "What is $FAT token?",
    answer:
      " $FAT is a Governance token of the Fat Catz community. Owners will be able to earn a weekly passive income staking his Fat Catz. Staking will be rarity based. Rarest Catz will gain more $FAT. This token will be used in the Fat Catz ecosystem. ",
  },

  {
    id: 5,
    qustion: "Who is the team?",
    answer:
      "We have a very great team from serial entrepreneurs to top marketing expert and designers, NFT advisors and great community managers. Join our discord to meet us! ",
  },
  {
    id: 6,
    qustion: "What makes us different?",
    answer:
      " We've been working with some of the best artists and engaging with top developers over the past couple of months to create unique and authentic pieces of art. What makes this project really special is the mix of benefits and utilities behind it. Together we can write the history of Fat Catz!",
  },
];
const Faq = () => {
  return (
    <section className="w-9/12 mx-auto py-16" id="faq">
      <div className="pb-16 w-1/2 mx-auto">
        <h1 className="text-white font-bold text-2xl md:text-4xl text-center md:w-3/4 mx-auto  border-b-2 pb-4  border-pink-500">
          FAQ
        </h1>
      </div>
      {dummyData.map((data) => {
        return <FaqList key={data.id} data={data} />;
      })}
    </section>
  );
};

export default Faq;
