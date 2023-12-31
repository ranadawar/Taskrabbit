import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FONTS } from "../../constants/theme";

const SignOutBtn = ({ fontSize, onPress, style, title = "Sign Out" }) => {
  return (
    <Pressable style={[styles.mainContainer, style]} onPress={onPress}>
      <Image
        resizeMode="contain"
        source={require("../../../assets/icons/filtera.png")}
        style={{ width: 14, height: 14, marginRight: 10 }}
      />
      <Text
        numberOfLines={1}
        adjustToFontSize
        style={[styles.title, { fontSize: fontSize }]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default SignOutBtn;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 140,
    padding: 10,
    borderWidth: 1,
    borderRadius: "30%",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    marginRight: 5,
  },
});
