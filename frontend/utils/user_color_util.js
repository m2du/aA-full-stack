const COLORS = [
  "#c62828", "#ad1457", "#6a1b9a", "#4527a0",
  "#283593", "#1565c0", "#0277bd", "#00838f",
  "#00695c", "#2e7d32", "#558b2f", "#9e9d24",
  "#f9a825", "#ff8f00", "#ef6c00", "#d84315"
];

export const getUserColor = (userTag) => (
  COLORS[parseInt(userTag) % COLORS.length]
);