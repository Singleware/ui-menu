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
 * Menu stylesheet class.
 */
let Stylesheet = class Stylesheet extends OSS.Stylesheet {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        /**
         * Menu styles.
         */
        this.menu = this.select('swe-menu', 'swe-menu[orientation="column"]');
        /**
         * Column styles.
         */
        this.columnMenu = this.select('swe-menu', 'swe-menu[orientation="column"]');
        /**
         * Row styles.
         */
        this.rowMenu = this.select('swe-menu[orientation="row"]');
        this.menu.display = 'flex';
        this.menu.overflow = 'auto';
        this.menu.backgroundColor = 'var(--swe-menu-background-color, hsl(0, 0%, 100%))';
        this.menu.borderRadius = 'var(--swe-menu-border-radius, 0.25rem)';
        this.menu.border = 'var(--swe-menu-border-size, 0.0625rem) solid var(--swe-menu-border-color, hsl(0, 0%, 90%))';
        this.columnMenu.flexDirection = 'column';
        this.rowMenu.flexDirection = 'row';
        this.rowMenu.alignItems = 'center';
    }
};
__decorate([
    Class.Private()
], Stylesheet.prototype, "menu", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "columnMenu", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "rowMenu", void 0);
Stylesheet = __decorate([
    Class.Describe()
], Stylesheet);
exports.Stylesheet = Stylesheet;
