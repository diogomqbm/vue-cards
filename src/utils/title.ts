export default function getPageTitle(): string {
  if (window.location.pathname.includes('new')) {
    return "Cards";
  }
  if (window.location.pathname.includes('deck')) {
    return "Ordered Pile";
  }
  return "Page not found";
}