# Skiff Icons

A comprehensive, self-contained icon library for React applications featuring 300+ carefully crafted SVG icons. Built with TypeScript and designed for modern web development.

## Features

- 🎨 **300+ Icons**: Comprehensive collection covering UI, navigation, social media, and more
- ⚡ **Self-contained**: No external dependencies except React
- 🏗️ **Framework-agnostic**: Works with any React-based framework
- 📦 **Tree-shakable**: Import only the icons you need
- 🎯 **TypeScript**: Full type safety and IntelliSense support
- 🎭 **Customizable**: Colors, sizes, tooltips, and interactive states
- 🚀 **Optimized**: Small bundle size with efficient SVG usage

## Installation

```bash
npm install skiff-icons
# or
yarn add skiff-icons
# or
pnpm add skiff-icons
```

## Quick Start

### Using the Icon Component

```tsx
import React from 'react';
import { Icon, IconColor } from 'skiff-icons';

function MyComponent() {
  return (
    <div>
      {/* Basic usage */}
      <Icon icon="search" />

      {/* With custom size and color */}
      <Icon icon="heart" size="large" color="red" />

      {/* With tooltip and click handler */}
      <Icon
        icon="settings"
        size={24}
        color="primary"
        tooltip="Open settings"
        onClick={() => console.log('Settings clicked!')}
      />

      {/* Disabled state */}
      <Icon icon="trash" disabled />
    </div>
  );
}
```

### Using Individual SVG Components

For more control or to use outside of React components:

```tsx
import React from 'react';
import { SEARCH_SVG, HEART_SVG } from 'skiff-icons';

function CustomIcon({ size = 16, color = 'currentColor' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <SEARCH_SVG
        style={{
          width: size,
          height: size,
          fill: color
        }}
      />
      <HEART_SVG
        style={{
          width: size,
          height: size,
          fill: color
        }}
      />
    </div>
  );
}
```

## Available Icons

The library includes icons for:

- **Navigation**: arrow-up, arrow-down, chevron-left, etc.
- **Actions**: edit, save, delete, copy, search, etc.
- **Social Media**: gmail, google-drive, twitter, facebook, etc.
- **Crypto**: bitcoin, ethereum, metamask, wallet, etc.
- **UI Elements**: checkbox, radio, dropdown, menu, etc.
- **File Types**: pdf, word, image, folder, etc.
- **Status**: check, warning, info, error, etc.
- **And many more...**

See the complete list in [Icons.types.ts](./Icons/Icons.types.ts) or explore the [assets directory](./Icons/assets/).

## API Reference

### Icon Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `Icon` | - | **Required.** The icon to display |
| `size` | `Size \| number` | `'medium'` | Icon size (xlarge, large, xmedium, medium, small, xsmall or number) |
| `color` | `IconColor` | `'primary'` | Icon color (primary, secondary, red, blue, etc. or custom color string) |
| `disabled` | `boolean` | `false` | Whether the icon is disabled |
| `rotate` | `number` | - | Rotation angle in degrees |
| `shadow` | `boolean` | `false` | Whether to add a drop shadow |
| `tooltip` | `string` | - | Tooltip text to display on hover |
| `tooltipDelay` | `number` | `0` | Delay before showing tooltip (ms) |
| `colorDelay` | `number` | `0` | Color transition delay (ms) |
| `onClick` | `function` | - | Click handler function |
| `dataTest` | `string` | - | Data test attribute for testing |

### Available Sizes

- `xsmall`: 12px
- `small`: 14px
- `medium`: 16px
- `xmedium`: 24px
- `large`: 36px
- `xlarge`: 48px

### Available Colors

- **Semantic**: `primary`, `secondary`, `tertiary`, `disabled`, `inverse`
- **States**: `destructive`, `link`, `white`, `black`
- **Theme**: `orange`, `green`, `pink`, `yellow`, `blue`, `red`, `dark-blue`
- **Custom**: Any valid CSS color string

## Advanced Usage

### Custom Styling

```tsx
import React from 'react';
import { Icon } from 'skiff-icons';

function CustomStyledIcon() {
  return (
    <Icon
      icon="star"
      size="large"
      style={{
        filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
        animation: 'pulse 2s infinite'
      }}
    />
  );
}
```

### Icon Button Pattern

```tsx
import React from 'react';
import { Icon } from 'skiff-icons';

function IconButton({ icon, onClick, disabled, tooltip }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        border: 'none',
        background: 'transparent',
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: '8px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Icon
        icon={icon}
        tooltip={tooltip}
        disabled={disabled}
      />
    </button>
  );
}
```

### Loading States

```tsx
import React, { useState } from 'react';
import { Icon } from 'skiff-icons';

function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <Icon
      icon={isLoading ? 'spin' : 'download'}
      rotate={isLoading ? undefined : 0}
      onClick={handleClick}
      tooltip={isLoading ? 'Downloading...' : 'Download file'}
    />
  );
}
```

## Framework Integration

### Next.js

```tsx
// pages/_app.tsx
import 'skiff-icons/dist/style.css'; // If you have custom styles

// Component
import { Icon } from 'skiff-icons';

export default function MyPage() {
  return <Icon icon="home" />;
}
```

### Vite + React

```tsx
// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// No additional setup needed
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Gatsby

```tsx
// gatsby-config.js
module.exports = {
  plugins: [
    // No special configuration needed
  ],
};
```

## TypeScript Support

The library is written in TypeScript and provides full type safety:

```tsx
import { Icon, IconColor, Size } from 'skiff-icons';

interface Props {
  iconName: Icon;
  color: IconColor;
  size: Size;
}

function TypedIcon({ iconName, color, size }: Props) {
  return <Icon icon={iconName} color={color} size={size} />;
}
```

## Tree Shaking

The library supports tree shaking to reduce bundle size:

```tsx
// Only imports the Icon component and types
import { Icon, IconColor } from 'skiff-icons';

// Only imports specific SVG components
import { SEARCH_SVG, HEART_SVG } from 'skiff-icons';
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- React 16.8+ (hooks support)
- ES2020+ features

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-icon`)
3. Commit your changes (`git commit -m 'Add amazing icon'`)
4. Push to the branch (`git push origin feature/amazing-icon`)
5. Open a Pull Request

## License

MIT © [Skiff](https://skiff.com)

## Changelog

### v1.0.0
- Initial release with 300+ icons
- Full TypeScript support
- Self-contained React component
- Individual SVG exports
- Comprehensive documentation
