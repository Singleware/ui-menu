/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Types from './types';

/**
 * Menu properties interface.
 */
export interface Properties {
  /**
   * Menu classes.
   */
  class?: string;
  /**
   * Menu slot.
   */
  slot?: string;
  /**
   * Menu value.
   */
  value?: boolean;
  /**
   * Determines if the menu is disabled or not.
   */
  disabled?: boolean;
  /**
   * Determines if the menu options are selectable or not.
   */
  selectable?: boolean;
  /**
   * Determines which orientation the menu should have.
   */
  orientation?: Types.Orientations;
  /**
   * Render option event.
   */
  onRenderOption?: (option: Types.Option) => JSX.Element | undefined;
  /**
   * Render group event.
   */
  onRenderGroup?: (group: Types.Group) => JSX.Element | undefined;
}
