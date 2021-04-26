// @ts-expect-error
import { ImbaElement } from "imba/index.imba";

// @ts-expect-error
export { ImbaElement } from "imba/index.imba";

// Technique in this file based on: https://github.com/lit/lit/blob/main/packages/reactive-element/src/reactive-controller.ts

export class Controller {
  host: ImbaElement;

  constructor(host: ControllerHost) {
    this.host = host;
    host.addController(this);
  }

  mount = () => {};

  unmount = () => {};

  render = () => {
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

  mount() {
    for (let controller of this.controllers) {
      controller.mount();
    }
  }
  unmount() {
    for (let controller of this.controllers) {
      controller.unmount();
    }
  }
}
