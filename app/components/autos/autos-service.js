import Auto from "../../models/auto.js";

let _autos = [new Auto("Honda", "Accord", 1985, 200000, 1500, "Like New *** Rebuilt Engine")]

export default class AutosService {
  constructor() {
    console.log("autos service")
  }


  getAutos() {
    return JSON.parse(JSON.stringify(_autos))
  }
}