/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import * as Types from './types';
import * as Group from './group';
import * as Option from './option';

import { Stylesheet } from './stylesheet';

/**
 * Menu element.
 */
@JSX.Describe('swe-menu')
@Class.Describe()
export class Element extends Control.Element {
  /**
   * Global styles element.
   */
  @Class.Private()
  private static globalStyles = <style type="text/css">{new Stylesheet().toString()}</style> as HTMLStyleElement;

  /**
   * Map of entity options by value.
   */
  @Class.Private()
  private optionsMap = {} as Types.Map<Types.Option[]>;

  /**
   * Map of element options by entity option.
   */
  @Class.Private()
  private optionElementMap = new WeakMap<Types.Option, Option.Element>();

  /**
   * Map of entity group by name.
   */
  @Class.Private()
  private groupsMap = {} as Types.Map<Types.Group>;

  /**
   * Current option selected.
   */
  @Class.Private()
  private selectedOption?: Types.Option;

  /**
   * Current element selected.
   */
  @Class.Private()
  private selectedElement?: Option.Element;

  /**
   * Detaches all group elements.
   */
  @Class.Private()
  private detachGroups(): void {
    for (const name in this.groupsMap) {
      (this.groupsMap[name].element as Group.Element).remove();
    }
  }

  /**
   * Detaches all option elements.
   */
  @Class.Private()
  private detachOptions(): void {
    for (const value in this.optionsMap) {
      for (const entity of this.optionsMap[value]) {
        (entity.element as Option.Element).remove();
      }
    }
  }

  /**
   * Selects the specified option entity and option element.
   * @param entity Option entity.
   * @param element Option element.
   */
  @Class.Private()
  private selectOption(entity: Types.Option, element: Option.Element): void {
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
  @Class.Public()
  public unselectOption(): void {
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
  @Class.Private()
  private optionClickHandler(entity: Types.Option, element: Option.Element, event: MouseEvent): void {
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
  @Class.Private()
  private optionKeydownHandler(entity: Types.Option, element: Option.Element, event: KeyboardEvent): void {
    if (event.code === 'Enter') {
      if (!this.disabled && !element.disabled) {
        this.selectOption(entity, element);
      }
    } else {
      let selection;
      if (event.code === 'ArrowUp') {
        if (element.parentElement instanceof Element) {
          selection = element.previousElementSibling || this.lastElementChild;
        } else if (element.parentElement instanceof Group.Element) {
          if (element.previousElementSibling instanceof Group.Label.Element) {
            selection = element.parentElement.previousElementSibling || this.lastElementChild;
          } else {
            selection = element.previousElementSibling || this.lastElementChild;
          }
        }
        if (selection instanceof Group.Element) {
          selection = selection.lastElementChild;
        }
      } else if (event.code === 'ArrowDown') {
        if (element.parentElement instanceof Element) {
          selection = element.nextElementSibling || this.firstElementChild;
        } else if (element.parentElement instanceof Group.Element) {
          selection = element.nextElementSibling || element.parentElement.nextElementSibling || this.firstElementChild;
        }
        if (selection instanceof Group.Element) {
          if (selection.firstElementChild instanceof Group.Label.Element) {
            selection = selection.firstElementChild.nextElementSibling;
          } else {
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
  @Class.Private()
  private renderOption(entity: Types.Option): boolean {
    const event = new CustomEvent<Types.Option>('renderoption', { bubbles: true, cancelable: true, detail: entity });
    if (this.dispatchEvent(event)) {
      const element = (
        <Option.Component disabled={this.disabled}>{entity.element || entity.label || entity.value}</Option.Component>
      ) as Option.Element;
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
  @Class.Private()
  private renderGroup(entity: Types.Group): boolean {
    const event = new CustomEvent<Types.Group>('rendergroup', { bubbles: true, cancelable: true, detail: entity });
    if (this.dispatchEvent(event)) {
      entity.element = (
        <Group.Component disabled={this.disabled}>
          <Group.Label.Component>{entity.element || entity.label}</Group.Label.Component>
        </Group.Component>
      );
      return true;
    }
    return false;
  }

  /**
   * Default constructor.
   */
  constructor() {
    super();
    if (!globalThis.document.head.contains(Element.globalStyles)) {
      JSX.append(globalThis.document.head, Element.globalStyles);
    }
  }

  /**
   * Gets the selected option value.
   */
  @Class.Public()
  public get value(): string | undefined {
    if (this.selectedOption) {
      return this.selectedOption.value;
    }
    return void 0;
  }

  /**
   * Sets the selected option value.
   */
  public set value(value: string | undefined) {
    const optionList = this.optionsMap[value as string];
    if (optionList !== void 0) {
      this.selectOption(optionList[0], this.optionElementMap.get(optionList[0]) as Option.Element);
    }
  }

  /**
   * Gets the disabled state.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.hasAttribute('disabled');
  }

  /**
   * Sets the disabled state.
   */
  public set disabled(state: boolean) {
    this.updatePropertyState('disabled', state);
    this.updateChildrenState('disabled', state);
  }

  /**
   * Gets the selectable state.
   */
  @Class.Public()
  public get selectable(): boolean {
    return this.hasAttribute('selectable');
  }

  /**
   * Sets the selectable state.
   */
  public set selectable(state: boolean) {
    this.updatePropertyState('selectable', state);
  }

  /**
   * Gets the orientation.
   */
  @Class.Public()
  public get orientation(): Types.Orientations {
    return (this.getAttribute('orientation') as Types.Orientations) || 'column';
  }

  /**
   * Sets the orientation.
   */
  public set orientation(value: Types.Orientations) {
    this.updatePropertyState('orientation', value);
    this.updateChildrenState('orientation', value);
  }

  /**
   * Adds the specified group into the menu.
   * @param name Group name.
   * @param label Group label.
   * @returns Returns true when the group has been added, false otherwise.
   */
  @Class.Public()
  public addGroup(name: string, label: JSX.Element): boolean {
    const entity = { name: name, label: label } as Types.Group;
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
  @Class.Public()
  public addOption(value: string, label: JSX.Element, group?: string): boolean {
    const entity = { value: value, group: group, label: label } as Types.Option;
    if (this.renderOption(entity)) {
      this.optionElementMap.set(entity, entity.element as Option.Element);
      if (!(this.optionsMap[value] instanceof Array)) {
        this.optionsMap[value] = [entity];
      } else {
        this.optionsMap[value].push(entity);
      }
      if (entity.group) {
        const group = this.groupsMap[entity.group] as Types.Group;
        if (group) {
          JSX.append(group.element as Group.Element, entity.element);
          if (!(group.element as Group.Element).parentNode) {
            JSX.append(this, group.element);
          }
          return true;
        } else {
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
  @Class.Public()
  public removeOption(value: string): boolean {
    const optionList = this.optionsMap[value];
    if (optionList) {
      for (const entity of optionList) {
        (entity.element as Option.Element).remove();
        if (this.selectedElement === entity.element) {
          this.unselectOption();
        }
        if (entity.group) {
          const group = this.groupsMap[entity.group] as Types.Group;
          if (group && (group.element as Group.Element).childNodes.length <= 1) {
            (group.element as Group.Element).remove();
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
  @Class.Public()
  public clearOptions(): void {
    this.detachGroups();
    this.detachOptions();
    this.optionsMap = {};
    this.selectedOption = void 0;
    this.selectedElement = void 0;
  }
}
