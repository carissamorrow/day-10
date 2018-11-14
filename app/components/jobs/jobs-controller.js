import JobsService from "./jobs-service.js";

let _JobsService = new JobsService()


export default class JobsController {
  constructor() {
    _JobsService.getJobs(this.showJobs)
  }

  showJobs() {
    let Jobs = _JobsService._Job
    let template = `
      <button class="btn btn-primary" onclick="app.controllers.JobsController.clearResults()">Clear Results</button>
    `
    Jobs.forEach(Jobs => {
      template += `
        <div class="col-md-8 card">
        <h5>${Jobs.company} - ${Jobs.jobTitle} - ${Jobs.hours}</h5>
        <p>Rates:${Jobs.rate}</p>
        </div>`
    })
    document.getElementById('main-content').innerHTML = template
  }
  clearResults() {
    document.getElementById('main-content').innerHTML = '';
  }

  addJobs(event) {
    event.preventDefault();//prevents page from reloading
    let form = event.target //element that triggers the event
    let formData = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,

    }
    _JobsService.addJobs(formData, this.showJobs)
    form.reset()
  }
  destroyAuto(id) {
    _JobsService.destroyJobs(id, this.showJobs)
  }
}