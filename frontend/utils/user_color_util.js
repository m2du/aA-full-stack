const COLORS = [
  "#55BD9C", "#64CD72", "#3498DB", "#9B59B6",
  "#EB4F64", "#E67D23", "#E74C3C", "#992D22",
  "#A84315", "#713C8A", "#206593", "#38806A"
];

export const getUserColor = (userTag) => (
  COLORS[parseInt(userTag) % COLORS.length]
);