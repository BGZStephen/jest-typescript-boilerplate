import { main } from "."

describe("index", () => {
  describe("main", () => {
    it("Returns 42", () => {
      expect(main()).toEqual(42)
    })
  })
})