// Skiff Icons - Simple SVG icon library for React
import React from 'react';

// Individual icon components with enhanced props
const createIcon = (SvgComponent) => {
  const Icon = ({ size = 24, color = 'currentColor', className, ...props }) => (
    <SvgComponent
      width={size}
      height={size}
      fill={color}
      className={className}
      {...props}
    />
  );
  Icon.displayName = `Icon`;
  return Icon;
};

// Import all SVG components
import AtSvg from './icons/at.svg';
import AppleSvg from './icons/apple.svg';
import ArchiveSvg from './icons/archive.svg';
import ArrowDownSvg from './icons/arrow-down.svg';
import ArrowLeftSvg from './icons/arrow-left.svg';
import ArrowRightSvg from './icons/arrow-right.svg';
import ArrowUpSvg from './icons/arrow-up.svg';
import BellSvg from './icons/bell.svg';
import BellSlashSvg from './icons/bell-slash.svg';
import BitcoinSvg from './icons/bitcoin.svg';
import BookSvg from './icons/book.svg';
import CalendarSvg from './icons/calendar.svg';
import CameraSvg from './icons/camera.svg';
import CheckSvg from './icons/check.svg';
import CheckCircleSvg from './icons/check-circle.svg';
import ChevronDownSvg from './icons/chevron-down.svg';
import ChevronLeftSvg from './icons/chevron-left.svg';
import ChevronRightSvg from './icons/chevron-right.svg';
import ChevronUpSvg from './icons/chevron-up.svg';
import CloseSvg from './icons/close.svg';
import CloudSvg from './icons/cloud.svg';
import CopySvg from './icons/copy.svg';
import DownloadSvg from './icons/download.svg';
import EditSvg from './icons/edit.svg';
import EnvelopeSvg from './icons/envelope.svg';
import EyeSvg from './icons/eye.svg';
import EyeSlashSvg from './icons/eye-slash.svg';
import FileSvg from './icons/file.svg';
import FileEmptySvg from './icons/file-empty.svg';
import FilePlusSvg from './icons/file-plus.svg';
import FileUploadSvg from './icons/file-upload.svg';
import FolderSvg from './icons/folder.svg';
import FolderPlusSvg from './icons/folder-plus.svg';
import HeartSvg from './icons/heart.svg';
import HomeSvg from './icons/home.svg';
import ImageSvg from './icons/image.svg';
import InfoSvg from './icons/info.svg';
import LinkSvg from './icons/link.svg';
import LockSvg from './icons/lock.svg';
import MenuSvg from './icons/menu.svg';
import MinusSvg from './icons/minus.svg';
import MoonSvg from './icons/moon.svg';
import PauseSvg from './icons/pause.svg';
import PlaySvg from './icons/play.svg';
import PlusSvg from './icons/plus.svg';
import PlusCircleSvg from './icons/plus-circle.svg';
import SearchSvg from './icons/search.svg';
import SettingsSvg from './icons/settings.svg';
import StarSvg from './icons/star.svg';
import SunSvg from './icons/sun.svg';
import TrashSvg from './icons/trash.svg';
import UploadSvg from './icons/upload.svg';
import UserSvg from './icons/user.svg';
import VideoSvg from './icons/video.svg';
import WarningSvg from './icons/warning.svg';
import WifiSvg from './icons/wifi.svg';
import XCircleSvg from './icons/x-circle.svg';

// Export enhanced icon components
export const At = createIcon(AtSvg);
export const Apple = createIcon(AppleSvg);
export const Archive = createIcon(ArchiveSvg);
export const ArrowDown = createIcon(ArrowDownSvg);
export const ArrowLeft = createIcon(ArrowLeftSvg);
export const ArrowRight = createIcon(ArrowRightSvg);
export const ArrowUp = createIcon(ArrowUpSvg);
export const Bell = createIcon(BellSvg);
export const BellSlash = createIcon(BellSlashSvg);
export const Bitcoin = createIcon(BitcoinSvg);
export const Book = createIcon(BookSvg);
export const Calendar = createIcon(CalendarSvg);
export const Camera = createIcon(CameraSvg);
export const Check = createIcon(CheckSvg);
export const CheckCircle = createIcon(CheckCircleSvg);
export const ChevronDown = createIcon(ChevronDownSvg);
export const ChevronLeft = createIcon(ChevronLeftSvg);
export const ChevronRight = createIcon(ChevronRightSvg);
export const ChevronUp = createIcon(ChevronUpSvg);
export const Close = createIcon(CloseSvg);
export const Cloud = createIcon(CloudSvg);
export const Copy = createIcon(CopySvg);
export const Download = createIcon(DownloadSvg);
export const Edit = createIcon(EditSvg);
export const Envelope = createIcon(EnvelopeSvg);
export const Eye = createIcon(EyeSvg);
export const EyeSlash = createIcon(EyeSlashSvg);
export const File = createIcon(FileSvg);
export const FileEmpty = createIcon(FileEmptySvg);
export const FilePlus = createIcon(FilePlusSvg);
export const FileUpload = createIcon(FileUploadSvg);
export const Folder = createIcon(FolderSvg);
export const FolderPlus = createIcon(FolderPlusSvg);
export const Heart = createIcon(HeartSvg);
export const Home = createIcon(HomeSvg);
export const Image = createIcon(ImageSvg);
export const Info = createIcon(InfoSvg);
export const Link = createIcon(LinkSvg);
export const Lock = createIcon(LockSvg);
export const Menu = createIcon(MenuSvg);
export const Minus = createIcon(MinusSvg);
export const Moon = createIcon(MoonSvg);
export const Pause = createIcon(PauseSvg);
export const Play = createIcon(PlaySvg);
export const Plus = createIcon(PlusSvg);
export const PlusCircle = createIcon(PlusCircleSvg);
export const Search = createIcon(SearchSvg);
export const Settings = createIcon(SettingsSvg);
export const Star = createIcon(StarSvg);
export const Sun = createIcon(SunSvg);
export const Trash = createIcon(TrashSvg);
export const Upload = createIcon(UploadSvg);
export const User = createIcon(UserSvg);
export const Video = createIcon(VideoSvg);
export const Warning = createIcon(WarningSvg);
export const Wifi = createIcon(WifiSvg);
export const XCircle = createIcon(XCircleSvg);

// Icon registry for dynamic usage
export const icons = {
  At, Apple, Archive, ArrowDown, ArrowLeft, ArrowRight, ArrowUp,
  Bell, BellSlash, Bitcoin, Book, Calendar, Camera, Check, CheckCircle,
  ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Close, Cloud, Copy,
  Download, Edit, Envelope, Eye, EyeSlash, File, FileEmpty, FilePlus,
  FileUpload, Folder, FolderPlus, Heart, Home, Image, Info, Link,
  Lock, Menu, Minus, Moon, Pause, Play, Plus, PlusCircle, Search,
  Settings, Star, Sun, Trash, Upload, User, Video, Warning, Wifi, XCircle
};

// Default export for convenience
export default icons;
