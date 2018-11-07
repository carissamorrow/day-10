import AutosController from "./components/autos/AutosController.js";

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