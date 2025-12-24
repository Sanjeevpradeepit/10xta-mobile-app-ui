
import { useTheme } from '@/shared/theme';
import type { LucideIcon } from 'lucide-react-native';

// LucideIcon is a ComponentType already, so extend its props
type IconComponent = LucideIcon & {
  defaultProps?: {
    color?: string;
  };
};

interface Props {
  icon: IconComponent;
  size?: number;
  strokeWidth?: number;
}

export function Icon({
  icon: IconComponent,
  size = 24,
  strokeWidth = 2,
}: Props) {
  const { theme } = useTheme();

  return (
    <IconComponent
      // cast props so TS stops complaining about `color`
      {...({ size, strokeWidth, color: theme.textPrimary } as any)}
    />
  );
}
