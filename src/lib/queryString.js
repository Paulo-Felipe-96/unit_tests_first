module.exports = function queryString(obj) {
  if (typeof obj !== "object") {
    throw new TypeError("Invalid type");
  }

  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};
