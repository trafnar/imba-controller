"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.ControllerHost = exports.Controller = exports.ImbaElement = void 0;
// @ts-expect-error
var index_imba_1 = require("imba/index.imba");
// @ts-expect-error
var index_imba_2 = require("imba/index.imba");
__createBinding(exports, index_imba_2, "ImbaElement");
// Technique in this file based on: https://github.com/lit/lit/blob/main/packages/reactive-element/src/reactive-controller.ts
var Controller = /** @class */ (function () {
    function Controller(host) {
        var _this = this;
        this.mount = function () { };
        this.unmount = function () { };
        this.render = function () {
            _this.host.render();
        };
        this.host = host;
        host.addController(this);
    }
    return Controller;
}());
exports.Controller = Controller;
var ControllerHost = /** @class */ (function (_super) {
    __extends(ControllerHost, _super);
    function ControllerHost() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.controllers = [];
        return _this;
    }
    ControllerHost.prototype.addController = function (controller) {
        this.controllers.push(controller);
    };
    ControllerHost.prototype.removeController = function (controller) {
        var index = this.controllers.indexOf(controller);
        if (index >= 0)
            this.controllers.splice(index, 1);
    };
    ControllerHost.prototype.mount = function () {
        for (var _i = 0, _a = this.controllers; _i < _a.length; _i++) {
            var controller = _a[_i];
            controller.mount();
        }
    };
    ControllerHost.prototype.unmount = function () {
        for (var _i = 0, _a = this.controllers; _i < _a.length; _i++) {
            var controller = _a[_i];
            controller.unmount();
        }
    };
    return ControllerHost;
}(index_imba_1.ImbaElement));
exports.ControllerHost = ControllerHost;
