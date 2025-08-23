# Accessibility Enhancements – Task 6

## ARIA Roles
- Modal uses `role="dialog"` with `aria-labelledby` and `aria-describedby`.
- Timeline markers use `aria-current="step"` and `aria-haspopup="dialog"`.

## Focus Management
- Focus is trapped inside modal using `trapFocus()` helper.
- Focus returns to triggering button on modal close.

## Keyboard Navigation
- Timeline markers navigable via Tab and Arrow keys.
- Modal closable via Escape key.

## Colour Contrast
- Header background updated to `#0033aa` for WCAG AA compliance.
- Focus outlines added to buttons.

## Other WCAG Requirements
- Semantic HTML used (`section`, `ul`, `li`, `button`).
- All images have descriptive `alt` text.
- Responsive layout supports screen readers and mobile devices.
