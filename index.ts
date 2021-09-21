import { ImbaElement } from "imba/index.imba";

// Technique in this file based on: https://github.com/lit/lit/blob/main/packages/reactive-element/src/reactive-controller.ts

export class Controller {
  host: ControllerHost;

  constructor(host: ControllerHost) {
    this.host = host;
    host.addController(this);
  }

  mount = () => {};
  unmount = () => {};
  render = () => {};

  requestRender = () => {
    this.host.render();
  };
}

export class ControllerHost extends ImbaElement {
  controllers: Controller[] = [];
  addController(controller: Controller) {
    this.controllers.push(controller);
  }
  removeController(controller: Controller) {
    const index = this.controllers.indexOf(controller);
    if (index >= 0) this.controllers.splice(index, 1);
  }
  render() {
    for (let controller of this.controllers) {
      controller.render();
    }
  }
  mount() {
    for (let controller of this.controllers) {
      controller.mount();
    }
    return this;
  }
  unmount() {
    for (let controller of this.controllers) {
      controller.unmount();
    }
    return this;
  }
}
