[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/ryanburns23/paper-dialog-lite)

# \<paper-dialog-lite\>

Polymer element that extends IronOverlayBehavior & NeonAnimationRunnerBehavior

- Version 2x uses ES6 & extends Polymer.Element - Use 1x for Polymer 1 support
- No styles are included

### Usage
<!--
```
<custom-element-demo height="500px">
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../iron-flex-layout/iron-flex-layout.html">
    <link rel="import" href="paper-dialog-lite.html">
    <style>
      .container{
        height: 500px;
      }
      paper-dialog-lite{
        background: white;
        @apply --layout-horizontal;
        @apply --layout-center-center;
        color: #2196F3;
        padding: 40px;
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
        0 4px 22px 3px rgba(0, 0, 0, 0.12),
        0 6px 7px -4px rgba(0, 0, 0, 0.4);
        height: calc(100vh - 70px);
        width: calc(100vw - 70px);
        font-size: 18px;
      }
    </style>
    <div class="container">
      <next-code-block></next-code-block>
    </div>
  </template>
</custom-element-demo>
```
-->
```html
<paper-dialog-lite with-backdrop opened>
  👋 &nbsp; Check out the <a href="https://www.webcomponents.org/element/ryanburns23/paper-dialog-lite/demo/demo/index.html">demo</a> for an animation example
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
