import { isValidCard } from './cards';

export function areAllCardsValid(values: string[]) {
  const validValues = values.filter(v => v.length && isValidCard(v));
  return validValues.length === values.length;
}

export function getFormValues(form: HTMLFormElement) {
  const values = [...form.elements]
    .filter(e => e instanceof HTMLInputElement && e.value.length)
    .map(e => (e as HTMLInputElement).value);
  return {
    deck: values.slice(0, values.length - 1),
    rotationCard: values[values.length - 1]
  }
}

export function hasDuplicates(values: string[]) {
  return (new Set(values)).size !== values.length;
}
