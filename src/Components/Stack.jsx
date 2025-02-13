"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

const fakeData = [
  { id: 1, name: "Alice Johnson", designation: "Software Engineer", content: "Alice is a highly skilled software engineer with 5 years of experience." },
  { id: 2, name: "Bob Smith", designation: "Product Manager", content: "Bob leads product teams with a strong vision and strategic planning." },
  { id: 3, name: "Charlie Brown", designation: "UX Designer", content: "Charlie specializes in crafting intuitive and user-friendly designs." },
];

export const CardStack = ({ offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 12;
  const SCALE_FACTOR = scaleFactor || 0.1;
  const [cards, setCards] = useState(fakeData);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 3000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-[#eff2fa] h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-400 shadow-black/[0.1] flex flex-col justify-between"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="font-normal text-[#46464e]">{card.content}</div>
          <div>
            <p className="text-[#07142b] font-medium">{card.name}</p>
            <p className="text-neutral-400 font-normal">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

