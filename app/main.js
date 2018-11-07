import AutosController from "./components/autos/autos-controller.js";
import RealestateController from "./components/realestate/realestate-controller.js";
import JobsController from "./components/Jobs/jobs-controller.js";

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController,
      realestateController: new RealestateController,
      JobsController: new JobsController
    }
  }
}

// @ts-ignore
window.app = new App()