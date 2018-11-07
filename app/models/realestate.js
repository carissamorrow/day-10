export default class realEstate {
  constructor({ neighborhood, size, yearbuilt, rooms, price, description, img }) {
    if (!neighborhood || !size || !yearbuilt || !rooms || !price || !description) {
      throw new Error("Invalid Auto Creation")
    }
    this.neighborhood = neighborhood
    this.size = size
    this.yearbuilt = yearbuilt
    this.rooms = rooms
    this.price = price
    this.description = description
    this.img = img
  }
}