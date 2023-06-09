import {LitElement, html, css, CSSResultGroup} from 'lit';
import { property } from "lit/decorators.js";

class PolrCustomCard extends LitElement {
  @property() _config : any;
  @property() _hass : any;

  static getConfigElement() {
    // return document.createElement("polr-custom-card-editor");
  }

  static getStubConfig() {
    return {
    };
  }

  setConfig(config : any) {
    this._config = config;
  }

  set hass(hass : any) {
  }

  render() {
    return html`
      <ha-card header="hello">
        hello world
      </ha-card>
    `;
  }

  static get styles(): CSSResultGroup {
    return css``;
  }
}

class PolrCustomCardEditor extends LitElement {
  
  setConfig(config:any) {
  }
  
  render() {
    return html`
      <ha-card header="hello">
        hello world
      </ha-card>
    `;
  }
}

customElements.define("polr-custom-card", PolrCustomCard);
customElements.define("polr-custom-card-editor", PolrCustomCardEditor);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'polr-custom-card',
  name: 'POLR Custom Card',
  description: 'A template custom card for you to create something awesome',
});
