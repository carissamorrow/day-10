export default class Auto {
  constructor({ make, model, year, id, price, description, img }) {
    if (!make || !model || !year || !id || !price || !description) {
      throw new Error("Invalid Auto Creation")
    }
    this.id = id
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.description = description
    this.imgUrl = img
  }
}