/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import * as Types from './types';

import { Properties } from './properties';
import { Element } from './element';

/**
 * Menu component class.
 */
@Class.Describe()
export class Component<T extends Properties = Properties> extends Control.Component<T> {
  /**
   * Element instance.
   */
  @Class.Private()
  private skeleton = (
    <swe-menu
      class={this.properties.class}
      slot={this.properties.slot}
      disabled={this.properties.disabled}
      selectable={this.properties.selectable}
      orientation={this.properties.orientation}
    ></swe-menu>
  ) as Element;

  /**
   * Render option, event handler.
   * @param event Event information.
   */
  @Class.Private()
  private renderOptionHandler(event: CustomEvent<Types.Option>): void {
    if (this.properties.onRenderOption) {
      event.detail.element = this.properties.onRenderOption(event.detail);
    }
  }

  /**
   * Render group, event handler.
   * @param event Event information.
   */
  @Class.Private()
  private renderGroupHandler(event: CustomEvent<Types.Group>): void {
    if (this.properties.onRenderGroup) {
      event.detail.element = this.properties.onRenderGroup(event.detail);
    }
  }

  /**
   * Default constructor.
   * @param properties Initial properties.
   * @param children Initial children.
   */
  constructor(properties?: T, children?: any[]) {
    super(properties, children);
    this.skeleton.addEventListener('renderoption', this.renderOptionHandler.bind(this) as EventListener);
    this.skeleton.addEventListener('rendergroup', this.renderGroupHandler.bind(this) as EventListener);
  }

  /**
   * Gets the element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Gets the selected option value.
   */
  @Class.Public()
  public get value(): string | undefined {
    return this.skeleton.value;
  }

  /**
   * Sets the selected option value.
   */
  public set value(value: string | undefined) {
    this.skeleton.value = value;
  }

  /**
   * Gets the selectable state.
   */
  @Class.Public()
  public get selectable(): boolean {
    return this.skeleton.selectable;
  }

  /**
   * Sets the selectable state.
   */
  public set selectable(state: boolean) {
    this.skeleton.selectable = state;
  }

  /**
   * Gets the disabled state.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.skeleton.disabled;
  }

  /**
   * Sets the disabled state.
   */
  public set disabled(state: boolean) {
    this.skeleton.disabled = state;
  }

  /**
   * Gets the orientation.
   */
  @Class.Public()
  public get orientation(): Types.Orientations {
    return this.skeleton.orientation;
  }

  /**
   * Sets the orientation.
   */
  public set orientation(value: Types.Orientations) {
    this.skeleton.orientation = value;
  }

  /**
   * Adds the specified group into the menu.
   * @param name Group name.
   * @param label Group label.
   * @returns Returns true when the group has been added, false otherwise.
   */
  @Class.Public()
  public addGroup(name: string, label: JSX.Element): boolean {
    return this.skeleton.addGroup(name, label);
  }

  /**
   * Adds the specified option into the menu.
   * @param value Option value.
   * @param label Option label.
   * @param group Option group.
   * @returns Returns true when the option has been added, false otherwise.
   */
  @Class.Public()
  public addOption(value: string, label: JSX.Element, group?: string): boolean {
    return this.skeleton.addOption(value, label, group);
  }

  /**
   * Remove all options that corresponds to the specified option value.
   * @param value Option value.
   * @returns Returns true when some option was removed or false otherwise.
   */
  @Class.Public()
  public removeOption(value: string): boolean {
    return this.skeleton.removeOption(value);
  }

  /**
   * Clear all options.
   */
  @Class.Public()
  public clearOptions(): void {
    this.skeleton.clearOptions();
  }
}
