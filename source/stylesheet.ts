/*!
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as OSS from '@singleware/oss';

/**
 * Menu stylesheet class.
 */
@Class.Describe()
export class Stylesheet extends OSS.Stylesheet {
  /**
   * Menu styles.
   */
  @Class.Private()
  private menu = this.select('swe-menu', 'swe-menu[orientation="column"]');

  /**
   * Column styles.
   */
  @Class.Private()
  private columnMenu = this.select('swe-menu', 'swe-menu[orientation="column"]');

  /**
   * Row styles.
   */
  @Class.Private()
  private rowMenu = this.select('swe-menu[orientation="row"]');

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.menu.display = 'flex';
    this.menu.overflow = 'auto';
    this.menu.backgroundColor = 'var(--swe-menu-background-color, hsl(0, 0%, 100%))';
    this.menu.borderRadius = 'var(--swe-menu-border-radius, 0.25rem)';
    this.menu.border = 'var(--swe-menu-border-size, 0.0625rem) solid var(--swe-menu-border-color, hsl(0, 0%, 90%))';
    this.columnMenu.flexDirection = 'column';
    this.rowMenu.flexDirection = 'row';
    this.rowMenu.alignItems = 'center';
  }
}
