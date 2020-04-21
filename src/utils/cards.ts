export function isValidCard(card: string) {
  const pattern = new RegExp("^(([A, K, Q, J, 2,3,4,5,6,7,8,9])|(10))[H,D,C,S]$")
  return pattern.test(card);
}