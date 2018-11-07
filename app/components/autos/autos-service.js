import Auto from "../../models/auto.js";

let _autos = [
  new Auto({
    make: "Honda",
    model: "Accord",
    year: 1985,
    miles: 200000,
    price: 1500,
    description: "Like New *** Rebuilt Engine",
    img: "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/17q4/692997/2018-honda-accord-sport-15t-manual-review-car-and-driver-photo-698625-s-original.jpg"
  })
]

export default class AutosService {
  addAuto(formData) {
    let newAuto = new Auto(formData)
    _autos.push(newAuto)
  }
  constructor() {

  }


  getAutos() {
    return JSON.parse(JSON.stringify(_autos))
  }
}