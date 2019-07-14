/*!
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as OSS from '@singleware/oss';

/**
 * Menu label stylesheet class.
 */
@Class.Describe()
export class Stylesheet extends OSS.Stylesheet {
  /**
   * Menu label styles.
   */
  @Class.Private()
  private label = this.select('swe-menu-label');

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.label.display = 'block';
    this.label.paddingTop = 'var(--swe-menu-option-padding-top, 0.5rem)';
    this.label.paddingRight = 'var(--swe-menu-option-padding-right, 0.5rem)';
    this.label.paddingBottom = 'var(--swe-menu-option-padding-bottom, 0.5rem)';
    this.label.paddingLeft = 'var(--swe-menu-option-padding-left, 0.5rem)';
    this.label.fontWeight = 'bold';
    this.label.textTransform = 'uppercase';
    this.label.color = 'var(--swe-menu-label-text-color, hsl(0, 0%, 35%))';
  }
}
