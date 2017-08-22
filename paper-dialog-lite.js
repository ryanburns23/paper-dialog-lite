class PaperDialogLite extends Polymer.mixinBehaviors([Polymer.IronOverlayBehavior], Polymer.Element) {
  static get template() {
    return `<slot></slot>`
  }
}
customElements.define("paper-dialog-lite", PaperDialogLite);