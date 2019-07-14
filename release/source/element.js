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
const Group = require("./group");
const Option = require("./option");
const stylesheet_1 = require("./stylesheet");
/**
 * Menu element.
 */
let Element = Element_1 = class Element extends Control.Element {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        /**
         * Map of entity options by value.
         */
        this.optionsMap = {};
        /**
         * Map of element options by entity option.
         */
        this.optionElementMap = new WeakMap();
        /**
         * Map of entity group by name.
         */
        this.groupsMap = {};
        if (!globalThis.document.head.contains(Element_1.globalStyles)) {
            JSX.append(globalThis.document.head, Element_1.globalStyles);
        }
    }
    /**
     * Detaches all group elements.
     */
    detachGroups() {
        for (const name in this.groupsMap) {
            this.groupsMap[name].element.remove();
        }
    }
    /**
     * Detaches all option elements.
     */
    detachOptions() {
        for (const value in this.optionsMap) {
            for (const entity of this.optionsMap[value]) {
                entity.element.remove();
            }
        }
    }
    /**
     * Selects the specified option entity and option element.
     * @param entity Option entity.
     * @param element Option element.
     */
    selectOption(entity, element) {
        if (this.selectedElement) {
            this.selectedElement.selected = false;
        }
        this.selectedOption = entity;
        this.selectedElement = element;
        this.selectedElement.focus();
        if (this.selectable) {
            this.selectedElement.selected = true;
        }
    }
    /**
     * Unselects the current selected option element.
     */
    unselectOption() {
        if (this.selectedElement) {
            this.selectedElement.selected = false;
            this.selectedElement = void 0;
            this.selectedOption = void 0;
        }
    }
    /**
     * Option click, event handler.
     * @param entity Option entity.
     * @param element Option element.
     * @param event Event instance.
     */
    optionClickHandler(entity, element, event) {
        if (!this.disabled && !element.disabled) {
            this.selectOption(entity, element);
        }
    }
    /**
     * Option keydown, event handler.
     * @param entity Option entity.
     * @param element Option element.
     * @param event Event instance.
     */
    optionKeydownHandler(entity, element, event) {
        if (event.code === 'Enter') {
            if (!this.disabled && !element.disabled) {
                this.selectOption(entity, element);
            }
        }
        else {
            let selection;
            if (event.code === 'ArrowUp') {
                if (element.parentElement instanceof Element_1) {
                    selection = element.previousElementSibling || this.lastElementChild;
                }
                else if (element.parentElement instanceof Group.Element) {
                    if (element.previousElementSibling instanceof Group.Label.Element) {
                        selection = element.parentElement.previousElementSibling || this.lastElementChild;
                    }
                    else {
                        selection = element.previousElementSibling || this.lastElementChild;
                    }
                }
                if (selection instanceof Group.Element) {
                    selection = selection.lastElementChild;
                }
            }
            else if (event.code === 'ArrowDown') {
                if (element.parentElement instanceof Element_1) {
                    selection = element.nextElementSibling || this.firstElementChild;
                }
                else if (element.parentElement instanceof Group.Element) {
                    selection = element.nextElementSibling || element.parentElement.nextElementSibling || this.firstElementChild;
                }
                if (selection instanceof Group.Element) {
                    if (selection.firstElementChild instanceof Group.Label.Element) {
                        selection = selection.firstElementChild.nextElementSibling;
                    }
                    else {
                        selection = selection.firstElementChild;
                    }
                }
            }
            if (selection instanceof Option.Element) {
                selection.focus();
            }
        }
    }
    /**
     * Renders a new option element for the specified option entity.
     * @param entity Option entity.
     * @returns Returns true when the option element was rendered, false otherwise.
     */
    renderOption(entity) {
        const event = new CustomEvent('renderoption', { bubbles: true, cancelable: true, detail: entity });
        if (this.dispatchEvent(event)) {
            const element = (JSX.create(Option.Component, { disabled: this.disabled }, entity.element || entity.label || entity.value));
            element.addEventListener('click', this.optionClickHandler.bind(this, entity, element));
            element.addEventListener('keydown', this.optionKeydownHandler.bind(this, entity, element));
            entity.element = element;
            return true;
        }
        return false;
    }
    /**
     * Renders a new group element for the specified group entity.
     * @param entity Group entity.
     * @returns Returns true when the group element was rendered, false otherwise.
     */
    renderGroup(entity) {
        const event = new CustomEvent('rendergroup', { bubbles: true, cancelable: true, detail: entity });
        if (this.dispatchEvent(event)) {
            entity.element = (JSX.create(Group.Component, { disabled: this.disabled },
                JSX.create(Group.Label.Component, null, entity.element || entity.label)));
            return true;
        }
        return false;
    }
    /**
     * Gets the selected option value.
     */
    get value() {
        if (this.selectedOption) {
            return this.selectedOption.value;
        }
        return void 0;
    }
    /**
     * Sets the selected option value.
     */
    set value(value) {
        const optionList = this.optionsMap[value];
        if (optionList !== void 0) {
            this.selectOption(optionList[0], this.optionElementMap.get(optionList[0]));
        }
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
        this.updatePropertyState('disabled', state);
        this.updateChildrenState('disabled', state);
    }
    /**
     * Gets the selectable state.
     */
    get selectable() {
        return this.hasAttribute('selectable');
    }
    /**
     * Sets the selectable state.
     */
    set selectable(state) {
        this.updatePropertyState('selectable', state);
    }
    /**
     * Gets the orientation.
     */
    get orientation() {
        return this.getAttribute('orientation') || 'column';
    }
    /**
     * Sets the orientation.
     */
    set orientation(value) {
        this.updatePropertyState('orientation', value);
        this.updateChildrenState('orientation', value);
    }
    /**
     * Adds the specified group into the menu.
     * @param name Group name.
     * @param label Group label.
     * @returns Returns true when the group has been added, false otherwise.
     */
    addGroup(name, label) {
        const entity = { name: name, label: label };
        if (this.renderGroup(entity)) {
            this.groupsMap[name] = entity;
            return true;
        }
        return false;
    }
    /**
     * Adds the specified option into the menu.
     * @param value Option value.
     * @param label Option label.
     * @param group Option group.
     * @returns Returns true when the option has been added, false otherwise.
     */
    addOption(value, label, group) {
        const entity = { value: value, group: group, label: label };
        if (this.renderOption(entity)) {
            this.optionElementMap.set(entity, entity.element);
            if (!(this.optionsMap[value] instanceof Array)) {
                this.optionsMap[value] = [entity];
            }
            else {
                this.optionsMap[value].push(entity);
            }
            if (entity.group) {
                const group = this.groupsMap[entity.group];
                if (group) {
                    JSX.append(group.element, entity.element);
                    if (!group.element.parentNode) {
                        JSX.append(this, group.element);
                    }
                    return true;
                }
                else {
                    console.warn(`Option group '${entity.group}' wasn't found.`);
                }
            }
            JSX.append(this, entity.element);
            return true;
        }
        return false;
    }
    /**
     * Remove all options that corresponds to the specified option value.
     * @param value Option value.
     * @returns Returns true when some option was removed or false otherwise.
     */
    removeOption(value) {
        const optionList = this.optionsMap[value];
        if (optionList) {
            for (const entity of optionList) {
                entity.element.remove();
                if (this.selectedElement === entity.element) {
                    this.unselectOption();
                }
                if (entity.group) {
                    const group = this.groupsMap[entity.group];
                    if (group && group.element.childNodes.length <= 1) {
                        group.element.remove();
                    }
                }
            }
            delete this.optionsMap[value];
            return true;
        }
        return false;
    }
    /**
     * Clear all options.
     */
    clearOptions() {
        this.detachGroups();
        this.detachOptions();
        this.optionsMap = {};
        this.selectedOption = void 0;
        this.selectedElement = void 0;
    }
};
/**
 * Global styles element.
 */
