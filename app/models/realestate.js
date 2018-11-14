export default class realEstate {
  constructor({ _id, bathrooms, bedrooms, price, description, imgUrl }) {
    if (!_id || !bedrooms || !price) {
      throw new Error("Invalid Home Creation")
    }

    this._id = _id
    this.bathrooms = bathrooms
    this.bedrooms = bedrooms
    this.price = price
    this.description = description || "no description"
    this.img = imgUrl
  }
}