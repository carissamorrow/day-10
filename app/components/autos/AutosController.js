
import AutosService from "./autos-service.js";


export default class AutosController {
  constructor() {
    console.log("DID IT WORK?")
    this.autosService = new AutosService()
  }
}