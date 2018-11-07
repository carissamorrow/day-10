import Jobs from "../../models/Jobs.js";

let __Jobs = [
  new Jobs({
    type: "Construction",
    hours: "40 per week",
    days: 5,
    requirements: "college degree",
    salary: 25000,
    description: "Hard work but pays well!",
    img: "https://ubisafe.org/images/constructer-clipart-construction-person-3.jpg"
  })
]

export default class jobsService {
  addJobs(formData) {
    let newJobs = new Jobs(formData)
    _Jobs.push(newJobs)
  }
  constructor() {

  }


  getJobs() {
    return JSON.parse(JSON.stringify(_Jobs))
  }
}