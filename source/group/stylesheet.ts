/*!
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as OSS from '@singleware/oss';

/**
 * Menu group stylesheet class.
 */
@Class.Describe()
export class Stylesheet extends OSS.Stylesheet {
  /**
   * Menu group styles.
   */
  @Class.Private()
  private group = this.select('swe-menu-group');

  /**
   * Group option styles.
   */
  @Class.Private()
  private groupOption = this.select('swe-menu-group>swe-menu-option');

  /**
   * Disabled group styles.
   */
  @Class.Private()
  private disabledGroupLabel = this.select('swe-menu-group[disabled]>swe-menu-label');

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.group.display = 'block';
    this.groupOption.paddingLeft = 'calc(var(--swe-menu-option-padding-left, 0.5rem) * 2)';
    this.disabledGroupLabel.color = 'var(--swe-menu-label-disabled-text-color, hsl(0, 0%, 35%))';
  }
}
