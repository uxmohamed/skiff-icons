import React from 'react';
import { Size, IconColor, ThemeMode, IconProps } from './Icons.types';
import { ICON_COLOR, ICON_SIZE, ICON_SVG } from './Icons.constants';

// Simple color mapping function to replace getThemedColor
const getIconColor = (color: IconColor, theme?: ThemeMode): string => {
  if (typeof color === 'string' && !ICON_COLOR[color]) {
    return color; // Allow custom color strings
  }
  return ICON_COLOR[color] || ICON_COLOR.primary;
};

// Simple tooltip component to replace the external one
const SimpleTooltip: React.FC<{
  content: string;
  children: React.ReactNode;
  delay?: number;
}> = ({ content, children, delay = 0 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setIsVisible(true), delay));
  };

  const hideTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsVisible(false);
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && content && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            zIndex: 1000,
            marginBottom: '4px',
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

const Icons: React.FC<IconProps> = ({
  dataTest,
  icon,
  onClick,
  size = 'medium',
  color = 'primary',
  disabled,
  forceTheme,
  rotate,
  shadow,
  tooltip,
  tooltipDelay,
  colorDelay = 0
}) => {
  const IconSVG = ICON_SVG[icon];
  const iconSize = typeof size === 'number' ? size : ICON_SIZE[size];
  const iconColor = getIconColor(color, forceTheme);

  if (!IconSVG) {
    return null;
  }

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexShrink: 0,
    userSelect: 'none',
    cursor: onClick ? 'pointer' : 'default',
    filter: shadow ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.06))' : undefined,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
    transition: colorDelay ? `color ${colorDelay}ms` : undefined,
    pointerEvents: disabled ? 'none' : undefined,
    opacity: disabled ? 0.5 : 1,
  };

  const svgStyle: React.CSSProperties = {
    width: iconSize,
    height: iconSize,
    fill: iconColor,
    transition: 'fill 0.1s ease',
  };

  const IconElement = (
    <div
      className="sk-icon-container"
      data-test={dataTest}
      style={containerStyle}
      onClick={disabled ? undefined : onClick}
    >
      <IconSVG style={svgStyle} />
    </div>
  );

  if (tooltip) {
    return (
      <SimpleTooltip content={tooltip} delay={tooltipDelay}>
        {IconElement}
      </SimpleTooltip>
    );
  }

  return IconElement;
};

export default Icons;
