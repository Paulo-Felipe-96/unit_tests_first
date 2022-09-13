const queryString = require("../lib/queryString");

it("should throw an error if not an object is provided to the method", () => {
  expect(() => {
    queryString("");
  }).toThrowError();
});

it("should return a string containing key and value provided to the method", () => {
  expect(queryString({ name: "paulo", idade: 26 })).toStrictEqual(
    "name=paulo&idade=26"
  );
});
