import React, { useRef } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Animated } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Home, Globe, Bookmark, User } from "lucide-react-native";
import { useThemeColors } from "@/src/store/hooks";

const SLIDE_DISTANCE = 18;
const ANIM_DURATION = 220;

export default function BottomNav({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { colors } = useThemeColors();
  const prevIndexRef = useRef(state.index);

  const getIcon = (routeName: string, isFocused: boolean) => {
    const color = isFocused ? "#FFFFFF" : colors.textSecondary;
    const size = 24;

    switch (routeName) {
      case "home":
        return <Home color={color} size={size} />;
      case "explore":
        return <Globe color={color} size={size} />;
      case "bookmarks":
        return <Bookmark color={color} size={size} />;
      case "profile":
        return <User color={color} size={size} />;
      default:
        return <Home color={color} size={size} />;
    }
  };

  const getLabel = (routeName: string) => {
    switch (routeName) {
      case "home":
        return "Home";
      case "explore":
        return "Discover";
      case "bookmarks":
        return "Bookmarks";
      case "profile":
        return "Profile";
      default:
        return routeName;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            prevIndexRef.current = state.index;
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const direction = index > prevIndexRef.current ? 1 : -1;

        return (
          <TabButton
            key={route.key}
            isFocused={isFocused}
            direction={direction}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            icon={getIcon(route.name, isFocused)}
            label={getLabel(route.name)}
          />
        );
      })}
    </View>
  );
}

function TabButton({
  isFocused,
  direction,
  accessibilityLabel,
  testID,
  onPress,
  onLongPress,
  icon,
  label,
}: {
  isFocused: boolean;
  direction: number;
  accessibilityLabel?: string;
  testID?: string;
  onPress: () => void;
  onLongPress: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  const translateX = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(isFocused ? 1 : 0)).current;
  const wasFocused = useRef(isFocused);

  React.useEffect(() => {
    if (isFocused && !wasFocused.current) {
      translateX.setValue(direction * SLIDE_DISTANCE);
      opacity.setValue(0);
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: ANIM_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: ANIM_DURATION,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (!isFocused && wasFocused.current) {
      translateX.setValue(0);
      opacity.setValue(0);
    }
    wasFocused.current = isFocused;
  }, [isFocused, direction, translateX, opacity]);

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabSlot}
    >
      {isFocused ? (
        <Animated.View
          style={[
            styles.activePill,
            { opacity, transform: [{ translateX }] },
          ]}
        >
          {icon}
          <Text style={styles.activeLabel} numberOfLines={1}>
            {label}
          </Text>
        </Animated.View>
      ) : (
        <View style={styles.inactiveIcon}>{icon}</View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 12,
    paddingHorizontal: 25,
    borderTopWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabSlot: {
    alignItems: "center",
    justifyContent: "center",
  },
  activePill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0EA5E9",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 9999,
  },
  activeLabel: {
    color: "#FFFFFF",
    marginLeft: 8,
    fontWeight: "600",
    fontSize: 14,
  },
  inactiveIcon: {
    padding: 12,
  },
});
