import AutosService from "./autos-service.js";

let _autosService = new AutosService()


export default class AutosController {
  constructor() {
    console.log("DID IT WORK?")
  }

  showAutos() {
    console.log("autobots assemble")
    let autos = _autosService.getAutos()
    let template = ""

  }

}