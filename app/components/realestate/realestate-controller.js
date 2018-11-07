import realEstateService from "./realestate-service.js";

let _realEstateService = new realEstateService()


export default class realEstateController {
  constructor() {

  }

  showrealEstate() {
    let realEstate = _realEstateService.getrealEstate()
    let template = `
      <button class="btn btn-primary" onclick="app.controllers.realestateController.clearResults()">Clear Results</button>
    `

    realEstate.forEach(realEstate => {
      template += `
        <div class="col card">
        <img src="${realEstate.img}">
        <h5>${realEstate.neighborhood} - ${realEstate.size} - ${realEstate.yearbuilt}</h5>
        <p>Price:${realEstate.price}</p>
        </div>`
    })
    document.getElementById('main-content').innerHTML = template
  }
  clearResults() {
    document.getElementById('main-content').innerHTML = '';
  }

  addrealEstate(event) {
    event.preventDefault();//prevents page from reloading
    let form = event.target //element that triggers the event
    let formData = {
      neighborhood: form.neighborhood.value,
      size: form.size.value,
      yearbuilt: form.yearbuilt.value,
      rooms: form.rooms.value,
      price: form.price.value,
      description: form.description.value,
      img: form.img.value
    }
    _realEstateService.addrealEstate(formData)
    this.showrealEstate()
    form.reset()
  }
}