import Auto from "../../models/auto.js";

// @ts-ignore
let api = axios.create({
  baseURL: "http://bcw-gregslist.herokuapp.com/api/cars"
})


let _autos = [
  new Auto({
    make: "Honda",
    model: "Accord",
    year: 1985,
    id: "",
    price: 1500,
    description: "Like New *** Rebuilt Engine",
    img: "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/17q4/692997/2018-honda-accord-sport-15t-manual-review-car-and-driver-photo-698625-s-original.jpg"
  })
]

export default class AutosService {
  addAuto(formData, fnToRunOnSuccess) {
    //send formData to api server
    //wait for server to respond
    //when server responds, handle response
    if (!formData) {
      throw new Error("you must supply form data")
    }
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }

    api.post('', formData)
      .then(res => {
        let newAuto = new Auto(res.data)
        _autos.push(newAuto)
        //tell me via a callback
        fnToRunOnSuccess()
      })
      .catch(err => console.log(err))

  }

  getAutos() {
    api.get('').then(res => {
      _autos = res.data.data.map(item => new Auto(item))

    }).catch(err => console.log(err))
  }
}