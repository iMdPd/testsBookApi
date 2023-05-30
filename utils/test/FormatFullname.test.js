const formatFullname = require("../formatFullname");
const expect = require("chai").expect;

describe("formatFullname", () => {
  it("should retun error if no 'fullName' arg is given", () => {
    expect(formatFullname("")).to.equal("Error");
  });

  it("should retun error if 'fullName' arg is not a string", () => {
    expect(formatFullname(undefined)).to.equal("Error");
    expect(formatFullname(1)).to.equal("Error");
    expect(formatFullname([])).to.equal("Error");
    expect(formatFullname({})).to.equal("Error");
    expect(formatFullname(function () {})).to.equal("Error");
  });

  it("should retun error if 'fullName' arg is not proper", () => {
    expect(formatFullname("John")).to.equal("Error");
    expect(formatFullname("John Doe Second")).to.equal("Error");
  });

  it("should return capitalized name and lastname if 'fullName' arg letters have different sizes", () => {
    expect(formatFullname("johN DOE")).to.equal("John Doe");
    expect(formatFullname("AmAnDa dOe")).to.equal("Amanda Doe");
    expect(formatFullname("William Right")).to.equal("William Right");
    expect(formatFullname("WILSON BRAUN")).to.equal("Wilson Braun");
    expect(formatFullname("frank ocean")).to.equal("Frank Ocean");
  });
});
