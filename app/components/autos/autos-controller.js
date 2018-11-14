import AutosService from "./autos-service.js";

let _autosService = new AutosService()


export default class AutosController {
  constructor() {

  }

  showAutos() {
    console.log("autobots assemble")
    let autos = _autosService.getAutos()
    let template = `
      <button class="btn btn-primary" onclick="app.controllers.autosController.clearResults()">Clear Results</button>
    `

    autos.forEach(auto => {
      template += `
        <div class="col card">
        <img src="${auto.img}">
        <h5>${auto.make} - ${auto.model} - ${auto.year}</h5>
        <p>Price:${auto.price}</p>
        </div>`
    })
    document.getElementById('main-content').innerHTML = template
  }
  clearResults() {
    document.getElementById('main-content').innerHTML = '';
  }

  addAuto(event) {
    event.preventDefault();//prevents page from reloading
    let form = event.target //element that triggers the event
    let formData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    _autosService.addAuto(formData, this.showAutos)
    form.reset()
  }

}