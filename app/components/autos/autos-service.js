import Auto from "../../models/auto.js";

// @ts-ignore
let api = axios.create({
  baseURL: "http://bcw-gregslist.herokuapp.com/api/cars"
})

/**@type {Array<Auto>} */
let _autos = []


function handleError(err) {
  throw new Error(err)
}

export default class AutosService {
  destroyAuto(id, showAutos) {
    api.delete(id)
      .then(res => {
        this.getAutos(showAutos)
      })
      .catch(handleError)
  }
  addAuto(formData, showAutos) {
    //send formData to api server
    //wait for server to respond
    //when server responds, handle response
    if (!formData) {
      throw new Error("you must supply form data")
    }
    if (typeof showAutos != 'function') {
      throw new Error("You must supply a success function")
    }

    api.post('', formData)
      .then(res => {
        //tell me via a callback
        this.getAutos(showAutos)
      })
      .catch(err => console.log(err))

  }

  getAutos(showAutos) {
    // if (typeof fnToRunOnSuccess != 'function') {
    //   throw new Error("bad function")
    // }

    api.get('').then(res => {
      _autos = res.data.data.map(item => new Auto(item))
      showAutos()
    })
      .catch(err => console.log(err))

  }
  //sync call
  get autos() {
    return _autos
  }
}