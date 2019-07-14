/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Stylesheet } from './stylesheet';

/**
 * Menu group, label element.
 */
@JSX.Describe('swe-menu-label')
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
}
