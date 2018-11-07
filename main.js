import AutosController from "./components/autos/autos-controller.js";

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController
      // RealEstatesController,
      // JobsController
    }
  }
}

// @ts-ignore
window.app = new App()