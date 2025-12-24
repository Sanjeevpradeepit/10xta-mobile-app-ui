import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { ChevronLeft, X } from 'lucide-react-native';

import { useThemedStyles } from '@/shared/theme/useThemedStyles';
import { useTheme } from '@/shared/theme';
import { createStyles } from './styles';
import { Icon } from '../Icon/Icon';

type Props = {
  title?: string;
  onClose?: () => void;
  onPressBack?: () => void;
  right?: React.ReactNode;
  handleBack?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  rightLabel?: string;
};

export default function CustomHeader({
  title,
  onClose,
  right,
  onPressBack,
  containerStyle,
  titleStyle,
  rightLabel,
}: Props) {
  const styles = useThemedStyles(createStyles);
  const { theme } = useTheme();

  const renderRight = () => {
    if (right) {
      return <View style={styles.right}>{right}</View>;
    }

    if (rightLabel && onClose) {
      return (
        <TouchableOpacity
          style={styles.right}
          onPress={onClose}
          activeOpacity={0.7}
        >
          <Text style={styles.actionText}>{rightLabel}</Text>
        </TouchableOpacity>
      );
    }

    // keep layout balanced
    return <View style={styles.right} />;
  };

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <View style={styles.row}>
        {/* Left / Back */}
        {onPressBack && <TouchableOpacity
          onPress={onPressBack}
          style={styles.left}
          activeOpacity={0.7}
        >
       <Icon icon={ChevronLeft} />

        </TouchableOpacity>}

        {/* Title */}
        <View style={styles.titleWrap}>
          <Text numberOfLines={1} style={[styles.title, titleStyle]}>
            {title ?? ''}
          </Text>
        </View>

        {/* Right */}
        {renderRight()}
      </View>
    </View>
  );
}
