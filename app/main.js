import AutosController from "./components/autos/autos-controller.js";
import RealestateController from "./components/realestate/realestate-controller.js";

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController,
      realestateController: new RealestateController
      // JobsController
    }
  }
}

// @ts-ignore
window.app = new App()