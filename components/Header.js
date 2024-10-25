import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { GlobalStyles } from "../styles/GlobalStyles";

export function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[GlobalStyles.header, { paddingTop: insets.top }]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
          paddingTop: 6,
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={GlobalStyles.logo}
        />

        <View style={GlobalStyles.rightIcons}>
          <TouchableOpacity style={GlobalStyles.iconButton}>
            <Icon name="qrcode" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyles.iconButton}>
            <Icon name="email-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyles.iconButton}>
            <Icon name="dots-vertical" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
