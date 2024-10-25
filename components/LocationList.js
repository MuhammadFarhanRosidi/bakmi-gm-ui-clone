import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { GlobalStyles } from "../styles/GlobalStyles";

const locations = [
  {
    name: "Galaxy Mall 3",
    address:
      "Mal Galaxy 3, lantai 4 Unit 4-344 & 4-345, Jl.Dr.Ir.Haji Soekarnno 178 Surabaya",
    distance: "2,4 km",
  },
  {
    name: "Tunjungan Plaza 6",
    address:
      "Tunjungan Plaza 6 Lt. 5 Unit 10-11 Jl Basuki Rahmat No.8-12, Surabaya",
    distance: "6,9 km",
  },
  // Add more locations as needed
];

export function LocationList() {
  return (
    <View style={GlobalStyles.locationContainer}>
      <View style={GlobalStyles.locationHeader}>
        <Text style={GlobalStyles.locationTitle}>Lokasi Outlet</Text>
        <TouchableOpacity>
          <Text style={GlobalStyles.seeAll}>LIHAT SEMUA</Text>
        </TouchableOpacity>
      </View>
      <Text style={GlobalStyles.locationSubtitle}>
        Cek lokasi untuk menggunakan kartu
      </Text>

      {locations.map((location, index) => (
        <TouchableOpacity
          key={index}
          style={[
            GlobalStyles.locationCard,
            index === locations.length - 1 && GlobalStyles.lastLocationCard,
          ]}
        >
          <View style={GlobalStyles.locationInfo}>
            <Text style={GlobalStyles.locationName}>{location.name}</Text>
            <Text style={GlobalStyles.locationAddress}>{location.address}</Text>
            <View style={GlobalStyles.distanceContainer}>
              <Icon name="map-marker" size={16} color="#666" />
              <Text style={GlobalStyles.distanceText}>{location.distance}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
