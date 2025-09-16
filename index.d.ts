// TypeScript definitions for skiff-icons
import { ComponentType, SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export type IconComponent = ComponentType<IconProps>;

// Individual icon exports
export const At: IconComponent;
export const Apple: IconComponent;
export const Archive: IconComponent;
export const ArrowDown: IconComponent;
export const ArrowLeft: IconComponent;
export const ArrowRight: IconComponent;
export const ArrowUp: IconComponent;
export const Bell: IconComponent;
export const BellSlash: IconComponent;
export const Bitcoin: IconComponent;
export const Book: IconComponent;
export const Calendar: IconComponent;
export const Camera: IconComponent;
export const Check: IconComponent;
export const CheckCircle: IconComponent;
export const ChevronDown: IconComponent;
export const ChevronLeft: IconComponent;
export const ChevronRight: IconComponent;
export const ChevronUp: IconComponent;
export const Close: IconComponent;
export const Cloud: IconComponent;
export const Copy: IconComponent;
export const Download: IconComponent;
export const Edit: IconComponent;
export const Envelope: IconComponent;
export const Eye: IconComponent;
export const EyeSlash: IconComponent;
export const File: IconComponent;
export const FileEmpty: IconComponent;
export const FilePlus: IconComponent;
export const FileUpload: IconComponent;
export const Folder: IconComponent;
export const FolderPlus: IconComponent;
export const Heart: IconComponent;
export const Home: IconComponent;
export const Image: IconComponent;
export const Info: IconComponent;
export const Link: IconComponent;
export const Lock: IconComponent;
export const Menu: IconComponent;
export const Minus: IconComponent;
export const Moon: IconComponent;
export const Pause: IconComponent;
export const Play: IconComponent;
export const Plus: IconComponent;
export const PlusCircle: IconComponent;
export const Search: IconComponent;
export const Settings: IconComponent;
export const Star: IconComponent;
export const Sun: IconComponent;
export const Trash: IconComponent;
export const Upload: IconComponent;
export const User: IconComponent;
export const Video: IconComponent;
export const Warning: IconComponent;
export const Wifi: IconComponent;
export const XCircle: IconComponent;

// Icon names type for autocomplete
export type IconName = 
  | 'At' | 'Apple' | 'Archive' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp'
  | 'Bell' | 'BellSlash' | 'Bitcoin' | 'Book' | 'Calendar' | 'Camera' | 'Check' | 'CheckCircle'
  | 'ChevronDown' | 'ChevronLeft' | 'ChevronRight' | 'ChevronUp' | 'Close' | 'Cloud' | 'Copy'
  | 'Download' | 'Edit' | 'Envelope' | 'Eye' | 'EyeSlash' | 'File' | 'FileEmpty' | 'FilePlus'
  | 'FileUpload' | 'Folder' | 'FolderPlus' | 'Heart' | 'Home' | 'Image' | 'Info' | 'Link'
  | 'Lock' | 'Menu' | 'Minus' | 'Moon' | 'Pause' | 'Play' | 'Plus' | 'PlusCircle' | 'Search'
  | 'Settings' | 'Star' | 'Sun' | 'Trash' | 'Upload' | 'User' | 'Video' | 'Warning' | 'Wifi' | 'XCircle';

// Icon registry for dynamic usage
export const icons: Record<IconName, IconComponent>;
