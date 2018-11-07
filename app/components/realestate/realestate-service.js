import realEstate from "../../models/realestate.js";

let _realestate = [
  new realEstate({
    neighborhood: "Georgetown",
    size: "1800 square feet",
    yearbuilt: 1985,
    rooms: 4,
    price: 235000,
    description: "Barely Lived In!",
    img: "https://www.recbc.ca/wp-content/uploads/april_photo3_new.jpg"
  })
]

export default class realEstateService {
  addrealEstate(formData) {
    let newrealEstate = new realEstate(formData)
    _realestate.push(newrealEstate)
  }
  constructor() {

  }


  getrealEstate() {
    return JSON.parse(JSON.stringify(_realestate))
  }
}