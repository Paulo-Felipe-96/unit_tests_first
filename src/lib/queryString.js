module.exports = function queryString(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("Invalid type");
  }

  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};
