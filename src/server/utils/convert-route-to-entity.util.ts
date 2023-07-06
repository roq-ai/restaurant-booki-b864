const mapping: Record<string, string> = {
  menus: 'menu',
  restaurants: 'restaurant',
  'table-reservations': 'table_reservation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
