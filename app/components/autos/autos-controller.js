import AutosService from "./autos-service.js";

let _autosService = new AutosService()


export default class AutosController {
  constructor() {

  }

  showAutos() {
    console.log("autobots assemble")
    let autos = _autosService.getAutos()
    let template = ""

    autos.forEach(auto => {
      template += `
        <div class="col card">
        <img src="${auto.img}">
        <h5>${auto.make} - ${auto.model} - ${auto.year}</h5>
        <p>Price:${auto.price}</p>
        <p>Miles:${auto.miles}</p>
        </div>`
    })
    document.getElementById('main-content').innerHTML = template
  }

}