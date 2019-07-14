import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Types from './types';
/**
 * Menu element.
 */
export declare class Element extends Control.Element {
    /**
     * Global styles element.
     */
    private static globalStyles;
    /**
     * Map of entity options by value.
     */
    private optionsMap;
    /**
     * Map of element options by entity option.
     */
    private optionElementMap;
    /**
     * Map of entity group by name.
     */
    private groupsMap;
    /**
     * Current option selected.
     */
    private selectedOption?;
    /**
     * Current element selected.
     */
    private selectedElement?;
    /**
     * Detaches all group elements.
     */
    private detachGroups;
    /**
     * Detaches all option elements.
     */
    private detachOptions;
    /**
     * Selects the specified option entity and option element.
     * @param entity Option entity.
     * @param element Option element.
     */
    private selectOption;
    /**
     * Unselects the current selected option element.
     */
    unselectOption(): void;
    /**
     * Option click, event handler.
     * @param entity Option entity.
     * @param element Option element.
     * @param event Event instance.
     */
    private optionClickHandler;
    /**
     * Option keydown, event handler.
     * @param entity Option entity.
     * @param element Option element.
     * @param event Event instance.
     */
    private optionKeydownHandler;
    /**
     * Renders a new option element for the specified option entity.
     * @param entity Option entity.
     * @returns Returns true when the option element was rendered, false otherwise.
     */
    private renderOption;
    /**
     * Renders a new group element for the specified group entity.
     * @param entity Group entity.
     * @returns Returns true when the group element was rendered, false otherwise.
     */
    private renderGroup;
    /**
     * Default constructor.
     */
    constructor();
    /**
     * Gets the selected option value.
     */
    /**
    * Sets the selected option value.
    */
    value: string | undefined;
    /**
     * Gets the disabled state.
     */
    /**
    * Sets the disabled state.
    */
    disabled: boolean;
    /**
     * Gets the selectable state.
     */
    /**
    * Sets the selectable state.
    */
    selectable: boolean;
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
