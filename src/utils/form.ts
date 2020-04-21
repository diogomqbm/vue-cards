import { isValidCard } from './cards';

export function getValuesFromForm(form: HTMLFormElement) {
  const formInputs = [...form.elements].filter(item => item instanceof HTMLInputElement);
  const values = formInputs.map(item => (item as HTMLInputElement).value);
  const nonEmptyValues = values.filter(v => v.length);
  return nonEmptyValues;
}

export function areAllCardsValid(values: string[]) {
  const validValues = values.filter(v => v.length && isValidCard(v));
  return validValues.length === values.length;
}

export function hasDuplicates(values: string[]) {
  return (new Set(values)).size !== values.length;
}