import AutosService from "./autos-service.js";

let _autosService = new AutosService()


export default class AutosController {
  constructor() {

  }

  showAutos() {
    console.log("autobots assemble")
    let autos = _autosService.getAutos()
    let template = `
      <button class="btn btn-primary" onclick="">Clear Results</button>
    `

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


  addAuto(event) {
    event.preventDefault();//prevents page from reloading
    let form = event.target //element that triggers the event
    let formData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      miles: form.miles.value,
      price: form.price.value,
      description: form.description.value,
      img: form.img.value
    }
    _autosService.addAuto(formData)
    this.showAutos()
    form.reset()
  }
}