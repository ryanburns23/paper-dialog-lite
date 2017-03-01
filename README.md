[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/ryanburns23/paper-dialog-lite)

# \<paper-dialog-lite\>

paper-dialog without paper-dialog-behavior or paper-dialog-shared-styles

### Usage
<!--
```
<custom-element-demo height="500px">
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-dialog-lite.html">
    <style>
      .container{
        height: 400px;
      }
      paper-dialog-lite{
        font-family: -apple-system, BlinkMacSystemFont,
        "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
        font-size: 16px;
        background: white;
        color: green;
        padding: 30px;
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
  paper-dialog-lite
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
