---
title: 'Creating Web Components v1 using Svelte'
excerpt: 'How to wrap a Svelte component as a Web Component v1, and export them as group module for easy client implementation. '
coverImage: https://res.cloudinary.com/practicaldev/image/fetch/s--be3eR7Dm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://nunomalex.me/svelte-logo.png
date: '2021-02-4'
author: Adam Manuel
state: 'incomplete'
tags: ["Web Component v1", "Svelte"]
---

## TODO

> Follow the example below for more


```js
class NativeApp extends HTMLElement {
  /**
   * This defines the attributes to watch in the custom element to trigger the `attributeChangedCallback` method
   */
  static get observedAttributes() {
    return ['sidebar', 'topbar', 'appmenu']; // ['example'];
  }

  /**
   * @see [https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements](Why the args?)
   * @param  {...any} args
   */
  constructor(...args) {
    super(...args);
  }

  /**
   * Grab props from the elements attributes to pass to the renderer
   */
  connectedCallback() {
    const sidebar = this.getAttribute('sidebar');
    const topbar = this.getAttribute('topbar')
    const appmenu = this.getAttribute('appmenu')
    this.svelte = new NativeApp({
      target: this,
      props: { sidebar, topbar, appmenu },
    });
  }

  // Invoked each time the custom element is disconnected from the document's DOM.
  disconnectedCallback() {
    this.svelte.$destroy();
  }

  /**
   * Invoked each time one of the custom element's attributes is added,
   * removed, or changed. Which attributes to notice change for is specified
   * in a static get observedAttributes method
   * @param {*} attrName Changed Attributes Name
   * @param {*} oldVal The older value
   * @param {*} newVal The newer value
   */
  attributeChangedCallback(attrName, oldVal, newVal) {
    if(this.svelte) {
      this.svelte.$set({
        [attrName]: newVal
      })
    }
  }
}
customElements.define('native-portal', NativeApp);
```