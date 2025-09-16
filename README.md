# Skiff Icons

300+ SVG icons for React. Self-contained, TypeScript, no external deps.

## Install

```bash
npm install skiff-icons
```

## Usage

```tsx
import { Icon } from 'skiff-icons';

function App() {
  return (
    <div>
      <Icon icon="search" />
      <Icon icon="heart" size="large" color="red" />
      <Icon icon="settings" tooltip="Settings" onClick={() => {}} />
    </div>
  );
}
```

## Props

- `icon`: Icon name (required)
- `size`: Size or number (default: 'medium')
- `color`: Color name or string (default: 'primary')
- `tooltip`: Tooltip text
- `onClick`: Click handler
- `disabled`: Boolean
- `rotate`: Rotation degrees
- `shadow`: Drop shadow

## Available Icons

All icons from [Icons.types.ts](./Icons/Icons.types.ts)

## License

MIT
