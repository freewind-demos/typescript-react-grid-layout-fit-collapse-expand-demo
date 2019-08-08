TypeScript React Grid Layout Fit Collapse Expand Demo
=====================================================

When we change the width or height of a layout, react-grid-layout will
re-calculate the location depend on the value of `compactType`:

- `vertical`: Remove the gap between vertical layouts. (Default)
- `horizontal`: Remove the gap between horizontal layouts.
- `null`: No change, keep the gaps

## A problem we may have:

The size of the layout and the inner DOM are dependent. When we collapse
or expand the inner DOM element, we need to change the size of the layout
manually. We need to find a way to "remember" the original size of layout
to allow user to toggle the DOM element without losing size.

## Run

```
npm install
npm run demo
```

It will open page on browser automatically.

Click on the header of the panels to see the effect.
