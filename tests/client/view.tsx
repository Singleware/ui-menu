/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Fieldset from '@singleware/ui-fieldset';
import * as Tabs from '@singleware/ui-tabs';
import * as Field from '@singleware/ui-field';
import * as Form from '@singleware/ui-form';

import * as Test from '@module/index';

/**
 * View class.
 */
@Class.Describe()
export class View extends Control.Component<Control.Properties> {
  /**
   * Groups form.
   */
  @Class.Private()
  private groupsForm = (
    <Form.Component onSubmit={this.onSubmitGroup.bind(this)}>
      <Fieldset.Component slot="header">
        <h3>Groups</h3>
      </Fieldset.Component>
      <Field.Component slot="content">
        <input slot="center" name="name" placeholder="Group name" required />
      </Field.Component>
      <Field.Component slot="content">
        <input slot="center" name="label" placeholder="Group label" required />
      </Field.Component>
      <Fieldset.Component slot="footer" type="submit">
        <button type="submit" class="button">
          Add group
        </button>
      </Fieldset.Component>
    </Form.Component>
  ) as Form.Element;

  /**
   * Options form.
   */
  @Class.Private()
  private optionsForm = (
    <Form.Component onSubmit={this.onSubmitOption.bind(this)}>
      <Fieldset.Component slot="header">
        <h3>Options</h3>
      </Fieldset.Component>
      <Field.Component slot="content">
        <input slot="center" name="value" placeholder="Option value" required />
      </Field.Component>
      <Field.Component slot="content">
        <input slot="center" name="label" placeholder="Option label" required />
      </Field.Component>
      <Field.Component slot="content">
        <input slot="center" name="group" placeholder="Option group" />
      </Field.Component>
      <Fieldset.Component slot="footer" type="submit">
        <button type="submit" class="button">
          Add option
        </button>
      </Fieldset.Component>
    </Form.Component>
  ) as Form.Element;

  /**
   * Settings form.
   */
  @Class.Private()
  private settingsForm = (
    <Form.Component onSubmit={this.onSubmitSettings.bind(this)}>
      <Fieldset.Component slot="header">
        <h3>Settings</h3>
      </Fieldset.Component>
      <Field.Component slot="content">
        <label slot="label">Enabled</label>
        <input slot="center" name="enabled" type="checkbox" value="true" />
      </Field.Component>
      <Fieldset.Component slot="footer" type="submit">
        <button type="submit" class="button">
          Apply
        </button>
      </Fieldset.Component>
    </Form.Component>
  ) as Form.Element;

  /**
   * Test controls.
   */
  @Class.Private()
  private control = (
    <div>
      <h2>Controls</h2>
      <Tabs.Container.Template>
        <Tabs.Page.Template>
          <span slot="caption">Groups</span>
          <div slot="content">{this.groupsForm}</div>
        </Tabs.Page.Template>
        <Tabs.Page.Template>
          <span slot="caption">Options</span>
          <div slot="content">{this.optionsForm}</div>
        </Tabs.Page.Template>
        <Tabs.Page.Template>
          <span slot="caption">Settings</span>
          <div slot="content">{this.settingsForm}</div>
        </Tabs.Page.Template>
      </Tabs.Container.Template>
    </div>
  ) as HTMLDivElement;

  /**
   * Test content.
   */
  @Class.Private()
  private content = <Test.Component class="menu"></Test.Component> as Test.Element;

  /**
   * View element.
   */
  @Class.Private()
  private skeleton = (
    <div class="experiment">
      <div class="content">{this.content}</div>
      <div class="control">{this.control}</div>
    </div>
  ) as HTMLElement;

  /**
   * Submit group, event handler.
   */
  @Class.Private()
  private onSubmitGroup(): void {
    const form = this.groupsForm.value;
    this.content.addGroup(form.name, form.label);
    this.groupsForm.reset();
  }

  /**
   * Submit option, event handler.
   */
  @Class.Private()
  private onSubmitOption(): void {
    const form = this.optionsForm.value;
    this.content.addOption(form.value, form.label, form.group);
    this.optionsForm.reset();
  }

  /**
   * Submit settings, event handler.
   */
  @Class.Private()
  private onSubmitSettings(): void {
    const form = this.settingsForm.value;
    this.content.disabled = Boolean(form.enabled);
  }

  /**
   * Default constructor.
   * @param properties Default properties.
   */
  constructor(properties: Control.Properties) {
    super(properties);
  }

  /**
   * View element.
   */
  @Class.Public()
  public get element(): HTMLElement {
    return this.skeleton;
  }
}
