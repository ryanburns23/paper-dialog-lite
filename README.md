[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/ryanburns23/paper-dialog-lite)

# \<paper-dialog-lite\>

paper-dialog without paper-dialog-behavior or paper-dialog-shared-styles

### Usage
<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-dialog-lite.html">
    <next-code-block height="500px"></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<style>
  paper-dialog-lite{
    color: white;
    background: green;
    padding: 20px;
  }
</style>

<paper-dialog-lite with-backdrop opened>
  Dialog Body
</paper-dialog-lite>
```

### Animations

Set the `entry-animation` and/or `exit-animation` attributes to add an animation when the dialog
is opened or closed. See the documentation in
[PolymerElements/neon-animation](https://github.com/PolymerElements/neon-animation) for more info.

For example:

```html
<link rel="import" href="components/neon-animation/animations/scale-up-animation.html">
<link rel="import" href="components/neon-animation/animations/fade-out-animation.html">

<paper-dialog-lite entry-animation="scale-up-animation" exit-animation="fade-out-animation">
  Dialog body
</paper-dialog-lite>
```
