"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const OSS = require("@singleware/oss");
/**
 * Menu label stylesheet class.
 */
let Stylesheet = class Stylesheet extends OSS.Stylesheet {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        /**
         * Menu label styles.
         */
        this.label = this.select('swe-menu-label');
        this.label.display = 'block';
        this.label.paddingTop = 'var(--swe-menu-option-padding-top, 0.5rem)';
        this.label.paddingRight = 'var(--swe-menu-option-padding-right, 0.5rem)';
        this.label.paddingBottom = 'var(--swe-menu-option-padding-bottom, 0.5rem)';
        this.label.paddingLeft = 'var(--swe-menu-option-padding-left, 0.5rem)';
        this.label.fontWeight = 'bold';
        this.label.textTransform = 'uppercase';
        this.label.color = 'var(--swe-menu-label-text-color, hsl(0, 0%, 35%))';
    }
};
__decorate([
    Class.Private()
], Stylesheet.prototype, "label", void 0);
Stylesheet = __decorate([
    Class.Describe()
], Stylesheet);
exports.Stylesheet = Stylesheet;
