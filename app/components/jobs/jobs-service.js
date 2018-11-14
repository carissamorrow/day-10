import Jobs from "../../models/Jobs.js";

// @ts-ignore
let api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/jobs"
})

/**@type {Array<Jobs>} */

let _Jobs = []

function handleError(err) {
  throw new Error(err)
}

export default class JobsService {

  destroyJobs(id, showJobs) {
    api.delete(id)
      .then(res => {
        this.getJobs(showJobs)
      })
      .catch(handleError)
  }

  addJobs(formData, fnToRunOnSuccess) {
    // let newJobs = new Jobs(formData)
    // _Jobs.push(newJobs)

    if (!formData) {
      throw new Error("you must supply form data")
    }
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    api.post('', formData)
      .then(res => {
        this.getJobs(fnToRunOnSuccess)
      })
      .catch(err => console.log(err))

  }

  getJobs(fnToRunOnSuccess) {
    // return JSON.parse(JSON.stringify(_Jobs))
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("bad function")
    }
    api.get('')
      .then(res => {
        _Jobs = res.data.data.map(item => new Jobs(item))
        fnToRunOnSuccess()
      })
      .catch(err => console.log(err))

  }
  get _Job() {
    return _Jobs
  }
}