class App {
  constructor() {
    this.controllers = {
      autosController: new autosController
      // RealEstatesController,
      // JobsController
    }
  }
}

// @ts-ignore
window.app = new App()