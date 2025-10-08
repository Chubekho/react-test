export const truncateTitle = (string, length) => {
  if (typeof string !== "string") return "";
  if (string.length <= length) return string;
  return string.slice(0, length) + "…";
};
