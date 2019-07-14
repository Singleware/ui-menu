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
 * Menu group stylesheet class.
 */
let Stylesheet = class Stylesheet extends OSS.Stylesheet {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        /**
         * Menu group styles.
         */
        this.group = this.select('swe-menu-group');
        /**
         * Group option styles.
         */
        this.groupOption = this.select('swe-menu-group>swe-menu-option');
        /**
         * Disabled group styles.
         */
        this.disabledGroupLabel = this.select('swe-menu-group[disabled]>swe-menu-label');
        this.group.display = 'block';
        this.groupOption.paddingLeft = 'calc(var(--swe-menu-option-padding-left, 0.5rem) * 2)';
        this.disabledGroupLabel.color = 'var(--swe-menu-label-disabled-text-color, hsl(0, 0%, 35%))';
    }
};
__decorate([
    Class.Private()
], Stylesheet.prototype, "group", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "groupOption", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "disabledGroupLabel", void 0);
Stylesheet = __decorate([
    Class.Describe()
], Stylesheet);
exports.Stylesheet = Stylesheet;
