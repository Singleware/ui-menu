"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Element_1;
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const JSX = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
const stylesheet_1 = require("./stylesheet");
/**
 * Menu option element.
 */
let Element = Element_1 = class Element extends Control.Element {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        if (!globalThis.document.head.contains(Element_1.globalStyles)) {
            JSX.append(globalThis.document.head, Element_1.globalStyles);
        }
    }
    /**
     * Gets the selected state.
     */
    get selected() {
        return this.hasAttribute('selected');
    }
    /**
     * Sets the selected state.
     */
    set selected(state) {
        this.updatePropertyState('selected', state);
    }
    /**
     * Gets the disabled state.
     */
    get disabled() {
        return this.hasAttribute('disabled');
    }
    /**
     * Sets the disabled state.
     */
    set disabled(state) {
        this.tabIndex = state ? -1 : 0;
        this.updatePropertyState('disabled', state);
        this.updateChildrenState('disabled', state);
    }
};
/**
 * Global styles element.
 */
Element.globalStyles = JSX.create("style", { type: "text/css" }, new stylesheet_1.Stylesheet().toString());
__decorate([
    Class.Public()
], Element.prototype, "selected", null);
__decorate([
    Class.Public()
], Element.prototype, "disabled", null);
__decorate([
    Class.Private()
], Element, "globalStyles", void 0);
Element = Element_1 = __decorate([
    JSX.Describe('swe-menu-option'),
    Class.Describe()
], Element);
exports.Element = Element;
