const mapping: Record<string, string> = {
  games: 'game',
  leagues: 'league',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
