// src/components/ScreenContent.tsx
import { IsIOS } from '@/shared/theme';
import React, { forwardRef } from 'react';
import {
  View,
  ScrollView,
  StyleProp,
  ViewStyle,
  ScrollViewProps,
} from 'react-native';

type Props = {
  scroll?: boolean;
  listMode?: boolean;
  footerHeight?: number;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  scrollProps?: Partial<ScrollViewProps>;
};

/**
 * ScreenContent: Use when you want either:
 *  - scroll: a ScrollView (for general content), or
 *  - listMode: a plain wrapper (you will render a FlatList/FlashList inside)
 *
 * Important: Do NOT render FlatList inside ScrollView. Use listMode when main content is a list.
 */
const ScreenContent = forwardRef<any, Props>(
  (
    {
      scroll = false,
      listMode = false,
      footerHeight = 0,
      style,
      contentStyle,
      children,
      scrollProps,
    },
    ref,
  ) => {
    // If the page main content is a list (FlatList / FlashList), do NOT wrap in a ScrollView.
    if (listMode) {
      return (
        <View ref={ref} style={[{ flex: 1 }, style]}>
          {children}
        </View>
      );
    }

    if (!scroll) {
      // Plain content, no ScrollView
      return (
        <View ref={ref} style={[{ flex: 1 }, style]}>
          {children}
        </View>
      );
    }

    // Scroll mode: tuned ScrollView for footer reservation + nested scroll
    return (
      <ScrollView
        ref={ref}
        style={[{ flex: 1 }, style as any]}
        contentContainerStyle={[
          { flexGrow: 1, paddingBottom: footerHeight || 16 },
          contentStyle as any,
        ]}
        
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
        keyboardDismissMode={IsIOS ? 'interactive' : 'on-drag'}
        scrollEventThrottle={16}
        {...scrollProps}
      >
        {children}
      </ScrollView>
    );
  },
);

export default ScreenContent;
