const { sum, subt } = require("../lib/calculator");

describe("test cases for sum", () => {
  it("should sum 2 and 2 and the result must be 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  it("should sum 2 and 2 even if one of them is a string and the result must be 4", () => {
    expect(sum("2", "2")).toBe(4);
  });

  it("should throw an error if NaN is provided to the method", () => {
    expect(() => {
      sum("", 2);
    }).toThrowError();

    expect(() => {
      sum([2, 2]);
    }).toThrowError();

    expect(() => {
      sum({});
    }).toThrowError();

    expect(() => {
      sum();
    }).toThrowError();
  });
});

describe("test cases for subt", () => {
  it("should subt 2 and 2 and the result must be 4", () => {
    expect(subt(2, 2)).toBe(0);
  });

  it("should subt 2 and 2 even if one of them is a string and the result must be 4", () => {
    expect(subt("2", "2")).toBe(0);
  });

  it("should throw an error if NaN is provided to the method", () => {
    expect(() => {
      subt("", 2);
    }).toThrowError();

    expect(() => {
      subt([2, 2]);
    }).toThrowError();

    expect(() => {
      subt({});
    }).toThrowError();

    expect(() => {
      subt();
    }).toThrowError();
  });
});
