import JobsService from "./jobs-service.js";

let _JobsService = new JobsService()


export default class JobsController {
  constructor() {

  }

  showJobs() {
    let Jobs = _JobsService.getJobs()
    let template = `
      <button class="btn btn-primary" onclick="">Clear Results</button>
    `

    Jobs.forEach(Jobs => {
      template += `
        <div class="col card">
        <img src="${Jobs.img}">
        <h5>${Jobs.type} - ${Jobs.hours} - ${Jobs.days}</h5>
        <p>Requirements:${Jobs.requirements}</p>
        </div>`
    })
    document.getElementById('main-content').innerHTML = template
  }

  addJobs(event) {
    event.preventDefault();//prevents page from reloading
    let form = event.target //element that triggers the event
    let formData = {
      type: form.type.value,
      hours: form.hours.value,
      days: form.days.value,
      requirements: form.requirements.value,
      salary: form.salary.value,
      description: form.description.value,
      img: form.img.value
    }
    _JobsService.addJobs(formData)
    this.showJobs()
    form.reset()
  }
}