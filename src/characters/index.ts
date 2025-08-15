import { hiteshCharacter } from "./hitesh";
import { piyushCharacter } from "./piyush";

export const characters = {
  hitesh: hiteshCharacter,
  piyush: piyushCharacter,
};

export type CharacterSlug = keyof typeof characters;

export function getCharacterPrompt(slug: string): string | null {
  const character = characters[slug as CharacterSlug];
  return character ? character.prompt : null;
}
