import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";

export function PromoCard({ title, image, expiry }) {
  return (
    <TouchableOpacity style={GlobalStyles.promoCard}>
      <Image source={image} style={GlobalStyles.promoImage} />
      <View style={GlobalStyles.promoContent}>
        <Text style={GlobalStyles.promoTitle}>{title}</Text>
        <Text style={GlobalStyles.promoExpiry}>{expiry}</Text>
      </View>
    </TouchableOpacity>
  );
}
