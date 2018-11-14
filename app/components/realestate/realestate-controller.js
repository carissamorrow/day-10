import realEstateService from "./realestate-service.js";

let _realEstateService = new realEstateService()


export default class realEstateController {
  constructor() {
    _realEstateService.getrealEstate(this.showrealEstate)
  }

  showrealEstate() {
    let realEstate = _realEstateService.homes
    let template = `
      <button class="btn btn-primary" onclick="app.controllers.realestateController.clearResults()">Clear Results</button>
    `
    realEstate.forEach(realEstate => {
      template += `
        <div class="col-sm-3 card">
          <div class="">
        <img class="card-img-top" src="${realEstate.img}">
        <div class="card-body">
        <h5 class="card-title">${realEstate.bathrooms} - ${realEstate.bedrooms} - ${realEstate.description}</h5>
         <div class="card-text">
        <p>Price:${realEstate.price}</p>
        </div>
        <i class="fa fa-fw fa-trash action muted" onclick="app.controllers.autosController.destroyAuto('${realEstate._id}')"></i>
         </div>
        </div>
        </div>
        `
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
      _id: form._id.value,
      bathrooms: form.bathrooms.value,
      bedrooms: form.bedrooms.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    _realEstateService.addrealEstate(formData, this.showrealEstate)
    form.reset()
  }
  destroyAuto(id) {
    _realEstateService.destroyrealEstate(id, this.showrealEstate)
  }
}