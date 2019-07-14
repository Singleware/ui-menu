"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const JSX = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Menu component class.
 */
let Component = class Component extends Control.Component {
    /**
     * Default constructor.
     * @param properties Initial properties.
     * @param children Initial children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Element instance.
         */
        this.skeleton = (JSX.create("swe-menu", { class: this.properties.class, slot: this.properties.slot, disabled: this.properties.disabled, selectable: this.properties.selectable, orientation: this.properties.orientation }));
        this.skeleton.addEventListener('renderoption', this.renderOptionHandler.bind(this));
        this.skeleton.addEventListener('rendergroup', this.renderGroupHandler.bind(this));
    }
    /**
     * Render option, event handler.
     * @param event Event information.
     */
    renderOptionHandler(event) {
        if (this.properties.onRenderOption) {
            event.detail.element = this.properties.onRenderOption(event.detail);
        }
    }
    /**
     * Render group, event handler.
     * @param event Event information.
     */
    renderGroupHandler(event) {
        if (this.properties.onRenderGroup) {
            event.detail.element = this.properties.onRenderGroup(event.detail);
        }
    }
    /**
     * Gets the element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Gets the selected option value.
     */
    get value() {
        return this.skeleton.value;
    }
    /**
     * Sets the selected option value.
     */
    set value(value) {
        this.skeleton.value = value;
    }
    /**
     * Gets the selectable state.
     */
    get selectable() {
        return this.skeleton.selectable;
    }
    /**
     * Sets the selectable state.
     */
    set selectable(state) {
        this.skeleton.selectable = state;
    }
    /**
     * Gets the disabled state.
     */
    get disabled() {
        return this.skeleton.disabled;
    }
    /**
     * Sets the disabled state.
     */
    set disabled(state) {
        this.skeleton.disabled = state;
    }
    /**
     * Gets the orientation.
     */
    get orientation() {
        return this.skeleton.orientation;
    }
    /**
     * Sets the orientation.
     */
    set orientation(value) {
        this.skeleton.orientation = value;
    }
    /**
     * Adds the specified group into the menu.
     * @param name Group name.
     * @param label Group label.
     * @returns Returns true when the group has been added, false otherwise.
     */
    addGroup(name, label) {
        return this.skeleton.addGroup(name, label);
    }
    /**
     * Adds the specified option into the menu.
     * @param value Option value.
     * @param label Option label.
     * @param group Option group.
     * @returns Returns true when the option has been added, false otherwise.
     */
    addOption(value, label, group) {
        return this.skeleton.addOption(value, label, group);
    }
    /**
     * Remove all options that corresponds to the specified option value.
     * @param value Option value.
     * @returns Returns true when some option was removed or false otherwise.
     */
    removeOption(value) {
        return this.skeleton.removeOption(value);
    }
    /**
     * Clear all options.
     */
    clearOptions() {
        this.skeleton.clearOptions();
    }
};
__decorate([
    Class.Private()
], Component.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Component.prototype, "renderOptionHandler", null);
__decorate([
    Class.Private()
], Component.prototype, "renderGroupHandler", null);
__decorate([
    Class.Public()
], Component.prototype, "element", null);
__decorate([
    Class.Public()
], Component.prototype, "value", null);
__decorate([
    Class.Public()
], Component.prototype, "selectable", null);
__decorate([
    Class.Public()
], Component.prototype, "disabled", null);
__decorate([
    Class.Public()
], Component.prototype, "orientation", null);
__decorate([
    Class.Public()
], Component.prototype, "addGroup", null);
__decorate([
    Class.Public()
], Component.prototype, "addOption", null);
__decorate([
    Class.Public()
], Component.prototype, "removeOption", null);
__decorate([
    Class.Public()
], Component.prototype, "clearOptions", null);
Component = __decorate([
    Class.Describe()
], Component);
exports.Component = Component;
