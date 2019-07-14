import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Types from './types';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Menu component class.
 */
export declare class Component<T extends Properties = Properties> extends Control.Component<T> {
    /**
     * Element instance.
     */
    private skeleton;
    /**
     * Render option, event handler.
     * @param event Event information.
     */
    private renderOptionHandler;
    /**
     * Render group, event handler.
     * @param event Event information.
     */
    private renderGroupHandler;
    /**
     * Default constructor.
     * @param properties Initial properties.
     * @param children Initial children.
     */
    constructor(properties?: T, children?: any[]);
    /**
     * Gets the element.
     */
    readonly element: Element;
    /**
     * Gets the selected option value.
     */
    /**
    * Sets the selected option value.
    */
    value: string | undefined;
    /**
     * Gets the selectable state.
     */
    /**
    * Sets the selectable state.
    */
    selectable: boolean;
    /**
     * Gets the disabled state.
     */
    /**
    * Sets the disabled state.
    */
    disabled: boolean;
    /**
     * Gets the orientation.
     */
    /**
    * Sets the orientation.
    */
    orientation: Types.Orientations;
    /**
     * Adds the specified group into the menu.
     * @param name Group name.
     * @param label Group label.
     * @returns Returns true when the group has been added, false otherwise.
     */
    addGroup(name: string, label: JSX.Element): boolean;
    /**
     * Adds the specified option into the menu.
     * @param value Option value.
     * @param label Option label.
     * @param group Option group.
     * @returns Returns true when the option has been added, false otherwise.
     */
    addOption(value: string, label: JSX.Element, group?: string): boolean;
    /**
     * Remove all options that corresponds to the specified option value.
     * @param value Option value.
     * @returns Returns true when some option was removed or false otherwise.
     */
    removeOption(value: string): boolean;
    /**
     * Clear all options.
     */
    clearOptions(): void;
}
