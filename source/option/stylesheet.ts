/*!
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as OSS from '@singleware/oss';

/**
 * Menu option stylesheet class.
 */
@Class.Describe()
export class Stylesheet extends OSS.Stylesheet {
  /**
   * Menu option styles.
   */
  @Class.Private()
  private option = this.select('swe-menu-option');

  /**
   * Hover option styles.
   */
  @Class.Private()
  private hoverOption = this.select('swe-menu-option:hover');

  /**
   * Focus option styles.
   */
  @Class.Private()
  private focusOption = this.select('swe-menu-option:focus');

  /**
   * Disabled option styles.
   */
  @Class.Private()
  private disabledOption = this.select('swe-menu-option[disabled]');

  /**
   * Disabled selection styles.
   */
  @Class.Private()
  private disabledSelection = this.select('swe-menu-option[disabled][selection]');

  /**
   * Selected option styles.
   */
  @Class.Private()
  private selectedOption = this.select('swe-menu-option[selected]');

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.option.display = 'block';
    this.option.paddingTop = 'var(--swe-menu-option-padding-top, 0.5rem)';
    this.option.paddingRight = 'var(--swe-menu-option-padding-right, 0.5rem)';
    this.option.paddingBottom = 'var(--swe-menu-option-padding-bottom, 0.5rem)';
    this.option.paddingLeft = 'var(--swe-menu-option-padding-left, 0.5rem)';
    this.option.whiteSpace = 'nowrap';
    this.hoverOption.backgroundColor = 'var(--swe-menu-option-hover-background-color, hsl(0, 0%, 95%))';
    this.focusOption.outline = '0';
    this.focusOption.backgroundColor = 'var(--swe-menu-option-focus-background-color, hsl(0, 0%, 92.5%))';
    this.disabledOption.color = 'var(--swe-menu-option-disabled-text-color, hsl(0, 0%, 75%))';
    this.disabledSelection.backgroundColor = 'var(--swe-menu-option-background-color, hsl(0, 0%, 95%))';
    this.selectedOption.backgroundColor = 'var(--swe-menu-option-selected-background-color, hsl(0, 0%, 90%))';
  }
}
