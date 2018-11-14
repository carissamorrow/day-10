export default class realEstate {
  constructor({ _id, bathrooms, bedrooms, price, description, imgUrl }) {
    if (!_id || !bathrooms || !bedrooms || !price || !description) {
      throw new Error("Invalid Auto Creation")
    }

    this._id = _id
    this.bathrooms = bathrooms
    this.bedrooms = bedrooms
    this.price = price
    this.description = description
    this.img = imgUrl
  }
}