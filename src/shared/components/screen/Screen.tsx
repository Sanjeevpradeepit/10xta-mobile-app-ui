import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleProp,
  ViewStyle,
  ScrollViewProps,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ScreenContent from '../screenContent/ScreenContent';
import { IsIOS } from '../../theme/appConstant';
import { useThemedStyles } from '../../theme';
import { createStyles } from './styles';

type Props = {
  children: React.ReactNode;
  title?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  showHeader?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  keyboardAvoid?: boolean;
  scroll?: boolean;
  listMode?: boolean;
  footerHeight?: number;
  scrollProps?: Partial<ScrollViewProps>;
};

export default function Screen({
  children,
  title,
  header,
  footer,
  showHeader = true,
  contentStyle,
  keyboardAvoid = true,
  scroll = false,
  listMode = false,
  footerHeight = 0,
  scrollProps,
}: Props) {
  const insets = useSafeAreaInsets();
  const styles = useThemedStyles(createStyles);

  const HEADER_HEIGHT = showHeader ? 56 : 0;
  const Wrapper: any = keyboardAvoid
    ? KeyboardAvoidingView
    : View;

  const keyboardOffset =
    keyboardAvoid && IsIOS ? HEADER_HEIGHT + insets.top : 0;

  const actualFooterHeight = footer ? footerHeight || 90 : 0;

  return (
    <View style={styles.root}>
      {/* MAIN AREA */}
      <View style={{ flex: 1 }}>
        {/* HEADER */}
        {showHeader && (
          <View style={styles.headerWrapper}>
            {header ? (
              header
            ) : title ? (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>{title}</Text>
              </View>
            ) : null}
          </View>
        )}

        {/* CONTENT */}
        <Wrapper
          style={{ flex: 1 }}
          behavior={
            keyboardAvoid && IsIOS ? 'padding' : undefined
          }
          keyboardVerticalOffset={keyboardOffset}
        >
          <ScreenContent
            scroll={scroll}
            listMode={listMode}
            footerHeight={actualFooterHeight || 16}
            contentStyle={contentStyle}
            scrollProps={scrollProps}
          >
            {children}
          </ScreenContent>
        </Wrapper>
      </View>

      {/* STICKY FOOTER */}
      {footer && (
        <View
          style={[
            styles.stickyFooter,
            { paddingBottom: Math.max(insets.bottom, 12) },
          ]}
        >
          {footer}
        </View>
      )}
    </View>
  );
}
