"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useCharacter } from "@/context/CharacterContext";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const router = useRouter();
    const { setCharacterData } = useCharacter();
    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-2xl relative bg-white shadow-lg overflow-hidden h-80 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
          hovered === index && "shadow-xl transform -translate-y-2"
        )}>
        <img
          src={card.src || "/placeholder.svg"}
          alt={card.title}
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end py-8 px-6 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}>
          <div className="text-white">
            <div className="text-2xl md:text-3xl font-bold mb-3">
              {card.title}
            </div>
            {card.description && (
              <div className="text-sm md:text-base text-gray-200 leading-relaxed">
                {card.description}
              </div>
            )}
            <button
              onClick={() => {
                setCharacterData({
                  title: card.title,
                  src: card.src,
                  description: card.description,
                  slug: card.slug,
                });
                router.push(card.href);
              }}
              className="mt-4 bg-primary-red text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-red-dark transition-colors duration-300">
              Start Chatting
            </button>
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  description?: string;
  href: string;
  slug: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
