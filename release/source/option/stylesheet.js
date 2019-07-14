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
 * Menu option stylesheet class.
 */
let Stylesheet = class Stylesheet extends OSS.Stylesheet {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        /**
         * Menu option styles.
         */
        this.option = this.select('swe-menu-option');
        /**
         * Hover option styles.
         */
        this.hoverOption = this.select('swe-menu-option:hover');
        /**
         * Focus option styles.
         */
        this.focusOption = this.select('swe-menu-option:focus');
        /**
         * Disabled option styles.
         */
        this.disabledOption = this.select('swe-menu-option[disabled]');
        /**
         * Disabled selection styles.
         */
        this.disabledSelection = this.select('swe-menu-option[disabled][selection]');
        /**
         * Selected option styles.
         */
        this.selectedOption = this.select('swe-menu-option[selected]');
        this.option.display = 'block';
        this.option.paddingTop = 'var(--swe-menu-option-padding-top, 0.5rem)';
        this.option.paddingRight = 'var(--swe-menu-option-padding-right, 0.5rem)';
        this.option.paddingBottom = 'var(--swe-menu-option-padding-bottom, 0.5rem)';
        this.option.paddingLeft = 'var(--swe-menu-option-padding-left, 0.5rem)';
        this.option.whiteSpace = 'nowrap';
        this.hoverOption.backgroundColor = 'var(--swe-menu-option-hover-background-color, hsl(0, 0%, 95%))';
        this.focusOption.outline = '0';
        this.focusOption.backgroundColor = 'var(--swe-menu-option-focus-background-color, hsl(0, 0%, 92.5%))';
        this.disabledOption.color = 'var(--swe-menu-option-disabled-text-color, hsl(0, 0%, 75%))';
        this.disabledSelection.backgroundColor = 'var(--swe-menu-option-background-color, hsl(0, 0%, 95%))';
        this.selectedOption.backgroundColor = 'var(--swe-menu-option-selected-background-color, hsl(0, 0%, 90%))';
    }
};
__decorate([
    Class.Private()
], Stylesheet.prototype, "option", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "hoverOption", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "focusOption", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "disabledOption", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "disabledSelection", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "selectedOption", void 0);
Stylesheet = __decorate([
    Class.Describe()
], Stylesheet);
exports.Stylesheet = Stylesheet;
