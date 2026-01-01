# Design Tokens & Typography

This project includes a minimal design token set to keep styles consistent and maintainable.

## What was added

- **Font**: Inter is used as the primary UI font and is imported in `src/index.css`.
- **Tailwind tokens**: `fontFamily` and `fontSize` were extended in `tailwind.config.ts` to enforce a consistent typographic scale.
- **Utility classes**: Common utility classes are defined in `src/index.css` under `@layer components` (`.button-primary`, `.button-secondary`, `.card-hover`, `.section-title`, etc.).

## Where to look

- `tailwind.config.ts` — extended theme tokens
- `src/index.css` — font import and base/utility classes

## Notes

These tokens are intentionally small to avoid making large breaking changes. We can expand them later to include color tokens, spacing scales, and component variants as we iterate on the design system.
