/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Menu group interface.
 */
export interface Group {
  /**
   * Group name.
   */
  name: string;
  /**
   * Group label.
   */
  label: JSX.Element;
  /**
   * Group element.
   */
  element: JSX.Element | undefined;
}
