export default class Auto {
  constructor(make, model, year, miles, price, description, img) {
    if (!make || !model || !year || !miles || !price || !description) {
      throw new Error("Invalid Auto Creation")
    }
    this.make = make
    this.model = model
    this.year = year
    this.miles = miles
    this.price = price
    this.description = description
    this.img = img
  }
}