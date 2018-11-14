import realEstate from "../../models/realestate.js";

// @ts-ignore
let api = axios.create({
  baseURL: "http://bcw-gregslist.herokuapp.com/api/houses"
})

/**@type {Array<realEstate>} */
let _realestate = []


function handleError(err) {
  throw new Error(err)
}

export default class realEstateService {

  destroyrealEstate(id, showrealEstate) {
    api.delete(id)
      .then(res => {
        this.getrealEstate(showrealEstate)
      })
      .catch(handleError)
  }

  addrealEstate(formData, fnToRunOnSuccess) {
    let newrealEstate = new realEstate(formData)
    _realestate.push(newrealEstate)
    if (!formData) {
      throw new Error("you must supply form data")
    }
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    api.post('', formData)
      .then(res => {
        this.getrealEstate(fnToRunOnSuccess)
      })
      .catch(err => console.log(err))

  }

  getrealEstate(fnToRunOnSuccess) {
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("bad function")
    }
    api.get('').then(res => {
      _realestate = res.data.data.map(item => new realEstate(item))
      fnToRunOnSuccess()
    })
      .catch(err => console.log(err))

  }
  get homes() {
    return _realestate
  }
}