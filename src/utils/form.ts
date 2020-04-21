import { isValidCard } from './cards';

export function areAllCardsValid(values: string[]) {
  const validValues = values.filter(v => v.length && isValidCard(v));
  return validValues.length === values.length;
}

export function hasDuplicates(values: string[]) {
  return (new Set(values)).size !== values.length;
}