Element.globalStyles = JSX.create("style", { type: "text/css" }, new stylesheet_1.Stylesheet().toString());
__decorate([
    Class.Private()
], Element.prototype, "optionsMap", void 0);
__decorate([
    Class.Private()
], Element.prototype, "optionElementMap", void 0);
__decorate([
    Class.Private()
], Element.prototype, "groupsMap", void 0);
__decorate([
    Class.Private()
], Element.prototype, "selectedOption", void 0);
__decorate([
    Class.Private()
], Element.prototype, "selectedElement", void 0);
__decorate([
    Class.Private()
], Element.prototype, "detachGroups", null);
__decorate([
    Class.Private()
], Element.prototype, "detachOptions", null);
__decorate([
    Class.Private()
], Element.prototype, "selectOption", null);
__decorate([
    Class.Public()
], Element.prototype, "unselectOption", null);
__decorate([
    Class.Private()
], Element.prototype, "optionClickHandler", null);
__decorate([
    Class.Private()
], Element.prototype, "optionKeydownHandler", null);
__decorate([
    Class.Private()
], Element.prototype, "renderOption", null);
__decorate([
    Class.Private()
], Element.prototype, "renderGroup", null);
__decorate([
    Class.Public()
], Element.prototype, "value", null);
__decorate([
    Class.Public()
], Element.prototype, "disabled", null);
__decorate([
    Class.Public()
], Element.prototype, "selectable", null);
__decorate([
    Class.Public()
], Element.prototype, "orientation", null);
__decorate([
    Class.Public()
], Element.prototype, "addGroup", null);
__decorate([
    Class.Public()
], Element.prototype, "addOption", null);
__decorate([
    Class.Public()
], Element.prototype, "removeOption", null);
__decorate([
    Class.Public()
], Element.prototype, "clearOptions", null);
__decorate([
    Class.Private()
], Element, "globalStyles", void 0);
Element = Element_1 = __decorate([
    JSX.Describe('swe-menu'),
    Class.Describe()
], Element);
exports.Element = Element;
