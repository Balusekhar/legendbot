"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type CharacterData = {
  title: string;
  src: string;
  description: string;
  slug: string;
};

type CharacterContextType = {
  characterData: CharacterData | null;
  setCharacterData: (data: CharacterData | null) => void;
};

const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined
);

export function CharacterProvider({ children }: { children: ReactNode }) {
  const [characterData, setCharacterData] = useState<CharacterData | null>(
    null
  );

  return (
    <CharacterContext.Provider value={{ characterData, setCharacterData }}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacter() {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }
  return context;
}
