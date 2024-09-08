function toTitleCase(str) {
  return str
    .toLowerCase() // SAIF KHAN => saif khan
    .split(" ") // ["saif", "khan"]
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1); // Saif Khan
    });
}

function ToSnakeCase(str) {
  return str.toLowerCase().split(" ").join("_");
}

module.exports = {
  toTitleCase,
  ToSnakeCase,
};
