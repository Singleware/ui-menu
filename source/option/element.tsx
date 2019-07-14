/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Stylesheet } from './stylesheet';

/**
 * Menu option element.
 */
@JSX.Describe('swe-menu-option')
@Class.Describe()
export class Element extends Control.Element {
  /**
   * Global styles element.
   */
  @Class.Private()
  private static globalStyles = <style type="text/css">{new Stylesheet().toString()}</style> as HTMLStyleElement;

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
   * Gets the selected state.
   */
  @Class.Public()
  public get selected(): boolean {
    return this.hasAttribute('selected');
  }

  /**
   * Sets the selected state.
   */
  public set selected(state: boolean) {
    this.updatePropertyState('selected', state);
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
    this.tabIndex = state ? -1 : 0;
    this.updatePropertyState('disabled', state);
    this.updateChildrenState('disabled', state);
  }
}
