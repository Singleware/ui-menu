/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Menu option interface.
 */
export interface Option {
  /**
   * Option value.
   */
  value: string;
  /**
   * Option group name.
   */
  group: string | undefined;
  /**
   * Option label.
   */
  label: JSX.Element;
  /**
   * Option element.
   */
  element: JSX.Element | undefined;
}
