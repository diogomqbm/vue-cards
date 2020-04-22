export function getPageTitle(): string {
  if (window.location.pathname.includes('new')) {
    return "Cards";
  }
  if (window.location.pathname.includes('deck')) {
    return "Ordered Pile";
  }
  return "Page not found";
}

export function getIdFromPath(): string {
  const path = window.location.pathname.split('/');
  return path[path.length - 1];
}