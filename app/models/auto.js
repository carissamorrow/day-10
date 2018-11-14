export default class Auto {
  constructor({ make, model, year, _id, price, description, imgUrl }) {
    if (!make || !model || !year || !_id || !price) {
      throw new Error("Invalid Auto Creation")
    }

    this._id = _id
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.description = description
    this.imgUrl = imgUrl
  }
}