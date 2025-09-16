# Skiff Icons

Skiff Icons is a simple, lightweight SVG icon library for React applications, offering TypeScript support and a great developer experience.

## 📦 Install

```bash
npm install skiff-icons
```

## 🚀 Quick Start

### Basic Usage

```tsx
import { Search, Heart, Settings } from 'skiff-icons';

function App() {
  return (
    <div>
      <Search />
      <Heart />
      <Settings />
    </div>
  );
}
```

### With Custom Props

```tsx
import { Search, Heart, Settings } from 'skiff-icons';

function App() {
  return (
    <div>
      <Search size={32} color="#ff6b6b" />
      <Heart size={24} color="red" className="my-icon" />
      <Settings size={20} color="currentColor" />
    </div>
  );
}
```

### Dynamic Usage

```tsx
import { icons } from 'skiff-icons';

function DynamicIcon({ iconName, ...props }) {
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent {...props} /> : null;
}

// Usage
<DynamicIcon iconName="Search" size={24} color="blue" />
```

## 📚 API Reference

### Icon Props

All icons accept these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color |
| `className` | `string` | - | CSS class name |
| `...props` | `SVGProps<SVGSVGElement>` | - | All standard SVG props |

### Available Icons

**309 icons total** - Currently exporting 58 essential icons with more being added regularly.

#### Navigation & UI
- `ArrowDown`, `ArrowLeft`, `ArrowRight`, `ArrowUp`
- `ChevronDown`, `ChevronLeft`, `ChevronRight`, `ChevronUp`
- `Menu`, `Close`, `Search`, `Settings`

#### Actions
- `Plus`, `Minus`, `Edit`, `Copy`, `Download`, `Upload`
- `Play`, `Pause`, `Trash`, `Check`, `XCircle`

#### Files & Folders
- `File`, `FileEmpty`, `FilePlus`, `FileUpload`
- `Folder`, `FolderPlus`

#### Communication
- `Envelope`, `Bell`, `BellSlash`, `Eye`, `EyeSlash`

#### Media
- `Image`, `Video`, `Camera`, `Heart`, `Star`

#### System
- `Home`, `User`, `Lock`, `Wifi`, `Cloud`
- `Sun`, `Moon`, `Warning`, `Info`

#### And many more...

> **Note**: We have 309 SVG icons in our collection. Currently exporting 58 essential icons. More icons will be added to the exports in future updates. All 309 SVG files are included in the package.

## 🎨 Styling Examples

### CSS Classes

```tsx
import { Search } from 'skiff-icons';

<Search className="my-search-icon" />
```

```css
.my-search-icon {
  transition: transform 0.2s ease;
}

.my-search-icon:hover {
  transform: scale(1.1);
}
```

### Inline Styles

```tsx
<Search 
  style={{ 
    color: '#ff6b6b',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
  }} 
/>
```

### Theme Integration

```tsx
// Using CSS variables
<Search color="var(--primary-color)" />

// Using theme colors
<Search color={theme.colors.primary} />
```

## 🔧 TypeScript Support

Full TypeScript support with autocomplete and type safety:

```tsx
import { Search, IconName, IconProps } from 'skiff-icons';

// Type-safe icon names
const iconName: IconName = 'Search'; // ✅ Valid
const invalidIcon: IconName = 'InvalidIcon'; // ❌ Type error

// Type-safe props
const searchProps: IconProps = {
  size: 24,
  color: 'blue',
  className: 'my-icon'
};
```

## 📦 Bundle Size

- **Individual icons**: ~1-2KB each
- **Full library**: ~15KB gzipped
- **Tree-shakable**: Only import what you use

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [Skiff](https://github.com/uxmohamed/skiff-icons)

## 🔗 Links

- [GitHub](https://github.com/uxmohamed/skiff-icons)
- [Issues](https://github.com/uxmohamed/skiff-icons/issues)
- [NPM](https://www.npmjs.com/package/skiff-icons)